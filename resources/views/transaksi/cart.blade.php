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
                        <a href="{{ route('transaksi.transaksi') }}" class="btn btn-outline-success btn-sm">{{ __('Bayar Produk') }}</a>
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
                                <th class="text-center" colspan="3">Aksi</th>
                            </tr>
                        </thead>
                        <tbody>
                            @foreach($carts as $cart)
                                <tr>
                                    <td>{{ $cart->kode_produk }}</td>
                                    <td>{{ $cart->nama_user }}</td>
                                    <td>{{ number_format($cart->harga, 0, ',', '.') }}</td>
                                    <td style="color: {{ $cart->status == 'Selesai' ? 'green' : ($cart->status == 'Pending' ? 'red' : 'black') }};">
                                        {{ $cart->status }}
                                    </td>
                                    <td>{{ $cart->created_at->format('d M Y H:i') }}</td>

                                    {{-- Tombol Beranda --}}
                                    <td class="text-center">
                                        <a href="{{ route('home') }}" class="btn btn-sm btn-primary">Beranda</a>
                                    </td>

                                    {{-- Tombol Bayar --}}
                                    <td class="text-center">
                                        <form action="{{ route('transaksi.bayar') }}" method="POST">
                                            @csrf
                                            <input type="hidden" name="cart_id" value="{{ $cart->id }}">
                                            <button type="submit" class="btn btn-sm btn-success">Bayar</button>
                                        </form>
                                    </td>

                                    {{-- Tombol Batal atau Cetak --}}
                                    <td class="text-center">
                                        @if($cart->status == 'Pending')
                                            <form action="{{ route('transaksi.clearcart', $cart->id) }}" method="POST" class="form-batal">
                                                @csrf
                                                <button type="submit" class="btn btn-sm btn-danger">Batal</button>
                                            </form>
                                        @elseif($cart->status == 'Selesai')
                                            <a href="{{ route('transaksi.cetak', $cart->id) }}" target="_blank" class="btn btn-sm btn-success">Cetak</a>
                                        @endif
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

@push('scripts')
<script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
<script>
    document.querySelectorAll('.form-batal').forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            Swal.fire({
                title: 'Yakin mau batalin?',
                text: 'Tindakan ini akan menghapus pesanan dari keranjang.',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#d33',
                cancelButtonColor: '#3085d6',
                confirmButtonText: 'Ya, batalkan!',
                cancelButtonText: 'Tidak'
            }).then((result) => {
                if (result.isConfirmed) {
                    this.submit();
                }
            });
        });
    });
</script>
@endpush
