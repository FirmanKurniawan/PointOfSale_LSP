<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Produk extends Model
{
    public function relasikategori() {
    	return $this->belongsTo('App\Kategori', 'kategori_id');
    }

    public function relasimatauang() {
    	return $this->belongsTo('App\MataUang', 'mata_uang_id');
    }
    
    public function relasiunit() {
    	return $this->belongsTo('App\Unit', 'unit_id');
    }
    
    public function relasilaba() {
    	return $this->belongsTo('App\PersentaseLaba', 'unit_id');
    }
}
