<?php

namespace App\Http\Controllers;

use ZipArchive;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;
use App\Models\Produk;
use App\Models\User;
use App\Models\Cart;
use App\Models\Transaksi;
use Illuminate\Support\Facades\Auth;
use Barryvdh\DomPDF\Facade\Pdf;
use FFI;
use Illuminate\Support\Facades\Storage;
use Ramsey\Uuid\Guid\Fields;

class PembelianController extends Controller
{
    // Fungsi untuk mengekstrak file ZIP game
    public function playGame($kode_produk)
    {
        $user = Auth::user();
        $produk = Produk::where('kode_produk', $kode_produk)->first();

        if (!$produk) {
            return view('transaksi.play', ['error' => 'Produk tidak ditemukan.']);
        }

        // Cek apakah user adalah pemilik produk
        if ($produk->owner_id == $user->id) {
            // Owner boleh langsung main tanpa transaksi
            $zipFilePath = storage_path('app/public/' . $produk->game_file);
            $gameFolder = pathinfo($produk->game_file, PATHINFO_FILENAME);
            $extractTo = storage_path('app/public/games/' . $gameFolder);

            if (!File::exists($extractTo)) {
                if (File::exists($zipFilePath)) {
                    $this->extractGameZip($zipFilePath, $extractTo);
                } else {
                    return view('transaksi.play', ['error' => 'File ZIP tidak ditemukan.']);
                }
            }

            $indexPath = $extractTo . '/index.html';
            if (!file_exists($indexPath)) {
                return view('transaksi.play', ['error' => 'File index.html game tidak ditemukan.']);
            }

            $gameUrl = asset('storage/games/' . $gameFolder . '/index.html');

            return view('transaksi.play', [
                'gameUrl' => $gameUrl,
                'transaksi' => null, // tidak ada transaksi, owner langsung akses
                'message' => 'Anda adalah pemilik game ini, dapat langsung dimainkan.',
            ]);
        }

        // Kalau bukan owner, cek apakah sudah pernah transaksi selesai
        $transaksi = Transaksi::where('kode_produk', $kode_produk)
            ->where('user_id', $user->id)
            ->where('status', 'Selesai')
            ->first();

        if (!$transaksi) {
            return view('transaksi.play', ['error' => 'Transaksi tidak ditemukan atau status transaksi belum selesai.']);
        }

        if (!$transaksi->game_file) {
            return view('transaksi.play', ['error' => 'File game tidak ditemukan.']);
        }

        $zipFilePath = storage_path('app/public/' . $transaksi->game_file);
        $gameFolder = pathinfo($transaksi->game_file, PATHINFO_FILENAME);
        $extractTo = storage_path('app/public/games/' . $gameFolder);

        if (!File::exists($extractTo)) {
            if (File::exists($zipFilePath)) {
                $this->extractGameZip($zipFilePath, $extractTo);
            } else {
                return view('transaksi.play', ['error' => 'File ZIP tidak ditemukan.']);
            }
        }

        $indexPath = $extractTo . '/index.html';
        if (!file_exists($indexPath)) {
            return view('transaksi.play', ['error' => 'File index.html game tidak ditemukan.']);
        }

        $gameUrl = asset('storage/games/' . $gameFolder . '/index.html');

        return view('transaksi.play', compact('transaksi', 'gameUrl'));
    }



    private function extractGameZip($zipFilePath, $extractTo)
    {
        $gamesBasePath = storage_path('app/public/games');
        if (!File::exists($gamesBasePath)) {
            File::makeDirectory($gamesBasePath, 0755, true);
        }

        if (!File::exists($extractTo)) {
            File::makeDirectory($extractTo, 0755, true);
        }

        $zip = new \ZipArchive;
        if ($zip->open($zipFilePath) === true) {
            $zip->extractTo($extractTo);
            $zip->close();

            $files = File::files($extractTo);
            $dirs = File::directories($extractTo);
            if (count($dirs) === 1 && count($files) === 0) {
                $inner = $dirs[0];
                File::copyDirectory($inner, $extractTo);
                File::deleteDirectory($inner);
            }
        }
    }

    // Fungsi untuk cek approval transaksi
    public function checkApproval($kode_produk)
{
    $user = Auth::user();

    $produk = Produk::where('kode_produk', $kode_produk)->first();

    if (!$produk) {
        return false;
    }

    // Jika owner → langsung true
    if ($produk->owner_id == $user->id) {
        return true;
    }

    // Kalau bukan owner → cek transaksi
    $transaksi = Transaksi::where('kode_produk', $kode_produk)
        ->where('user_id', $user->id)
        ->where('status', 'Selesai')
        ->first();

    return $transaksi != null;
}




    // Fungsi untuk membeli produk dan menambahkannya ke cart
    public function beli(Request $request)
    {
        $request->validate([
            'produk_id' => 'required|exists:produks,id',
        ]);

        $user = Auth::user();
        $produk = Produk::with('kategori')->findOrFail($request->produk_id);

        $cart = new Cart();
        $cart->user_id = $user->id;
        $cart->kode_produk = $produk->kode_produk;
        $cart->nama_user = $user->name;
        $cart->harga = $produk->harga;
        $cart->kategori = $produk->kategori ? $produk->kategori->nama : null;
        $cart->status = 'Pending';
        $cart->save();

        return redirect()->route('transaksi.cart')->with('success', 'Produk berhasil dipesan!');
    }

