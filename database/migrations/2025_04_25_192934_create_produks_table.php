<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void {
        Schema::create('produks', function (Blueprint $table) {
            $table->id();
            $table->string('kode_produk')->unique();
            $table->string('nama');
            $table->string('gambar')->nullable(); // Kolom gambar
            $table->string('game_file')->nullable(); // ✅ Kolom file game
            $table->string('harga');
            $table->unsignedBigInteger('kategori_id');
            $table->unsignedBigInteger('owner_id'); // 🆕 Kolom owner_id untuk pemilik produk (user/admin)
            $table->timestamps();

            // Foreign key ke tabel kategoris
            $table->foreign('kategori_id')
                  ->references('id')
                  ->on('kategoris')
                  ->onDelete('cascade');

            // Foreign key ke tabel users (pemilik produk)
            $table->foreign('owner_id')
                  ->references('id')
                  ->on('users')
                  ->onDelete('cascade');
        });

    }

    public function down(): void {
        Schema::dropIfExists('produks');
    }
};
