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
                <div class="card-header bg-white border-bottom-0 pb-0">
                    <div class="d-flex justify-content-between align-items-center flex-wrap">
                        <h5 class="mb-0 fw-bold text-primary">
                            <i class="fas fa-box-open me-2"></i> Daftar Produk
                        </h5>
                        <div class="d-flex flex-wrap gap-2 mt-3 mt-md-0">
                            <a href="{{ route('produk.create') }}" class="btn btn-sm btn-outline-primary shadow-sm">
                                <i class="fas fa-plus me-1"></i> Produk
                            </a>
                            <a href="{{ route('kategori.create') }}" class="btn btn-sm btn-outline-warning shadow-sm">
                                <i class="fas fa-layer-group me-1"></i> Kategori
                            </a>
                            <a href="{{ route('transaksi.transaksiManager') }}" class="btn btn-sm btn-outline-success shadow-sm">
                                <i class="fas fa-check-circle me-1"></i> Konfirmasi
                            </a>
                        </div>
                    </div>

                    <form action="{{ route('adminHome') }}" method="GET" class="mt-3">
                        <div class="input-group">
                            <input type="text" name="search" class="form-control border-end-0" placeholder="Cari produk..." value="{{ request('search') }}">
                            <button class="btn btn-outline-secondary" type="submit">
                                <i class="fas fa-search"></i>
                            </button>
                        </div>
                    </form>
                </div>

                <div class="card-body pt-0">
                    @if($produks->count() > 0)
                        <div class="row row-cols-1 row-cols-md-3 g-4 mt-2">
                            @foreach($produks as $produk)
                            <div class="col">
                                <div class="card product-card h-100 border-0 shadow-sm">
                                    <div class="ratio ratio-16x9 rounded-top overflow-hidden">
                                        @if($produk->gambar)
                                            <img src="{{ asset('storage/' . $produk->gambar) }}" alt="{{ $produk->nama }}" class="w-100 h-100 object-fit-cover">
                                        @else
                                            <img src="https://via.placeholder.com/300x200?text=No+Image" alt="No Image" class="w-100 h-100 object-fit-cover">
                                        @endif
                                    </div>
                                    <div class="card-body d-flex flex-column">
                                        <h6 class="card-title fw-semibold text-truncate" title="{{ $produk->nama }}">
                                            {{ $produk->nama }}
                                        </h6>
                                        <p class="text-muted small mb-1"><strong>Kode:</strong> {{ $produk->kode_produk }}</p>
                                        <p class="text-muted small mb-1"><strong>Harga:</strong> Rp{{ number_format($produk->harga, 0, ',', '.') }}</p>
                                        <span class="badge bg-light text-dark w-auto mb-3 border">
                                            {{ $produk->kategori->nama_kategori ?? '-' }}
                                        </span>

                                        <div class="d-flex gap-2 mt-auto">
                                            @if($produk->owner_id == Auth::id())
                                                <a href="{{ route('produk.edit', $produk->id) }}" class="btn btn-sm btn-outline-primary w-50">
                                                    <i class="fas fa-edit me-1"></i> Edit
                                                </a>
                                                <form action="{{ route('produk.destroy', $produk->id) }}" method="POST" class="delete-form w-50">
                                                    @csrf
                                                    @method('DELETE')
                                                    <button type="submit" class="btn btn-sm btn-outline-danger w-100">
                                                        <i class="fas fa-trash me-1"></i> Hapus
                                                    </button>
                                                </form>
                                            @else
                                                <div class="text-muted small text-center w-100 py-2">Produk milik user</div>
                                            @endif
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
    .object-fit-cover {
        object-fit: cover;
    }

    .product-card {
        border-radius: 0.5rem;
        background-color: #ffffff;
    }

    .card-header h5 i {
        color: #4e54c8;
    }

    @media (max-width: 576px) {
        .card-header .btn,
        .card-header .input-group {
            width: 100%;
        }
    }
</style>
@endpush
