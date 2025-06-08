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

            <div class="card border-0 shadow-sm">
                <div class="card-header bg-primary text-white d-flex justify-content-between align-items-center rounded-top">
                    <h5 class="mb-0 fw-semibold">🛒 Daftar Produk</h5>
                    <div class="d-flex flex-wrap gap-2">
                        <a href="{{ route('produk.create') }}" class="btn btn-light btn-sm">
                            <i class="fas fa-plus me-1"></i> Produk
                        </a>
                        <a href="{{ route('kategori.create') }}" class="btn btn-warning btn-sm">
                            <i class="fas fa-plus me-1"></i> Kategori
                        </a>
                        <a href="{{ route('transaksi.transaksiManager') }}" class="btn btn-success btn-sm">
                            <i class="fas fa-check-circle me-1"></i> Konfirmasi
                        </a>
                    </div>
                </div>

                <div class="card-body">
                    @if($produks->count() > 0)
                        <div class="row row-cols-1 row-cols-md-3 g-4">
                            @foreach($produks as $produk)
                            <div class="col">
                                <div class="card h-100 shadow-sm product-card border-0">
                                    <div class="ratio ratio-16x9 rounded-top overflow-hidden">
                                        @if($produk->gambar)
                                            <img src="{{ asset('storage/' . $produk->gambar) }}" alt="{{ $produk->nama }}" class="w-100 h-100 object-fit-cover">
                                        @else
                                            <img src="https://via.placeholder.com/300x200?text=No+Image" alt="No Image" class="w-100 h-100 object-fit-cover">
                                        @endif
                                    </div>
                                    <div class="card-body d-flex flex-column">
                                        <h5 class="card-title fw-semibold text-truncate" title="{{ $produk->nama }}">
                                            {{ $produk->nama }}
                                        </h5>
                                        <p class="text-muted small mb-1"><strong>Kode:</strong> {{ $produk->kode_produk }}</p>
                                        <p class="text-muted small mb-1"><strong>Harga:</strong> Rp{{ number_format($produk->harga, 0, ',', '.') }}</p>
                                        <span class="badge bg-info mb-3 text-dark w-[50px]">{{ $produk->kategori->nama_kategori ?? '-' }}</span>

                                        <div class="d-flex gap-2 mt-auto">
                                            <a href="{{ route('produk.edit', $produk->id) }}" class="btn btn-outline-primary btn-sm w-50">
                                                <i class="fas fa-edit me-1"></i> Edit
                                            </a>
                                            <form action="{{ route('produk.destroy', $produk->id) }}" method="POST" class="delete-form w-50">
                                                @csrf
                                                @method('DELETE')
                                                <button type="submit" class="btn btn-outline-danger btn-sm w-100">
                                                    <i class="fas fa-trash me-1"></i> Hapus
                                                </button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            @endforeach
                        </div>
                    @else
                        <div class="text-center text-muted py-5">
                            <i class="fas fa-box-open fa-2x mb-2"></i>
                            <p class="mb-0">Belum ada produk yang tersedia.</p>
                        </div>
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

@push('styles')
<style>
    .product-card {
        transition: all 0.3s ease-in-out;
    }

    .product-card:hover {
        transform: translateY(-4px);
        box-shadow: 0 1rem 1.5rem rgba(0, 0, 0, 0.1);
    }

    .object-fit-cover {
        object-fit: cover;
    }
</style>
@endpush
