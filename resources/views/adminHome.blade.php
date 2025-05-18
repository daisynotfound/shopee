@extends('layouts.app')

@section('content')
<div class="container py-4">
    <div class="row justify-content-center">
        <div class="col-lg-10">
            @if(session('success'))
                <div class="alert alert-success alert-dismissible fade show" role="alert">
                    {{ session('success') }}
                    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </div>
            @endif

            <div class="card shadow-sm border-0">
                <div class="card-header bg-primary text-white d-flex justify-content-between align-items-center">
                    <h5 class="mb-0">Daftar Produk</h5>
                    <div class="d-flex gap-2">
                        <a href="{{ route('produk.create') }}" class="btn btn-light btn-sm">+ Produk</a>
                        <a href="{{ route('kategori.create') }}" class="btn btn-warning btn-sm">+ Kategori</a>
                        <a href="{{ route('transaksi.transaksiManager') }}" class="btn btn-success btn-sm">Konfirmasi Pesanan</a>
                    </div>
                </div>

                <div class="card-body">
                    @if($produks->count() > 0)
                    <div class="row row-cols-1 row-cols-md-3 g-4">
                        @foreach($produks as $produk)
                        <div class="col">
                            <div class="card h-100 shadow-sm">
                                @if($produk->gambar)
                                    <img src="{{ asset('storage/' . $produk->gambar) }}" class="card-img-top" alt="{{ $produk->nama }}" style="object-fit: cover; height: 200px;">
                                @else
                                    <img src="https://via.placeholder.com/300x200?text=No+Image" class="card-img-top" alt="No Image" style="object-fit: cover; height: 200px;">
                                @endif
                                <div class="card-body">
                                    <h5 class="card-title">{{ $produk->nama }}</h5>
                                    <p class="card-text mb-1"><strong>Kode:</strong> {{ $produk->kode_produk }}</p>
                                    <p class="card-text mb-1"><strong>Harga:</strong> Rp{{ number_format($produk->harga, 0, ',', '.') }}</p>
                                    <p class="card-text mb-2"><strong>Kategori:</strong> {{ $produk->kategori->nama_kategori ?? '-' }}</p>

                                    <div class="d-flex gap-2 mt-2">
                                        <a href="{{ route('produk.edit', $produk->id) }}" class="btn btn-sm btn-outline-primary w-100">Edit</a>
                                        <form action="{{ route('produk.destroy', $produk->id) }}" method="POST" class="d-inline delete-form w-100">
                                            @csrf
                                            @method('DELETE')
                                            <button type="submit" class="btn btn-sm btn-outline-danger w-100">Hapus</button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                        @endforeach
                    </div>
                    @else
                    <p class="text-center text-muted my-4">Belum ada produk</p>
                    @endif
                </div>
            </div>

        </div>
    </div>
</div>
@endsection

@push('scripts')
<script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
<script>
    // Konfirmasi penghapusan produk
    document.querySelectorAll('.delete-form').forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            Swal.fire({
                title: 'Yakin ingin menghapus?',
                text: "Data produk ini akan dihapus secara permanen.",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#d33',
                cancelButtonColor: '#6c757d',
                confirmButtonText: 'Ya, hapus!',
                cancelButtonText: 'Batal'
            }).then((result) => {
                if (result.isConfirmed) {
                    this.submit();
                }
            });
        });
    });
</script>
@endpush
