<?php

namespace App\Http\Controllers;

use App\Models\Produk;
use App\Models\Kategori;
use Illuminate\Http\Request;
use Illuminate\View\View;
use Illuminate\Support\Facades\Storage;


class HomeController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }

    public function index(Request $request): View
    {
        $query = Produk::query();

        // Filter pencarian
        if ($request->has('search') && $request->search != '') {
            $query->where(function($q) use ($request) {
                $q->where('nama', 'like', '%' . $request->search . '%')
                  ->orWhere('kode_produk', 'like', '%' . $request->search . '%')
                  ->orWhereHas('kategori', function ($sub) use ($request) {
                      $sub->where('nama_kategori', 'like', '%' . $request->search . '%');
                  });
            });
        }

        // Filter berdasarkan kategori
        if ($request->filled('kategori')) {
            $query->where('kategori_id', $request->kategori);
        }

        $produks = $query->latest()->get();
        $kategoris = Kategori::all();

        return view('home', [
            'produks' => $produks,
            'kategoris' => $kategoris,
        ]);
    }

    public function adminHome(Request $request): View {
        $search = $request->input('search');

        $produks = Produk::query()
            ->when($search, function ($query, $search) {
                $query->where('nama', 'like', '%' . $search . '%')
                      ->orWhere('kode_produk', 'like', '%' . $search . '%');
            })
            ->with('kategori') // Jika kamu ingin menampilkan nama kategori
            ->get();

        return view('adminHome', [
            'produks' => $produks
        ]);
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
        $request->validate([
            'kode_produk' => 'required',
            'nama' => 'required',
            'harga' => 'required',
        ]);

        $produk = Produk::findOrFail($id);

        // Update field biasa
        $produk->kode_produk = $request->kode_produk;
        $produk->nama = $request->nama;
        $produk->harga = $request->harga;
        $produk->kategori_id = $request->kategori_id;

        // ✅ Upload gambar baru (jika ada)
        if ($request->hasFile('gambar')) {
            // Hapus gambar lama jika ada
            if ($produk->gambar && Storage::disk('public')->exists($produk->gambar)) {
                Storage::disk('public')->delete($produk->gambar);
            }

            // Simpan gambar baru
            $path = $request->file('gambar')->store('produk', 'public');
            $produk->gambar = $path;
        }

        // ✅ Upload file game (jika ada)
        if ($request->hasFile('game_file')) {
            // Hapus file lama jika ada
            if ($produk->game_file && Storage::disk('public')->exists($produk->game_file)) {
                Storage::disk('public')->delete($produk->game_file);
            }

            // Simpan file game baru
            $path = $request->file('game_file')->store('game_files', 'public');
            $produk->game_file = $path;
        }

        $produk->save(); // Simpan semua perubahan

        return redirect()->route('home')->with('success', 'Produk berhasil diperbarui');
    }


    // Menghapus produk
    public function destroy($id) {
        $produk = Produk::find($id);
        $produk->delete();

        // Redirect setelah produk berhasil dihapus
        return redirect()->route('adminHome')->with('success', 'Produk berhasil dihapus');
    }
}
