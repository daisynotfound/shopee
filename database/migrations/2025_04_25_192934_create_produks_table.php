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
            $table->timestamps();

            // Foreign key ke tabel kategoris
            $table->foreign('kategori_id')
                  ->references('id')
                  ->on('kategoris')
                  ->onDelete('cascade');
        });
    }

    public function down(): void {
        Schema::dropIfExists('produks');
    }
};
