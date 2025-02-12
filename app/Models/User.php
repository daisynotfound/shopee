<?php

namespace App\Models;

use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable
{
    use HasApiTokens, Notifiable;

    protected $fillable = [
        'name',
        'email',
        'password',
        'type',  // Pastikan kolom 'type' ada
    ];

    // Pastikan akses role atau type diatur dengan benar
    public function isAdmin()
    {
        return $this->type === 'admin';  // Contoh cara memeriksa apakah user adalah admin
    }

    public function isUser()
    {
        return $this->type === 'user';  // Contoh cara memeriksa apakah user adalah regular user
    }
}
