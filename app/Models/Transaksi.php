<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Transaksi extends Model
{
    use HasFactory;

    // Menyebutkan kolom yang bisa diisi mass-assignment
    protected $fillable = [
        'user_id', 
        'kode_produk', 
        'nama_user', 
        'harga', 
        'kategori', 
        'game_file', 
        'status'
    ];

    /**
     * Relasi ke model Produk
     * Menghubungkan kode_produk pada transaksi ke produk yang sesuai
     */
    public function produk()
    {
        // Pastikan untuk menggunakan namespace lengkap 'App\Models\Produk' jika model Produk berada di namespace tersebut
        return $this->belongsTo(Produk::class, 'kode_produk', 'kode_produk');
    }

    /**
     * Relasi ke model User
     * Menghubungkan user_id pada transaksi ke pengguna yang sesuai
     */
    public function user()
    {
        return $this->belongsTo(User::class, 'user_id', 'id');
    }

    // Jika transaksi terkait dengan transaksi lain (misalnya transaksi referal atau transaksi terkait lainnya),
    // maka kita bisa menambahkan relasi untuk itu, misalnya:
    public function relatedTransaksi()
    {
        return $this->belongsTo(Transaksi::class, 'related_transaksi_id', 'id');
    }
}
