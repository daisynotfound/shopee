@extends('layouts.app')

@section('content')
<div class="container">
    <h2>Tambah Produk</h2>
    <form action="{{ route('produk.store') }}" method="POST">
        @csrf
        <div class="form-group">
            <label for="kode_produk">Kode produk</label>
            <input type="text" name="kode_produk" class="form-control" required>
        </div>
        <div class="form-group">
            <label for="nama">Nama</label>
            <input type="text" name="nama" class="form-control" required>
        </div>
        <div class="form-group">
            <label for="harga">Harga</label>
            <input type="text" name="harga" class="form-control" required>
        </div>

        {{-- Dropdown Kategori --}}
        <div class="form-group">
            <label for="kategori_id">Kategori</label>
            <select name="kategori_id" class="form-control" required>
                <option value="">-- Pilih Kategori --</option>
                @foreach($kategoris as $kategori)
                    <option value="{{ $kategori->id }}">{{ $kategori->nama_kategori }}</option>
                @endforeach
            </select>
        </div>

        <button type="submit" class="btn btn-primary mt-3">Simpan</button>
    </form>
</div>
@endsection
