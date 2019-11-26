<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use \App\MataUang;
use \App\Brand;
use PDF;

class MataUangController extends Controller
{
    public function matauang() {
    	$matauang = MataUang::all();
    	return view('admin.master.mata_uang.index', compact('matauang'));
    }

    public function tambah() {
    	return view('admin.master.mata_uang.tambah');
    }

    public function proses_tambah(Request $r) {
    	$matauang = new MataUang;
    	$matauang->matauang = $r->matauang;
    	$matauang->save();
    	return redirect(route('matauang'))->with('sukses', 'Data Berhasil Ditambah!');
    }

    public function edit(Request $r, $id) {
    	return view('admin.master.matauang.edit');
    }

    public function hapus($id) {
    	$matauang = matauang::find($id);
    	$matauang->delete();
    	return redirect(route('matauang'))->with('sukses', 'Data Berhasil Dihapus!');
    }

    public function laporan() {
        $laporan = MataUang::all();
        $brand = Brand::all()->first();
        $pdf = PDF::loadview('admin.master.mata_uang.laporan', compact('laporan', 'brand'));
        return $pdf->stream();
    }
}
