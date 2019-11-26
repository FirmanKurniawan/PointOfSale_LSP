<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use \App\PersentaseLaba;
use \App\Brand;
use PDF;

class PersentaseLabaController extends Controller
{
    public function laba() {
    	$laba = PersentaseLaba::all();
    	return view('admin.master.laba.index', compact('laba'));
    }

    public function tambah() {
    	return view('admin.master.laba.tambah');
    }

    public function proses_tambah(Request $r) {
    	$laba = new PersentaseLaba;
    	$laba->laba = $r->laba;
    	$laba->save();
    	return redirect(route('laba'))->with('sukses', 'Data Berhasil Ditambah!');
    }

    public function hapus($id) {
    	$laba = PersentaseLaba::find($id);
    	$laba->delete();
    	return redirect(route('laba'))->with('sukses', 'Data Berhasil Dihapus!');
    }

    public function laporan() {
        $laporan = PersentaseLaba::all();
        $brand = Brand::all()->first();
        $pdf = PDF::loadview('admin.master.laba.laporan', compact('laporan', 'brand'));
        return $pdf->stream();
    }
}
