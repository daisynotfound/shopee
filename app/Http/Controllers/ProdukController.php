<?php

namespace App\Http\Controllers;

use App\Models\Produk;
use App\Models\Kategori;
use Illuminate\Http\Request;

class ProdukController extends Controller
{
    // Menampilkan semua produk beserta kategori
    public function index() {
        $produks = Produk::with('kategori')->get(); // Ambil produk beserta kategori
        return view('adminHome', ['produks' => $produks]);
    }

    public function create() {
        $kategoris = Kategori::all(); // Ambil semua kategori
        return view('produk.create', compact('kategoris'));
    }
    
    // Menyimpan produk baru
    public function store(Request $request) {
        // Validasi input
        $request->validate([
            'kode_produk' => 'required|unique:produks', // Sesuaikan dengan nama tabel
            'nama' => 'required',
            'harga' => 'required',
            'kategori_id' => 'required|exists:kategoris,id', // Pastikan kategori_id ada di tabel kategoris
        ]);

        // Menyimpan data produk
        Produk::create($request->all());

        // Redirect ke halaman adminHome setelah berhasil
        return redirect()->route('adminHome')->with('success', 'Produk berhasil ditambahkan');
    }

    // Menampilkan form untuk edit produk
    public function edit($id) {
        $produk = Produk::find($id);
        $kategoris = Kategori::all(); // Ambil semua kategori
        return view('produk.edit', compact('produk', 'kategoris'));
    }

    // Memperbaharui data produk
    public function update(Request $request, $id) {
        // Validasi input
        $request->validate([
            'kode_produk' => 'required',
            'nama' => 'required',
            'harga' => 'required',
            'kategori_id' => 'required|exists:kategoris,id', // Pastikan kategori_id ada di tabel kategoris
        ]);

        // Mencari produk berdasarkan ID dan memperbaharui
        $produk = Produk::find($id);
        $produk->update($request->all());

        // Redirect setelah update berhasil
        return redirect()->route('adminHome')->with('success', 'Produk berhasil diperbaharui');
    }

    // Menghapus produk
    public function destroy($id) {
        $produk = Produk::find($id);
        
        if (!$produk) {
            return redirect()->route('adminHome')->with('error', 'Produk tidak ditemukan');
        }
    
        $produk->delete();
        return redirect()->route('adminHome')->with('success', 'Produk berhasil dihapus');
    }
}
