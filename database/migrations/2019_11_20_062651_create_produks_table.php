<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateProduksTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('produks', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('barcode');
            $table->string('nama');
            $table->string('stok');
            $table->string('kategori_id');
            $table->string('mata_uang_id');
            $table->string('unit_id');
            $table->string('harga_beli');
            $table->string('harga_jual');
            $table->string('diskon')->nullable();
            $table->string('laba')->nullable();
            $table->string('ppn')->nullable();
            $table->text('keterangan');
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
        Schema::dropIfExists('produks');
    }
}
