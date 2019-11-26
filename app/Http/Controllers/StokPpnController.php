<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use \App\StokPpn;
use \App\Brand;
use PDF;

class StokPpnController extends Controller
{
    public function stokppn() {
    	$stokppn = StokPpn::all();
    	return view('admin.master.stok_ppn.index', compact('stokppn'));
    }

    public function tambah() {
    	return view('admin.master.stok_ppn.tambah');
    }

    public function proses_tambah(Request $r) {
    	$stokppn = new StokPpn;
    	$stokppn->stok_minimum = $r->stok_minimum;
    	$stokppn->ppn = $r->ppn;
    	$stokppn->save();
    	return redirect(route('stokppn'))->with('sukses', 'Data Berhasil Ditambah!');
    }

    public function hapus($id) {
    	$stokppn = StokPpn::find($id);
    	$stokppn->delete();
    	return redirect(route('stokppn'))->with('sukses', 'Data Berhasil Dihapus!');
    }

    public function laporan() {
        $laporan = StokPpn::all();
        $brand = Brand::all()->first();
        $pdf = PDF::loadview('admin.master.stok_ppn.laporan', compact('laporan', 'brand'));
        return $pdf->stream();
    }
}
