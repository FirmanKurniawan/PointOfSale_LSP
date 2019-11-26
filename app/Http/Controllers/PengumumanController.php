<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use \App\Pengumuman;
use Auth;

class PengumumanController extends Controller
{
    public function pengumuman() {
    	$pengumuman = Pengumuman::all();
    	return view('superadmin.master.pengumuman.index', compact('pengumuman'));
    }

    public function pengumuman_tambah(Request $r) {
    	return view('superadmin.master.pengumuman.tambah');
    }

    public function proses_pengumuman(Request $r) {
    	$pengumuman = new Pengumuman;
    	$pengumuman->user_id = Auth::user()->id;
    	$pengumuman->pengumuman = $r->pengumuman;
    	$pengumuman->save();
    	return redirect(route('pengumuman'))->with('sukses', 'Pengumuman Berhasil Ditambah!');
    }

    public function hapus($id) {
    	$pengumuman = Pengumuman::find($id);
    	$pengumuman->delete();
    	return redirect(route('pengumuman'))->with('sukses', 'Pengumuman Berhasil Dihapus!');
    }
}
