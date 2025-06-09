@extends('layouts.app')

@section('content')
<div class="container">
    <div class="d-flex justify-content-between align-items-center mb-4">
        <h4 class="mb-0">{{ __('Dashboard') }}</h4>
        <a href="{{ route('transaksi.cart') }}" class="btn btn-primary btn-sm">
            <i class="fas fa-shopping-cart"></i> Cart
        </a>
    </div>

    <!-- Form Search -->
    <form action="{{ route('home') }}" method="GET" class="mb-4">
        <div class="input-group">
            <input type="text" name="search" class="form-control" placeholder="Cari produk..." value="{{ request('search') }}">
            <button class="btn btn-outline-secondary" type="submit">
                <i class="fas fa-search"></i> Search
            </button>
        </div>
    </form>

    <div class="row">
        @forelse($produks as $produk)
        <div class="col-md-4 mb-4">
            <div class="card h-100 shadow-sm">
                @if($produk->gambar)
                    <img src="{{ asset('storage/' . $produk->gambar) }}" class="card-img-top" style="height: 200px; object-fit: cover;" alt="{{ $produk->nama }}">
                @else
                    <img src="https://via.placeholder.com/300x200?text=No+Image" class="card-img-top" style="height: 200px; object-fit: cover;" alt="No Image">
                @endif
                <div class="card-body d-flex flex-column">
                    <h5 class="card-title">{{ $produk->nama }}</h5>
                    {{-- <p class="card-text mb-1"><strong>Kode:</strong> {{ $produk->kode_produk }}</p> --}}
                    <p class="card-text mb-1"><strong>Harga:</strong> Rp {{ number_format($produk->harga, 0, ',', '.') }}</p>
                    <p class="card-text mb-3"><strong>Kategori:</strong> {{ $produk->kategori->nama_kategori ?? 'Tidak Ada Kategori' }}</p>

                    <!-- Tombol Beli -->
                    <form action="{{ route('beli') }}" method="POST" class="mt-auto">
                        @csrf
                        <input type="hidden" name="produk_id" value="{{ $produk->id }}">
                        <button type="submit" class="btn btn-success w-100">Beli</button>
                    </form>

                    <!-- Tombol Play Game -->
                    @php
                    $controller = app(\App\Http\Controllers\PembelianController::class);
                    $canPlay = $controller->checkApproval($produk->kode_produk);
                    @endphp

                    @if($canPlay)
                    <button type="button" onclick="confirmExtract('{{ route('transaksi.play', $produk->kode_produk) }}')" class="btn btn-warning w-100 mt-3">
                        Play Game
                    </button>

                    <a href="{{ route('transaksi.downloadGame', $produk->kode_produk) }}" class="btn btn-info w-100 mt-2 text-white">
                        <i class="fas fa-download"></i> Download Game
                    </a>
                    @endif

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
@endsection

@push('scripts')
<script>
    function confirmExtract(url) {
        if (confirm('Apakah Anda ingin mengekstrak file ini dan memainkan game?')) {
            window.location.href = url;
        }
    }
</script>
@endpush
