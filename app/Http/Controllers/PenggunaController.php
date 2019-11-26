<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use \App\User;
use \App\Brand;
use PDF;

class PenggunaController extends Controller
{
    public function pengguna() {
    	$pengguna = User::all();
    	return view('superadmin.master.pengguna.index', compact('pengguna'));
    }

    public function tambah() {
    	$pengguna = User::all();
    	return view('superadmin.master.pengguna.tambah', compact('pengguna'));
    }

    public function proses_tambah(Request $r) {
    	$pengguna = new User;
    	$pengguna->name = $r->name;
    	$pengguna->email = $r->email;
    	$pengguna->password = bcrypt($r->password);
    	$pengguna->role = $r->role;
    	$pengguna->save();
    	return redirect(route('pengguna'))->with('sukses', 'Data Berhasil Ditambah!');
    }

    public function edit($id) {
    	return view('superadmin.master.pengguna.edit');
    }

    public function detail($id) {
    	$pengguna = User::find($id);	
    	return view('superadmin.master.pengguna.detail', compact('pengguna'));
    }

    public function proses_detail(Request $r) {
    	$pengguna = User::find($r->id);
    	$pengguna->name = $r->name;
    	$pengguna->email = $r->email;
    	$pengguna->role = $r->role;
    	$pengguna->password = bcrypt($r->password);

    	if($r->role){
    		$pengguna->role = $r->role;
    	}
    	$pengguna->save();
    	return redirect()->back()->with('sukses', 'Data Berhasil Diubah!');
    }

    public function hapus($id) {
    	$pengguna = User::find($id);
    	$pengguna->delete();
    	return redirect(route('pengguna'))->with('sukses', 'Data Berhasil Dihapus!');
    }

    public function laporan() {
        $laporan = User::all();
        $brand = Brand::all()->first();
        $pdf = PDF::loadview('superadmin.master.pengguna.laporan', compact('laporan', 'brand'));
        return $pdf->stream();
    }
}
