@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-10">
            <div class="card shadow-sm">
                <div class="card-header d-flex justify-content-between align-items-center">
                    <span class="h5 mb-0">{{ __('Data Produk') }}</span>
                    <div>
                        <a href="{{ route('home') }}" class="btn btn-outline-primary btn-sm me-2">{{ __('Beranda') }}</a>
                        <a href="{{ route('transaksi.cart') }}" class="btn btn-outline-info btn-sm">{{ __('Cart Produk') }}</a>
                    </div>
                </div>

                <div class="card-body">
                    @if(session('success'))
                        <div class="alert alert-success">{{ session('success') }}</div>
                    @endif

                    <table class="table table-striped table-bordered">
                        <thead class="table-light">
                            <tr>
                                <th>Kode Produk</th>
                                <th>Nama Pembeli</th>
                                <th>Harga</th>
                                <th>Status</th>
                                <th>Tanggal Transaksi</th>
                                <th class="text-center" colspan="2">Aksi</th>
                            </tr>
                        </thead>
                        <tbody>
                            @foreach($transaksis as $transaksi)
                                <tr>
                                    <td>{{ $transaksi->kode_produk }}</td>
                                    <td>{{ $transaksi->nama_user }}</td>
                                    <td>{{ number_format($transaksi->harga, 0, ',', '.') }}</td>
                                    <td style="color: {{ $transaksi->status == 'Selesai' ? 'green' : ($transaksi->status == 'Pending' ? 'red' : 'black') }};">
                                        {{ $transaksi->status }}
                                    </td>
                                    <td>{{ $transaksi->created_at->format('d M Y H:i') }}</td>

                                    {{-- Tombol Aksi --}}
                                    <td class="text-center">
                                        <form action="{{ route('transaksi.clear', $transaksi->id) }}" method="POST">
                                            @csrf
                                            @method('POST')

                                            @if($transaksi->status == 'Pending')
                                                <button type="submit" class="btn btn-sm btn-danger">Batal</button>
                                            @elseif($transaksi->status == 'Selesai')
                                                <a href="{{ route('transaksi.cetak', $transaksi->id) }}" target="_blank" class="btn btn-sm btn-success">Cetak</a>
                                            @endif
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
</div>
@endsection
