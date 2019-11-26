<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Auth;

class PagesController extends Controller
{
    public function login() {
    	return view('pages.login');
    }

    public function proses_login(Request $r) {
    	$email = $r->email;
    	$password = $r->password;
    	if (Auth::attempt(['email' => $email, 'password' => $password])){
    		if (Auth::user()->role == "0"){
    			return redirect('/kasir');
    		}
    		if (Auth::user()->role == "1"){
    			return redirect('/admin');
    		}
    		if (Auth::user()->role == "2"){
    			return redirect('/superadmin');
    		}
    	}
    	return redirect(route('login'))->with('sukses', 'Email / Password Anda Salah!');
    }

    public function logout(){
        Auth::logout();
        return redirect('/')->with('sukses', 'Anda Berhasil Logout!');
    }
}
