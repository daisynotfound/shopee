<?php

namespace Database\Seeders;

use App\Models\Kategori;
use Illuminate\Database\Seeder;

class KategoriSeeder extends Seeder
{
    public function run()
    {
        // Membuat 5 kategori
        Kategori::create(['nama_kategori' => 'Elektronik']);
        Kategori::create(['nama_kategori' => 'Pakaian']);
        Kategori::create(['nama_kategori' => 'Peralatan Rumah Tangga']);
        Kategori::create(['nama_kategori' => 'Buku']);
        Kategori::create(['nama_kategori' => 'Makanan']);
    }
}
