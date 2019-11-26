<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use \App\User;
use \App\Checkout;
use \App\Produk;
use Auth;

class SuperAdminController extends Controller
{
    public function dashboard() {
    	$user = User::all();
    	$order = Checkout::all()->count();
    	$produk = Produk::all()->count();
    	return view('superadmin.dashboard', compact('user', 'order', 'produk'));
    }

    public function profile() {
        $profile = User::find(Auth::user()->id);
        return view('superadmin.profile.index', compact('profile'));
    }

    public function proses_profile(Request $r) {
        $profile = User::find(Auth::user()->id);
        $profile->name = $r->name;
        $profile->email = $r->email;
        if($r->password != null){
        $profile->password = bcrypt($r->password);
        }
        $profile->save();
        return redirect(route('superadmin_profile'))->with('sukses', 'Profile Berhasil Diubah!');
    }
}
