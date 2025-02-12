<?php

namespace App\Http\Controllers;

use App\Models\Produk;
use Illuminate\Http\Request;

class ProdukController extends Controller
{
    // Menampilkan semua produk
    public function index() {
        $produks = Produk::all();
        return view('adminHome', ['produks' => $produks]);
    }

    public function create() {
        return view('produk.create');
    }
    
    // Menyimpan produk baru
    public function store(Request $request) {
        // Validasi input
        $request->validate([
            'kode_produk' => 'required|unique:produks', // Sesuaikan dengan nama tabel
            'nama' => 'required',
            'harga' => 'required'
        ]);

        // Menyimpan data produk
        Produk::create($request->all());

        // Redirect ke halaman adminHome setelah berhasil
        return redirect()->route('adminHome')->with('success', 'Produk berhasil ditambahkan');
    }

    // Menampilkan form untuk edit produk
    public function edit($id) {
        $produk = Produk::find($id);

        // Pastikan menggunakan 'produk' untuk variabel yang akan dikirim
        return view('produk.edit', compact('produk'));
    }

    // Memperbaharui data produk
    public function update(Request $request, $id) {
        // Validasi input
        $request->validate([
            'kode_produk' => 'required',
            'nama' => 'required', // Perbaiki typo 'reqiured'
            'harga' => 'required'
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
