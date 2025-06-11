@extends('layouts.app')

@section('content')
<div class="container py-4">
    <div class="row justify-content-center">
        <div class="col-md-11">
            <div class="card shadow-sm border-0">
                <div class="card-header bg-primary text-white d-flex justify-content-between align-items-center">
                    <h5 class="mb-0">📋 Data Transaksi Produk</h5>
                    <a href="{{ route('adminHome') }}" class="btn btn-light btn-sm">🏠 Beranda</a>
                </div>

                <div class="card-body">
                    @if(session('success'))
                        <div class="alert alert-success">{{ session('success') }}</div>
                    @endif

                    <div class="table-responsive">
                        <table class="table table-bordered table-hover align-middle">
                            <thead class="table-light">
                                <tr class="text-center">
                                    <th>Kode Produk</th>
                                    <th>Nama Pembeli</th>
                                    <th>Harga</th>
                                    <th>Status</th>
                                    <th>Tanggal Transaksi</th>
                                    <th colspan="2">Aksi</th>
                                </tr>
                            </thead>
                            <tbody>
                                @forelse($transaksis as $transaksi)
                                <tr>
                                    <td class="text-center">{{ $transaksi->kode_produk }}</td>
                                    <td>{{ $transaksi->nama_user }}</td>
                                    <td>Rp {{ number_format($transaksi->harga, 0, ',', '.') }}</td>
                                    <td class="fw-bold text-center" style="color:
                                        {{
                                            $transaksi->status === 'Selesai' ? 'green' :
                                            ($transaksi->status === 'Pending' ? 'orange' : 'black')
                                        }};">
                                        {{ $transaksi->status }}
                                    </td>
                                    <td>{{ $transaksi->created_at->format('d M Y H:i') }}</td>
                                    <td class="text-center">
                                        <form action="{{ route('transaksi.hapus', $transaksi->id) }}" method="POST" onsubmit="return confirm('Yakin ingin membatalkan transaksi ini?');">
                                            @csrf
                                            @method('POST')
                                            <button type="submit" class="btn btn-outline-danger btn-sm">Batal</button>
                                        </form>
                                    </td>
                                    <td class="text-center">
                                        <form action="{{ route('transaksi.konfirmasi', $transaksi->id) }}" method="POST">
                                            @csrf
                                            @method('POST')
                                            <button type="submit" class="btn btn-outline-success btn-sm">Konfirmasi</button>
                                        </form>
                                    </td>
                                </tr>
                                @empty
                                <tr>
                                    <td colspan="7" class="text-center text-muted">Belum ada transaksi.</td>
                                </tr>
                                @endforelse
                            </tbody>
                        </table>
                    </div> <!-- /.table-responsive -->
                </div> <!-- /.card-body -->
            </div>
        </div>
    </div>
</div>
@endsection
