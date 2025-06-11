<?php

namespace App\Http\Controllers;

use App\Models\Produk;
use App\Models\Transaksi;
use Illuminate\Support\Facades\Auth;
use App\Models\Kategori;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class ProdukController extends Controller
{
    // Menampilkan semua produk beserta kategori
    public function index(Request $request)
{
    $search = $request->input('search');

    $produks = Produk::with('kategori')
        ->when($search, function ($query, $search) {
            $query->where('nama', 'like', '%' . $search . '%')
                  ->orWhere('kode_produk', 'like', '%' . $search . '%');
        })
        ->get();

    return view('adminHome', ['produks' => $produks]);
}

    public function create() {
        $kategoris = Kategori::all();
        return view('produk.create', compact('kategoris'));
    }

    // Menyimpan produk baru
    public function store(Request $request)
{
    $request->validate([
        'kode_produk' => 'required|unique:produks',
        'nama' => 'required',
        'harga' => 'required',
        'kategori_id' => 'required|exists:kategoris,id',
        'gambar' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048',
        'game_file' => 'nullable|mimes:zip,rar,7z,exe,apk,html|max:102400', // max 100MB
    ]);

    $data = $request->all();

    // Tambahkan owner_id
    $data['owner_id'] = Auth::user()->id;

    // Upload gambar jika ada
    if ($request->hasFile('gambar')) {
        $data['gambar'] = $request->file('gambar')->store('produk', 'public');
    }

    // Upload file game jika ada
    if ($request->hasFile('game_file')) {
        $data['game_file'] = $request->file('game_file')->store('games', 'public');
    }

    Produk::create($data);

    // Redirect sesuai role
    if (Auth::user()->type == 1) {
        return redirect()->route('adminHome')->with('success', 'Produk berhasil ditambahkan!');
    } else {
        return redirect()->route('home')->with('success', 'Produk berhasil ditambahkan!');
    }
}


    public function edit($id) {
        $produk = Produk::find($id);

        if (!$produk) {
            return redirect()->route('home')->with('error', 'Produk tidak ditemukan');
        }

        // ✅ Cek apakah user boleh edit
        if (Auth::user()->type != 1 && $produk->owner_id != Auth::id()) {
            return redirect()->route('home')->with('error', 'Anda tidak memiliki izin untuk mengedit produk ini');
        }

        $kategoris = Kategori::all();
        return view('produk.edit', compact('produk', 'kategoris'));
    }

    public function update(Request $request, $id)
{
    $request->validate([
        'kode_produk' => 'required',
        'nama' => 'required',
        'harga' => 'required|numeric',
        'kategori_id' => 'required|exists:kategoris,id',
        'gambar' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048',
        'game_file' => 'nullable|mimes:zip,rar,7z,exe|max:102400',
    ]);

    $produk = Produk::find($id);

    if (!$produk) {
        return redirect()->route('home')->with('error', 'Produk tidak ditemukan');
    }

    if (Auth::user()->type != 1 && $produk->owner_id !== Auth::id()) {
        return redirect()->route('home')->with('error', 'Tidak punya izin');
    }

    $produk->kode_produk = $request->kode_produk;
    $produk->nama = $request->nama;
    $produk->harga = $request->harga;
    $produk->kategori_id = $request->kategori_id;

    // ✅ Gambar
    if ($request->hasFile('gambar')) {
        if ($produk->gambar && Storage::disk('public')->exists($produk->gambar)) {
            Storage::disk('public')->delete($produk->gambar);
        }
        $produk->gambar = $request->file('gambar')->store('produk', 'public');
    }

    // ✅ File Game
    if ($request->hasFile('game_file')) {
        if ($produk->game_file && Storage::disk('public')->exists($produk->game_file)) {
            Storage::disk('public')->delete($produk->game_file);
        }
        $produk->game_file = $request->file('game_file')->store('games', 'public');
    }

    $produk->save();

    return redirect()->route(Auth::user()->type == 1 ? 'adminHome' : 'home')
        ->with('success', 'Produk berhasil diperbarui');
}



    public function destroy($id) {
        $produk = Produk::find($id);

        if (!$produk) {
            return redirect()->route('home')->with('error', 'Produk tidak ditemukan');
        }

        // ✅ Cek apakah user boleh hapus
        if (Auth::user()->type != 1 && $produk->owner_id != Auth::id()) {
            return redirect()->route('home')->with('error', 'Anda tidak memiliki izin untuk menghapus produk ini');
        }

        if ($produk->gambar && Storage::disk('public')->exists($produk->gambar)) {
            Storage::disk('public')->delete($produk->gambar);
        }

        if ($produk->game_file && Storage::disk('public')->exists($produk->game_file)) {
            Storage::disk('public')->delete($produk->game_file);
        }

        $produk->delete();

        // ✅ Redirect sesuai type
        if (Auth::user()->type == 1) {
            return redirect()->route('adminHome')->with('success', 'Produk berhasil dihapus');
        } else {
            return redirect()->route('home')->with('success', 'Produk berhasil dihapus');
        }
    }
}
