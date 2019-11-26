<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use \App\Kategori;
use \App\Brand;
use PDF;

class KategoriController extends Controller
{
    public function kategori() {
    	$kategori = Kategori::all();
    	return view('admin.master.kategori.index', compact('kategori'));
    }

    public function tambah() {
    	return view('admin.master.kategori.tambah');
    }

    public function proses_tambah(Request $r) {
    	$kategori = new Kategori;
    	$kategori->kategori = $r->kategori;
    	$kategori->save();
    	return redirect(route('kategori'))->with('sukses', 'Data Berhasil Ditambah!');
    }

    public function edit(Request $r, $id) {
    	return view('admin.master.kategori.edit');
    }

    public function hapus($id) {
    	$kategori = Kategori::find($id);
    	$kategori->delete();
    	return redirect(route('kategori'))->with('sukses', 'Data Berhasil Dihapus!');
    }

    public function laporan() {
        $laporan = Kategori::all();
        $brand = Brand::all()->first();
        $pdf = PDF::loadview('admin.master.kategori.laporan', compact('laporan', 'brand'));
        return $pdf->stream();
    }
}
