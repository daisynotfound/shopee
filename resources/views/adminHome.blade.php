@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card">
                <div class="card-header">{{ __('Dashboard') }}</div>

                <div class="card-body">
                    <a href="{{ route('produk.create') }}" class="btn btn-sm btn-primary mb-3">Tambah Produk</a>
                    <a href="{{ route('kategori.create') }}" class="btn btn-sm btn-secondary mb-3">Tambahkan Kategori</a>
                    <a href="{{ route('transaksi.transaksiManager') }}" class="btn btn-sm btn-success mb-3">Konfirmasi Pesanan Produk</a>

                    <table class="table table-bordered">
                        <thead>
                            <tr>
                                <th>Kode Produk</th>
                                <th>Nama</th>
                                <th>Harga</th>
                                <th>Kategori</th> <!-- Kolom Kategori ditambahkan -->
                                <th>Aksi</th>
                            </tr>
                        </thead>
                        <tbody>
                            @foreach($produks as $produk)
                            <tr>
                                <td>{{ $produk->kode_produk }}</td>
                                <td>{{ $produk->nama }}</td>
                                <td>{{ $produk->harga }}</td>
                                <td>{{ $produk->kategori ? $produk->kategori->nama_kategori : '-' }}</td> <!-- Menampilkan kategori atau '-' jika tidak ada -->
                                <td>
                                    <a href="{{ route('produk.edit', $produk->id) }}" class="btn btn-warning btn-sm">Edit</a>
                                    <form action="{{ route('produk.destroy', $produk->id) }}" method="POST" class="delete-form" style="display: inline;">
                                        @csrf
                                        @method('DELETE')
                                        <button type="submit" class="btn btn-danger btn-sm">
                                            Delete
                                        </button>
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

@push('scripts')
<script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
<script>
    // Cek jika ada pesan sukses dari session
    @if(session('success'))
        Swal.fire({
            title: 'Success!',
            text: '{{ session('success') }}',
            icon: 'success',
            confirmButtonText: 'OK'
        });
    @endif

    // SweetAlert2 untuk konfirmasi delete
    document.querySelectorAll('.delete-form').forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault(); // Mencegah form langsung terkirim

            Swal.fire({
                title: 'Apakah anda yakin?',
                text: 'Data ini akan dihapus secara permanen!',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#d33',
                cancelButtonColor: '#3085d6',
                confirmButtonText: 'Ya, Hapus!',
                cancelButtonText: 'Batal'
            }).then((result) => {
                if (result.isConfirmed) {
                    this.submit(); // Jika konfirmasi, submit form untuk menghapus
                }
            });
        });
    });
</script>
@endpush
