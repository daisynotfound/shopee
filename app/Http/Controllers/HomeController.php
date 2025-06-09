<?php

namespace App\Http\Controllers;

use App\Models\Produk;
use Illuminate\Http\Request;
use Illuminate\View\View;


class HomeController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }

    public function index(Request $request): View
{
    $query = Produk::query();

    // Cek apakah ada parameter 'search'
    if ($request->has(`search`) && $request->search != '') {
        $query->where('nama', 'like', '%' . $request->search . '%')
              ->orWhere('kode_produk', 'like', '%' . $request->search . '%')
              ->orWhereHas('kategori', function ($q) use ($request) {
                  $q->where('nama_kategori', 'like', '%' . $request->search . '%');
              });
    }

    $produks = $query->latest()->get();

    return view('home', ['produks' => $produks]);
}

    public function adminHome(): View {
        $produks = Produk::all();
        return view('adminHome', ['produks' => $produks]);
    }

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
        $produk->delete();

        // Redirect setelah produk berhasil dihapus
        return redirect()->route('adminHome')->with('success', 'Produk berhasil dihapus');
    }
}
