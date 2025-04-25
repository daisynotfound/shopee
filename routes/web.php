<?php 

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\Auth\RegisterController;
use App\Http\Controllers\Auth\LogoutController;
use App\Http\Controllers\PembelianController;
use App\Http\Controllers\ProdukController;
use App\Models\Kategori;
use App\Http\Controllers\KategoriController;
use Illuminate\Support\Facades\Auth;

// Auth Routes
Auth::routes();

// Default login page
Route::get('/', function () {
    return view('auth.login');
});

// Custom Auth Routes
Route::get('/login', [LoginController::class, 'showLoginForm'])->name('login');
Route::post('/login', [LoginController::class, 'login']);
Route::post('/logout', [LogoutController::class, 'signout'])->name('logout');
Route::get('/register', [RegisterController::class, 'showRegistrationForm'])->name('register');
Route::post('/register', [RegisterController::class, 'registration']);



// User Routes (role 0)
Route::middleware(['auth'])->group(function () {
    Route::get('/home', [HomeController::class, 'index'])->name('home');
});

Route::middleware(['auth'])->group(function () {
    Route::get('/admin/home', [HomeController::class, 'adminHome'])->name('adminHome');
});


Route::get('/admin/home', [ProdukController::class, 'index'])->name('adminHome');
Route::get('/produk/create', [ProdukController::class, 'create'])->name('produk.create');
Route::post('/produk', [ProdukController::class, 'store'])->name('produk.store');
Route::get('/produk/{id}', [ProdukController::class, 'index'])->name('produk.show');
Route::get('/produk/{id}/edit', [ProdukController::class, 'edit'])->name('produk.edit');
Route::put('/produk/{id}', [ProdukController::class, 'update'])->name('produk.update');
Route::delete('/produk/{id}', [ProdukController::class, 'destroy'])->name('produk.destroy');

Route::post('/beli', [PembelianController::class, 'beli'])->name('beli');
Route::post('/bayar', [PembelianController::class, 'bayar'])->name('transaksi.bayar');
Route::get('/cart', [PembelianController::class, 'transaksiCart'])->name('transaksi.cart');
Route::post('/transaksi/{id}/clearcart', [PembelianController::class, 'clearcart'])->name('transaksi.clearcart');
Route::get('/transaksi/cart', [PembelianController::class, 'transaksiCart'])->name('transaksi.cart');
Route::get('/transaksi2', [PembelianController::class, 'index'])->name('transaksi.transaksi');

Route::post('/transaksi/{id}/clearcart', [PembelianController::class, 'clearcart'])->name('transaksi.clearcart');
Route::post('/transaksi/{id}/clear', [PembelianController::class, 'clear'])->name('transaksi.clear');
Route::post('/transaksi/{id}/hapus', [PembelianController::class, 'hapus'])->name('transaksi.hapus');
Route::post('/transaksi/{id}/konfirmasi', [PembelianController::class, 'konfirmasiStatus'])->name('transaksi.konfirmasi');
Route::get('/transaksi/{id}/cetak', [PembelianController::class, 'generatePdf'])->name('transaksi.cetak');
// Tampilan daftar transaksi (untuk user biasa & manager/admin)
Route::get('/transaksi', [PembelianController::class, 'transaksiIndex'])->name('transaksi.transaksi');
Route::get('/transaksi/transaksiManager', [PembelianController::class,'transaksiIndexManager'])->name('transaksi.transaksiManager');
// Alternatif route jika dibutuhkan
Route::get('/transaksi2', [PembelianController::class, 'transaksiIndex']);
Route::resource('kategori', KategoriController::class);



