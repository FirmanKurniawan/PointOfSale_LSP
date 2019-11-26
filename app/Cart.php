<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Cart extends Model
{
    public function relasicart() {
        return $this->hasMany('App\Produk', 'id', 'produk_id');
    }
}
