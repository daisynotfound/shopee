<?php

namespace Database\Seeders;

use App\Models\Produk;
use App\Models\Kategori;
use Illuminate\Database\Seeder;

class ProdukSeeder extends Seeder
{
    public function run()
    {
        // Mendapatkan semua kategori yang ada
        $kategoris = Kategori::all();

        // Membuat 20 produk dengan data yang spesifik
        Produk::create([
            'kode_produk' => 'PROD001',
            'nama' => 'Smartphone Samsung Galaxy',
            'harga' => '3500000',
            'kategori_id' => $kategoris->where('nama_kategori', 'Elektronik')->first()->id,
        ]);

        Produk::create([
            'kode_produk' => 'PROD002',
            'nama' => 'Laptop Asus Zenbook',
            'harga' => '7000000',
            'kategori_id' => $kategoris->where('nama_kategori', 'Elektronik')->first()->id,
        ]);

        Produk::create([
            'kode_produk' => 'PROD003',
            'nama' => 'Smartwatch Apple Series 7',
            'harga' => '4500000',
            'kategori_id' => $kategoris->where('nama_kategori', 'Elektronik')->first()->id,
        ]);

        Produk::create([
            'kode_produk' => 'PROD004',
            'nama' => 'Sepatu Nike Airmax',
            'harga' => '1500000',
            'kategori_id' => $kategoris->where('nama_kategori', 'Pakaian')->first()->id,
        ]);

        Produk::create([
            'kode_produk' => 'PROD005',
            'nama' => 'Kaos Polo Lacoste',
            'harga' => '600000',
            'kategori_id' => $kategoris->where('nama_kategori', 'Pakaian')->first()->id,
        ]);

        Produk::create([
            'kode_produk' => 'PROD006',
            'nama' => 'Mixer KitchenAid',
            'harga' => '2000000',
            'kategori_id' => $kategoris->where('nama_kategori', 'Peralatan Rumah Tangga')->first()->id,
        ]);

        Produk::create([
            'kode_produk' => 'PROD007',
            'nama' => 'Blender Philips HR3652',
            'harga' => '900000',
            'kategori_id' => $kategoris->where('nama_kategori', 'Peralatan Rumah Tangga')->first()->id,
        ]);

        Produk::create([
            'kode_produk' => 'PROD008',
            'nama' => 'Buku Harry Potter',
            'harga' => '150000',
            'kategori_id' => $kategoris->where('nama_kategori', 'Buku')->first()->id,
        ]);

        Produk::create([
            'kode_produk' => 'PROD009',
            'nama' => 'Buku Coding Python',
            'harga' => '100000',
            'kategori_id' => $kategoris->where('nama_kategori', 'Buku')->first()->id,
        ]);

        Produk::create([
            'kode_produk' => 'PROD010',
            'nama' => 'Kamera Canon EOS',
            'harga' => '5000000',
            'kategori_id' => $kategoris->where('nama_kategori', 'Elektronik')->first()->id,
        ]);

        Produk::create([
            'kode_produk' => 'PROD011',
            'nama' => 'Tenda Camping Coleman',
            'harga' => '1200000',
            'kategori_id' => $kategoris->where('nama_kategori', 'Peralatan Rumah Tangga')->first()->id,
        ]);

        Produk::create([
            'kode_produk' => 'PROD012',
            'nama' => 'Lampu LED Philips',
            'harga' => '300000',
            'kategori_id' => $kategoris->where('nama_kategori', 'Peralatan Rumah Tangga')->first()->id,
        ]);

        Produk::create([
            'kode_produk' => 'PROD013',
            'nama' => 'T-shirt Uniqlo',
            'harga' => '250000',
            'kategori_id' => $kategoris->where('nama_kategori', 'Pakaian')->first()->id,
        ]);

        Produk::create([
            'kode_produk' => 'PROD014',
            'nama' => 'Jaket Adidas',
            'harga' => '950000',
            'kategori_id' => $kategoris->where('nama_kategori', 'Pakaian')->first()->id,
        ]);

        Produk::create([
            'kode_produk' => 'PROD015',
            'nama' => 'Makanan Kucing Whiskas',
            'harga' => '80000',
            'kategori_id' => $kategoris->where('nama_kategori', 'Makanan')->first()->id,
        ]);

        Produk::create([
            'kode_produk' => 'PROD016',
            'nama' => 'Makanan Anjing Pedigree',
            'harga' => '120000',
            'kategori_id' => $kategoris->where('nama_kategori', 'Makanan')->first()->id,
        ]);

        Produk::create([
            'kode_produk' => 'PROD017',
            'nama' => 'Kopi Nescafe 3 in 1',
            'harga' => '35000',
            'kategori_id' => $kategoris->where('nama_kategori', 'Makanan')->first()->id,
        ]);

        Produk::create([
            'kode_produk' => 'PROD018',
            'nama' => 'Teh Botol Sosro',
            'harga' => '5000',
            'kategori_id' => $kategoris->where('nama_kategori', 'Makanan')->first()->id,
        ]);

        Produk::create([
            'kode_produk' => 'PROD019',
            'nama' => 'Headphone Sony WH-1000XM4',
            'harga' => '4000000',
            'kategori_id' => $kategoris->where('nama_kategori', 'Elektronik')->first()->id,
        ]);

        Produk::create([
            'kode_produk' => 'PROD020',
            'nama' => 'Powerbank Anker 10000mAh',
            'harga' => '350000',
            'kategori_id' => $kategoris->where('nama_kategori', 'Elektronik')->first()->id,
        ]);
    }
}
