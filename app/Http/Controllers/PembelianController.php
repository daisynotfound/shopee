<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Produk;
use App\Models\User;
use App\Models\Cart;
use App\Models\Transaksi;
use app\Models\Kategori;
use Illuminate\Support\Facades\Auth;
use Barryvdh\DomPDF\Facade\Pdf; // ✅ Tambahkan ini untuk PDF

class PembelianController extends Controller
{
    public function index()
    {
        $tikets = Produk::all();
        $users = User::all();
        $carts = Cart::all();

        return view('transaksi.transaksi', compact('tikets', 'users', 'carts'));
    }

    public function transaksiCart()
    {
        $user = Auth::user();
        $carts = Cart::where('user_id', $user->id)->get();

        return view('transaksi.cart', compact('carts'));
    }

    public function beli(Request $request)
    {
        $request->validate([
            'produk_id' => 'required|exists:produks,id',
        ]);

        $user = Auth::user();
        $produk = Produk::findOrFail($request->produk_id);

        $cart = new Cart();
        $cart->user_id = $user->id;
        $cart->kode_produk = $produk->kode_produk;
        $cart->nama_user = $user->name;
        $cart->harga = $produk->harga;
        $cart->status = 'Pending';
        $cart->save();

        return redirect()->route('transaksi.cart')->with('success', 'Tiket berhasil dipesan!');
    }

    public function clearcart($id)
    {
        $cart = Cart::where('id', $id)->where('user_id', Auth::id())->first();

        if ($cart) {
            $cart->delete();
            return redirect()->route('transaksi.cart')->with('success', 'Item berhasil dihapus dari cart.');
        }

        return redirect()->route('transaksi.cart')->with('error', 'Item tidak ditemukan.');
    }

    public function transaksiIndex()
    {
        $user = Auth::user();
        $transaksis = Transaksi::where('user_id', $user->id)->get(); 
        return view('transaksi.transaksi', compact('transaksis'));
    }

    public function transaksiIndexManager()
    {
        $transaksis = Transaksi::all(); 
        return view('transaksi.transaksiManager', compact('transaksis'));
    }

    public function bayar(Request $request)
    {
        $request->validate([
            'cart_id' => 'required|exists:carts,id', 
        ]);

        $user = Auth::user();
        $cart = Cart::findOrFail($request->cart_id); 

        $transaksi = new Transaksi();
        $transaksi->user_id = $user->id;
        $transaksi->kode_produk = $cart->kode_produk;
        $transaksi->nama_user = $user->name;
        $transaksi->harga = $cart->harga;
        $transaksi->status = 'Pending';
        $transaksi->save();

        $cart->delete();

        return redirect()->route('transaksi.transaksi') 
            ->with('success', 'Produk berhasil dibayar dan masuk ke transaksi!');
    }

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

    public function clear($id)
    {
        $transaksi = Transaksi::find($id);

        if ($transaksi) {
            $transaksi->delete();
            return redirect()->route('transaksi.transaksi')
                ->with('success', 'Transaksi berhasil dihapus');
        }

        return redirect()->route('transaksi.transaksi')
            ->with('error', 'Transaksi tidak ditemukan');
    }

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

    public function generatePdf($id)
    {
        $transaksi = Transaksi::find($id);

        if (!$transaksi) {
            return redirect()->back()->with('error', 'Transaksi tidak ditemukan.');
        }

        $pdf = Pdf::loadView('transaksi.pdf', compact('transaksi'));
        return $pdf->download('transaksi-' . $transaksi->kode_produk . '.pdf');
    }
    
   
}
