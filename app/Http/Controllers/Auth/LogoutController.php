<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Session;

class LogoutController extends Controller {
    public function signout() {
        // Logout user
        Auth::logout();

        // Clear session data
        Session::flush();

        // Redirect to login page
        return redirect()->route('login')->with('success', 'You have successfully logged out.');
    }
}
