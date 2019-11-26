<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCartsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('carts', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('produk_id');
            $table->bigInteger('jumlah');
            $table->bigInteger('sub_total')->nullable();
            $table->bigInteger('user_id');
            $table->bigInteger('status')->default('0'); //0 blm bayar //1 udh bayar
            $table->string('kode_unik');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('carts');
    }
}
