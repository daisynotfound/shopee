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
    public function index() {
        $produks = Produk::with('kategori')->get();
        return view('adminHome', ['produks' => $produks]);
    }

    public function create() {
        $kategoris = Kategori::all();
        return view('produk.create', compact('kategoris'));
    }
    
    // Menyimpan produk baru
    public function store(Request $request) {
        $request->validate([
            'kode_produk' => 'required|unique:produks',
            'nama' => 'required',
            'harga' => 'required',
            'kategori_id' => 'required|exists:kategoris,id',
            'gambar' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048',
            'game_file' => 'nullable|mimes:zip,rar,7z,exe|max:102400', // ✅ max 100MB
        ]);

        $data = $request->all();

        // Upload gambar jika ada
        if ($request->hasFile('gambar')) {
            $data['gambar'] = $request->file('gambar')->store('produk', 'public');
        }

        // ✅ Upload file game jika ada
        if ($request->hasFile('game_file')) {
            $data['game_file'] = $request->file('game_file')->store('games', 'public');
        }

        Produk::create($data);

        return redirect()->route('adminHome')->with('success', 'Produk berhasil ditambahkan');
    }

    public function edit($id) {
        $produk = Produk::find($id);
        $kategoris = Kategori::all();
        return view('produk.edit', compact('produk', 'kategoris'));
    }

    public function update(Request $request, $id) {
        $request->validate([
            'kode_produk' => 'required',
            'nama' => 'required',
            'harga' => 'required',
            'kategori_id' => 'required|exists:kategoris,id',
            'gambar' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048',
            'game_file' => 'nullable|mimes:zip,rar,7z,exe|max:102400', // ✅ max 100MB
        ]);

        $produk = Produk::find($id);

        $data = $request->all();

        // Jika upload gambar baru
        if ($request->hasFile('gambar')) {
            if ($produk->gambar && Storage::disk('public')->exists($produk->gambar)) {
                Storage::disk('public')->delete($produk->gambar);
            }
            $data['gambar'] = $request->file('gambar')->store('produk', 'public');
        }

        // ✅ Jika upload file game baru
        if ($request->hasFile('game_file')) {
            if ($produk->game_file && Storage::disk('public')->exists($produk->game_file)) {
                Storage::disk('public')->delete($produk->game_file);
            }
            $data['game_file'] = $request->file('game_file')->store('games', 'public');
        }

        $produk->update($data);

        return redirect()->route('adminHome')->with('success', 'Produk berhasil diperbaharui');
    }

    public function destroy($id) {
        $produk = Produk::find($id);
        
        if (!$produk) {
            return redirect()->route('adminHome')->with('error', 'Produk tidak ditemukan');
        }

        // Hapus gambar
        if ($produk->gambar && Storage::disk('public')->exists($produk->gambar)) {
            Storage::disk('public')->delete($produk->gambar);
        }

        // ✅ Hapus file game
        if ($produk->game_file && Storage::disk('public')->exists($produk->game_file)) {
            Storage::disk('public')->delete($produk->game_file);
        }

        $produk->delete();
        return redirect()->route('adminHome')->with('success', 'Produk berhasil dihapus');
    }


}
