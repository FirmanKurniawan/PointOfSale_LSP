<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use \App\Unit;
use \App\Brand;
use PDF;

class UnitController extends Controller
{
    public function unit() {
    	$unit = Unit::all();
    	return view('admin.master.unit.index', compact('unit'));
    }

    public function tambah() {
    	return view('admin.master.unit.tambah');
    }

    public function proses_tambah(Request $r) {
    	$unit = new Unit;
    	$unit->unit = $r->unit;
    	$unit->save();
    	return redirect(route('unit'))->with('sukses', 'Data Berhasil Ditambah!');
    }

    public function hapus($id) {
    	$unit = unit::find($id);
    	$unit->delete();
    	return redirect(route('unit'))->with('sukses', 'Data Berhasil Dihapus!');
    }

    public function laporan() {
        $laporan = Unit::all();
        $brand = Brand::all()->first();
        $pdf = PDF::loadview('admin.master.unit.laporan', compact('laporan', 'brand'));
        return $pdf->stream();
    }
}
