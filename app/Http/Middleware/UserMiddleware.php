<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;
use Illuminate\Support\Facades\Auth;

class UserMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure(\Illuminate\Http\Request): (\Illuminate\Http\Response|\Illuminate\Http\RedirectResponse)  $next
     * @return \Illuminate\Http\RedirectResponse|\Illuminate\Http\Response
     */
    public function handle(Request $request, Closure $next): Response
    {
        // Cek apakah user sudah login dan apakah tipe user adalah 'user'
        if (Auth::check() && Auth::user()->isUser()) {
            return $next($request);
        }

        // Jika bukan user, redirect ke halaman utama atau halaman lain yang sesuai
        return redirect('/');
    }
}
