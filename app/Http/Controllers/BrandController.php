<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use \App\Brand;

class BrandController extends Controller
{
    public function brand() {
    	$brand = Brand::all()->first();
    	return view('superadmin.master.brand.index', compact('brand'));
    }

    public function edit(Request $r) {
    	$cek = Brand::all()->first();
    	if($cek == null){
    	$brand = new Brand;
    	$brand->nama = $r->nama;
    	$brand->alamat = $r->alamat;
    	$brand->keterangan = $r->keterangan;
    	$brand->telepon = $r->telepon;

    	$brand->foto = $r->foto;
    	$brand->kode_pos = $r->kode_pos;
    	$brand->save();
    	return redirect(route('brand'))->with('sukses', 'Data Berhasil Diubah!');
    	}
    	else{
    		$brand = Brand::find($r->id)->first();
	    	$brand->nama = $r->nama;
	    	$brand->alamat = $r->alamat;
	    	$brand->keterangan = $r->keterangan;
	    	$brand->telepon = $r->telepon;

	    	$brand->foto = $r->foto;
	    	$brand->kode_pos = $r->kode_pos;
	    	$brand->save();
	    	return redirect(route('brand'))->with('sukses', 'Data Berhasil Diubah!');
    	}
    }
}
