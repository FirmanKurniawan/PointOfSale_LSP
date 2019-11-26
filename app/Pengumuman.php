<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Pengumuman extends Model
{
    public function relasiuser() {
        return $this->hasMany('App\User', 'id', 'user_id');
    }
}