    // Fungsi untuk menampilkan halaman cart
    public function transaksiCart()
    {
        $user = Auth::user();
        $carts = Cart::where('user_id', $user->id)->get();

        return view('transaksi.cart', compact('carts'));
    }

    // Fungsi untuk menghapus item dari cart
    public function clearcart($id)
    {
        $cart = Cart::where('id', $id)->where('user_id', Auth::id())->first();

        if ($cart) {
            $cart->delete();
            return redirect()->route('transaksi.cart')->with('success', 'Item berhasil dihapus dari cart.');
        }

        return redirect()->route('transaksi.cart')->with('error', 'Item tidak ditemukan.');
    }

    // Fungsi untuk menampilkan transaksi user
    public function transaksiIndex()
    {
        $user = Auth::user();
        $transaksis = Transaksi::where('user_id', $user->id)->get();
        return view('transaksi.transaksi', compact('transaksis'));
    }

    // Fungsi untuk menampilkan semua transaksi (untuk manager)
    public function transaksiIndexManager()
    {
        $transaksis = Transaksi::all();
        return view('transaksi.transaksiManager', compact('transaksis'));
    }

    // Fungsi untuk melakukan pembayaran
    public function bayar(Request $request)
    {
        $request->validate([
            'cart_id' => 'required|exists:carts,id',
        ]);

        $user = Auth::user();
        $cart = Cart::findOrFail($request->cart_id);
        $produk = Produk::where('kode_produk', $cart->kode_produk)->first();

        $transaksi = new Transaksi();
        $transaksi->user_id = $user->id;
        $transaksi->kode_produk = $cart->kode_produk;
        $transaksi->nama_user = $user->name;
        $transaksi->harga = $cart->harga;
        $transaksi->kategori = $cart->kategori ?? ($produk && $produk->kategori ? $produk->kategori->nama : null);
        $transaksi->game_file = $produk ? $produk->game_file : null;
        $transaksi->status = 'Pending';
        $transaksi->save();

        $cart->delete();

        return redirect()->route('transaksi.transaksi')
            ->with('success', 'Produk berhasil dibayar dan masuk ke transaksi!');
    }

    // Fungsi untuk menghapus transaksi
    public function hapus($id)
    {
        $transaksi = Transaksi::find($id);

        if ($transaksi) {
            $transaksi->delete();
            return redirect()->route('transaksi.transaksiManager')
                ->with('success', 'Transaksi berhasil dihapus');
        }

        return redirect()->route('transaksi.transaksiManager')
            ->with('error', 'Transaksi tidak ditemukan.');
    }

    // Fungsi untuk menghapus transaksi dari halaman transaksi user
    public function clear($id)
    {
        $transaksi = Transaksi::where('id', $id)->where('user_id', Auth::id())->first();

        if ($transaksi) {
            $transaksi->delete();
            return redirect()->route('transaksi.transaksi')
                ->with('success', 'Transaksi berhasil dihapus');
        }

        return redirect()->route('transaksi.transaksi')
            ->with('error', 'Transaksi tidak ditemukan');
    }

    // Fungsi untuk mengonfirmasi status transaksi
    public function konfirmasiStatus($id)
    {
        $transaksi = Transaksi::find($id);

        if ($transaksi) {
            $transaksi->status = 'Selesai';
            $transaksi->save();
            return redirect()->route('transaksi.transaksiManager')
                ->with('success', 'Transaksi berhasil dikonfirmasi.');
        }

        return redirect()->route('transaksi.transaksiManager')
            ->with('error', 'Transaksi tidak ditemukan.');
    }

    // Fungsi untuk generate PDF transaksi
    public function generatePdf($id)
    {
        $transaksi = Transaksi::find($id);

        if (!$transaksi) {
            return redirect()->back()->with('error', 'Transaksi tidak ditemukan.');
        }

        $pdf = Pdf::loadView('transaksi.pdf', compact('transaksi'));
        return $pdf->download('transaksi-' . $transaksi->kode_produk . '.pdf');
    }

    public function downloadGame($kode_produk)
    {
        $user = Auth::user();
        $produk = Produk::where('kode_produk', $kode_produk)->firstOrFail();

        // Cek apakah user adalah pemilik produk
        if ($produk->owner_id == $user->id) {
            // Owner boleh langsung download
            $path = $produk->game_file;
            if (!$path || !Storage::disk('public')->exists($path)) {
                return redirect()->back()->with('error', 'File game tidak ditemukan.');
            }

            return response()->download(storage_path('app/public/' . $path));
        }

        // Jika bukan owner, cek apakah user sudah transaksi
        $transaksi = Transaksi::where('user_id', $user->id)
            ->where('kode_produk', $kode_produk)
            ->where('status', 'Selesai') // status yang disetujui admin
            ->first();

        if (!$transaksi) {
            return redirect()->back()->with('error', 'Anda belum memiliki akses untuk mendownload game ini.');
        }

        $path = $produk->game_file;
        if (!$path || !Storage::disk('public')->exists($path)) {
            return redirect()->back()->with('error', 'File game tidak ditemukan.');
        }

        return response()->download(storage_path('app/public/' . $path));
    }
}
