<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Produk extends Model
{
    use HasFactory;

    protected $fillable = [
        'kode_produk',
        'nama',
        'gambar',       // ✅ Gambar produk
        'game_file',    // ✅ File game
        'harga',
        'kategori_id'
    ];

    // Relasi ke model Kategori
    public function kategori() {
        return $this->belongsTo(Kategori::class);
    }
}
