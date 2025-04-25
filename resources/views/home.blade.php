@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card">
                <div class="card-header d-flex justify-content-between align-items-center">
                    <span>{{ __('Dashboard') }}</span>
                    <a href="{{ route('transaksi.cart') }}" class="btn btn-sm btn-primary">Cart</a>
                </div>

                <table class="table">
                    <thead>
                        <tr>
                            <th>Kode Produk</th>
                            <th>Nama</th>
                            <th>Harga</th>
                            <th>Kategori</th> <!-- Kolom kategori ditambahkan -->
                            <th>Aksi</th>
                        </tr>
                    </thead>
                    <tbody>
                        @foreach($produks as $produk)
                        <tr>
                            <td>{{ $produk->kode_produk }}</td>
                            <td>{{ $produk->nama }}</td>
                            <td>{{ $produk->harga }}</td>
                            <td>{{ $produk->kategori->nama_kategori ?? 'Tidak Ada Kategori' }}</td> <!-- Menampilkan nama kategori -->
                            <td>
                                <form action="{{ route('beli') }}" method="POST">
                                    @csrf
                                    <input type="hidden" name="produk_id" value="{{ $produk->id }}">
                                    <button type="submit" class="btn btn-sm btn-success">Beli</button>
                                </form>
                            </td>
                        </tr>
                        @endforeach
                    </tbody>
                </table>
                
            </div>
        </div>
    </div>
</div>
@endsection
