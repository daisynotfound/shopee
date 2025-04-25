<?php

namespace App\Http\Controllers;

use App\Models\Kategori;
use Illuminate\Http\Request;

class KategoriController extends Controller
{
    public function index()
    {
        $kategoris = Kategori::all();
        return view('adminHome', compact('kategoris'));
    }

    // Menampilkan form untuk menambahkan kategori
    public function create()
    {
        return view('kategori.create');
    }

    // Menyimpan kategori baru
    public function store(Request $request)
{
    $request->validate([
        'nama_kategori' => 'required|unique:kategoris'
    ]);

    Kategori::create($request->all());

    return redirect()->route('adminHome')->with('success', 'Kategori berhasil ditambahkan');
}

    // Menampilkan form edit kategori
    public function edit($id)
    {
        $kategori = Kategori::findOrFail($id);
        return view('kategori.edit', compact('kategori'));
    }

    // Update data kategori
    public function update(Request $request, $id)
    {
        $request->validate([
            'nama_kategori' => 'required'
        ]);

        $kategori = Kategori::findOrFail($id);
        $kategori->update($request->all());

        return redirect()->route('kategori.index')->with('success', 'Kategori berhasil diperbarui');
    }

    // Menghapus kategori
    public function destroy($id)
    {
        $kategori = Kategori::findOrFail($id);
        $kategori->delete();

        return redirect()->route('kategori.index')->with('success', 'Kategori berhasil dihapus');
    }
}
