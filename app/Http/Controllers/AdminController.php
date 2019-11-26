<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use \App\Produk;
use \App\Checkout;
use \App\User;
use Auth;

class AdminController extends Controller
{
   public function dashboard() {
        $produk = Produk::all();
        $count_order = Checkout::all()->count();
        $count_produk = Produk::all()->count();
        $count_user = User::all()->count();
    	return view('admin.dashboard', compact('produk', 'count_order', 'count_produk', 'count_user'));
    }

    public function profile() {
        $profile = User::find(Auth::user()->id);
        return view('admin.profile.index', compact('profile'));
    }

    public function proses_profile(Request $r) {
        $profile = User::find(Auth::user()->id);
        $profile->name = $r->name;
        $profile->email = $r->email;
        if($r->password != null){
        $profile->password = bcrypt($r->password);
        }
        $profile->save();
        return redirect(route('admin_profile'))->with('sukses', 'Profile Berhasil Diubah!');
    }

    // if($r->foto){
    //         $rand = rand (10000, 99999);
    //         $file = $r->foto->getClientOriginalName();
    //         $filename = pathinfo($file, PATHINFO_FILENAME);
    //         $extension = pathinfo($file, PATHINFO_EXTENSION);
    //         $r->foto->move('storage/profile/', $filename.$rand.'.'.$extension);
    //         $profile->foto = $filename.$rand.'.'.$extension;
    // }


    	// $a = $r->daftar_pertanyaan_id;
     //    $i = 0;
     //    $b = 0;
     //    foreach ($a as $daftar_pertanyaan_ids){
     //    $data = [
     //        'daftar_pertanyaan_id' => $daftar_pertanyaan_ids,
     //        'bukti_kompetensi' => $r->bukti_kompetensi[$b++],
     //        'penilaian' => $r->penilaian[$i++]
     //    ];
     //    JawabanPertanyaan::insert($data);
     //    }
}
