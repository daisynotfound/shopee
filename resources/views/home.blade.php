@extends('layouts.app')

@section('content')
<div class="container py-4">
    <!-- Header & Tombol Aksi -->
    <div class="d-flex justify-content-between align-items-center mb-4 flex-wrap gap-2">
        <h3 class="fw-bold mb-0 text-primary">🛒 Marketplace Game</h3>
        <div class="d-flex gap-2">
            <a href="{{ route('produk.create') }}" class="btn btn-gradient btn-sm shadow-sm">
                <i class="fas fa-plus me-1"></i> Tambah Produk
            </a>
            <a href="{{ route('transaksi.cart') }}" class="btn btn-gradient btn-sm shadow-sm">
                <i class="fas fa-shopping-cart me-1"></i> Cart
            </a>
        </div>
    </div>

    <!-- Form Pencarian & Filter -->
    <div class="card mb-4 shadow-sm border-0">
        <div class="card-body">
            <form action="{{ route('home') }}" method="GET" class="row g-3 align-items-end">
                <div class="col-md-6">
                    <label class="form-label">Cari Produk</label>
                    <div class="input-group">
                        <input type="text" name="search" class="form-control" placeholder="Contoh: RPG, FPS..." value="{{ request('search') }}">
                        <button class="btn btn-outline-primary" type="submit">
                            <i class="fas fa-search"></i>
                        </button>
                    </div>
                </div>
                <div class="col-md-4">
                    <label class="form-label">Kategori</label>
                    <select name="kategori" class="form-select" onchange="this.form.submit()">
                        <option value="">-- Semua Kategori --</option>
                        @foreach($kategoris as $kategori)
                            <option value="{{ $kategori->id }}" {{ request('kategori') == $kategori->id ? 'selected' : '' }}>
                                {{ $kategori->nama_kategori }}
                            </option>
                        @endforeach
                    </select>
                </div>
            </form>
        </div>
    </div>

    <!-- Daftar Produk -->
    <div class="row">
        @forelse($produks as $produk)
        <div class="col-md-4 mb-4">
            <div class="card product-card h-100 border-0 shadow-sm position-relative overflow-hidden">
                <!-- Gambar Produk -->
                @if($produk->gambar)
                    <img src="{{ asset('storage/' . $produk->gambar) }}?v={{ $produk->updated_at->timestamp }}" class="card-img-top" style="height: 200px; object-fit: cover;" alt="{{ $produk->nama }}">
                @else
                    <img src="https://via.placeholder.com/300x200?text=No+Image" class="card-img-top" style="height: 200px; object-fit: cover;" alt="No Image">
                @endif

                <!-- Informasi Produk -->
                <div class="card-body d-flex flex-column">
                    <h5 class="card-title text-truncate" title="{{ $produk->nama }}">{{ $produk->nama }}</h5>
                    <p class="mb-1 text-muted small"><strong>Harga:</strong> Rp {{ number_format($produk->harga, 0, ',', '.') }}</p>
                    <p class="mb-3 text-muted small"><strong>Kategori:</strong> {{ $produk->kategori->nama_kategori ?? 'Tidak Ada Kategori' }}</p>

                    @php
                        $controller = app(\App\Http\Controllers\PembelianController::class);
                        $canPlay = $controller->checkApproval($produk->kode_produk) || Auth::id() == $produk->owner_id;
                    @endphp

                    <!-- Tombol Aksi -->
                    <div class="mt-auto d-grid gap-2">
                        @if($canPlay)
                            <a href="{{ route('transaksi.play', $produk->kode_produk) }}" class="btn btn-warning btn-sm w-100">
                                <i class="fas fa-gamepad"></i> Play Game
                            </a>
                            <a href="{{ route('transaksi.downloadGame', $produk->kode_produk) }}" class="btn btn-info btn-sm text-white w-100">
                                <i class="fas fa-download"></i> Download
                            </a>
                        @elseif(Auth::id() != $produk->owner_id && Auth::user()->type != 1)
                            <form action="{{ route('beli') }}" method="POST">
                                @csrf
                                <input type="hidden" name="produk_id" value="{{ $produk->id }}">
                                <button type="submit" class="btn btn-success btn-sm w-100">
                                    <i class="fas fa-shopping-cart"></i> Beli
                                </button>
                            </form>
                        @endif

                        @if(Auth::id() == $produk->owner_id || Auth::user()->type == 1)
                            <a href="{{ route('produk.edit', $produk->id) }}" class="btn btn-primary btn-sm w-100">
                                <i class="fas fa-edit"></i> Edit
                            </a>
                            <form action="{{ route('produk.destroy', $produk->id) }}" method="POST" onsubmit="return confirm('Apakah Anda yakin ingin menghapus produk ini?');">
                                @csrf
                                @method('DELETE')
                                <button type="submit" class="btn btn-danger btn-sm w-100">
                                    <i class="fas fa-trash"></i> Hapus
                                </button>
                            </form>
                        @endif
                    </div>
                </div>
            </div>
        </div>
        @empty
        <div class="col-12">
            <div class="alert alert-info text-center">Produk tidak ditemukan.</div>
        </div>
        @endforelse
    </div>
</div>

<!-- CSS Tambahan -->
@push('styles')
<style>
    .btn-gradient {
        background: linear-gradient(135deg, #4e54c8, #8f94fb);
        color: white !important;
    }

    .product-card {
        transition: transform 0.2s, box-shadow 0.3s;
    }

    .product-card:hover {
        transform: translateY(-5px);
        box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
    }
</style>
@endpush
@endsection
