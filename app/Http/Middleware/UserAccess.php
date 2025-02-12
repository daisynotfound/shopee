<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;
use Illuminate\Support\Facades\Auth;

class UserAccess
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure(\Illuminate\Http\Request): (\Illuminate\Http\Response|\Illuminate\Http\RedirectResponse)  $next
     * @param  int  $roleType
     * @return \Illuminate\Http\Response|\Illuminate\Http\RedirectResponse
     */
    public function handle(Request $request, Closure $next, $roleType): Response
    {
        if (Auth::check() && Auth::user()->role === (int) $roleType) {
            return $next($request);
        }

        return response()->json(['error' => 'You do not have permission to access this page.'], 403);
        // Optionally, you can return a custom error view:
        // return response()->view('errors.check-permission');
    }
}
