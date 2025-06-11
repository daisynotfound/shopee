@extends('layouts.app')

@section('content')
<div class="container">
    <h2 class="mb-4">Edit Produk</h2>

    <!-- Menampilkan Error Validasi -->
    @if ($errors->any())
        <div class="alert alert-danger">
            <ul class="mb-0">
                @foreach ($errors->all() as $error)
                    <li>{{ $error }}</li>
                @endforeach
            </ul>
        </div>
    @endif

    <form action="{{ route('produk.update', $produk->id) }}" method="POST" enctype="multipart/form-data">
        @csrf
        @method('PUT')

        <!-- Kode Produk -->
        <div class="form-group mb-3">
            <label for="kode_produk">Kode Produk</label>
            <input type="text" name="kode_produk" id="kode_produk" class="form-control"
                   value="{{ old('kode_produk', $produk->kode_produk) }}" required>
        </div>

        <!-- Nama Produk -->
        <div class="form-group mb-3">
            <label for="nama">Nama Produk</label>
            <input type="text" name="nama" id="nama" class="form-control"
                   value="{{ old('nama', $produk->nama) }}" required>
        </div>

        <!-- Harga -->
        <div class="form-group mb-3">
            <label for="harga">Harga</label>
            <input type="number" name="harga" id="harga" class="form-control"
                   value="{{ old('harga', $produk->harga) }}" required>
        </div>

        <!-- Kategori -->
        <div class="form-group mb-3">
            <label for="kategori_id">Kategori</label>
            <select name="kategori_id" id="kategori_id" class="form-control" required>
                <option value="" disabled {{ $produk->kategori_id ? '' : 'selected' }}>Pilih Kategori</option>
                @foreach($kategoris as $kategori)
                    <option value="{{ $kategori->id }}"
                        {{ old('kategori_id', $produk->kategori_id) == $kategori->id ? 'selected' : '' }}>
                        {{ $kategori->nama_kategori }}
                    </option>
                @endforeach
            </select>
        </div>

        <!-- Upload Gambar -->
        <div class="form-group mb-3">
            <label for="gambar">Gambar Produk</label>
            <input type="file" name="gambar" id="gambar" class="form-control">
            @if($produk->gambar)
                <div class="mt-2">
                    <p>Gambar Saat Ini:</p>
                    <img src="{{ asset('storage/' . $produk->gambar) }}" alt="Preview"
                         style="max-height: 150px; border: 1px solid #ccc;">
                </div>
            @endif
        </div>

        <!-- Upload File Game (opsional) -->
        <div class="form-group mb-3">
            <label for="game_file">File Game (zip, rar, exe, dll)</label>
            <input type="file" name="game_file" id="game_file" class="form-control">
            @if($produk->game_file)
                <div class="mt-2">
                    <p>File Sebelumnya: <a href="{{ asset('storage/' . $produk->game_file) }}" target="_blank">Download</a></p>
                </div>
            @endif
        </div>

        <!-- Tombol Submit -->
        <button type="submit" class="btn btn-primary">Simpan Perubahan</button>
    </form>
</div>
@endsection
