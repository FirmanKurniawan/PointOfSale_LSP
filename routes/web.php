<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::group(['middleware' => 'auth'], function(){

Route::group(['middleware' => 'superadmin'], function(){
Route::prefix('superadmin')->group(function(){
	Route::get('/', 'SuperAdminController@dashboard')->name('superadmin');

	Route::prefix('brand')->group(function(){
		Route::get('/', 'BrandController@brand')->name('brand');

		Route::post('/edit', 'BrandController@edit')->name('brand_edit');
		Route::get('/proses-edit/{id}', 'BrandController@proses_edit')->name('brand_proses_edit');
	});

	Route::prefix('pengguna')->group(function(){
		Route::get('/', 'PenggunaController@pengguna')->name('pengguna');

		Route::get('/tambah', 'PenggunaController@tambah')->name('pengguna_tambah');
		Route::post('/proses-tambah', 'PenggunaController@proses_tambah')->name('pengguna_proses_tambah');

		Route::get('/detail/{id}', 'PenggunaController@detail')->name('pengguna_detail');
		Route::post('/proses_detail', 'PenggunaController@proses_detail')->name('pengguna_proses_detail');

		Route::get('/hapus/{id}', 'PenggunaController@hapus')->name('pengguna_hapus');

		Route::get('/laporan', 'PenggunaController@laporan')->name('pengguna_laporan');
	});

	Route::prefix('profile')->group(function(){
		Route::get('/', 'SuperAdminController@profile')->name('superadmin_profile');
		Route::post('/proses_profile', 'SuperAdminController@proses_profile')->name('superadmin_profile_edit');
	});

	Route::prefix('pengumuman')->group(function(){
		Route::get('/', 'PengumumanController@pengumuman')->name('pengumuman');

		Route::get('/tambah', 'PengumumanController@pengumuman_tambah')->name('pengumuman_tambah');
		Route::post('/proses_pengumuman', 'PengumumanController@proses_pengumuman')->name('proses_pengumuman');

		Route::get('/hapus/{id}', 'PengumumanController@hapus')->name('pengumuman_hapus');
	});
});
});

Route::group(['middleware' => 'admin'], function(){
Route::prefix('admin')->group(function(){
	Route::get('/', 'AdminController@dashboard')->name('admin');

	Route::prefix('kategori')->group(function(){
		Route::get('/', 'KategoriController@kategori')->name('kategori');

		Route::get('/tambah', 'KategoriController@tambah')->name('kategori_tambah');
		Route::post('/proses-tambah', 'KategoriController@proses_tambah')->name('kategori_proses_tambah');

		Route::get('/hapus/{id}', 'KategoriController@hapus')->name('kategori_hapus');
		Route::post('/proses-hapus', 'KategoriController@proses_hapus')->name('kategori_proses_hapus');

		Route::get('/laporan', 'KategoriController@laporan')->name('kategori_laporan');
	});

	Route::prefix('mata-uang')->group(function(){
		Route::get('/', 'MataUangController@matauang')->name('matauang');

		Route::get('/tambah', 'MataUangController@tambah')->name('matauang_tambah');
		Route::post('/proses-tambah', 'MataUangController@proses_tambah')->name('matauang_proses_tambah');

		Route::get('/hapus/{id}', 'MataUangController@hapus')->name('matauang_hapus');

		Route::get('/laporan', 'MataUangController@laporan')->name('matauang_laporan');
	});

	Route::prefix('unit')->group(function(){
		Route::get('/', 'UnitController@unit')->name('unit');

		Route::get('/tambah', 'UnitController@tambah')->name('unit_tambah');
		Route::post('/proses-tambah', 'UnitController@proses_tambah')->name('unit_proses_tambah');

		Route::get('/hapus/{id}', 'UnitController@hapus')->name('unit_hapus');

		Route::get('/laporan', 'UnitController@laporan')->name('unit_laporan');
	});

	Route::prefix('laba')->group(function(){
		Route::get('/', 'PersentaseLabaController@laba')->name('laba');

		Route::get('/tambah', 'PersentaseLabaController@tambah')->name('laba_tambah');
		Route::post('/proses-tambah', 'PersentaseLabaController@proses_tambah')->name('laba_proses_tambah');

		Route::get('/hapus/{id}', 'PersentaseLabaController@hapus')->name('laba_hapus');

		Route::get('/laporan', 'PersentaseLabaController@laporan')->name('laba_laporan');
	});

	Route::prefix('stok-ppn')->group(function(){
		Route::get('/', 'StokPpnController@stokppn')->name('stokppn');

		Route::get('/tambah', 'StokPpnController@tambah')->name('stokppn_tambah');
		Route::post('/proses-tambah', 'StokPpnController@proses_tambah')->name('stokppn_proses_tambah');

		Route::get('/hapus/{id}', 'StokPpnController@hapus')->name('stokppn_hapus');

		Route::get('/laporan', 'StokPpnController@laporan')->name('stokppn_laporan');
	});

	Route::prefix('produk')->group(function(){
		Route::get('/', 'ProdukController@produk')->name('produk');

		Route::get('/tambah', 'ProdukController@tambah')->name('produk_tambah');
		Route::post('/proses-tambah', 'ProdukController@proses_tambah')->name('produk_proses_tambah');

		Route::get('/hapus/{id}', 'ProdukController@hapus')->name('produk_hapus');

		Route::get('/detail/{barcode}', 'ProdukController@detail')->name('produk_detail');
		Route::post('/proses-detail/', 'ProdukController@proses_detail')->name('produk_proses_detail');

		Route::get('/laporan', 'ProdukController@laporan')->name('produk_laporan');
	});

	Route::prefix('laporan')->group(function(){
		Route::get('/produk', 'ProdukController@laporan_produk')->name('laporan_produk');
		Route::get('/produk_kosong', 'ProdukController@laporan_produk_kosong')->name('laporan_produk_kosong');
		Route::get('/transaksi', 'ProdukController@laporan_transaksi')->name('laporan_transaksi');
	});

	Route::prefix('profile')->group(function(){
		Route::get('/', 'AdminController@profile')->name('admin_profile');
		Route::post('/proses_profile', 'AdminController@proses_profile')->name('admin_profile_edit');
	});
});
});

Route::group(['middleware' => 'kasir'], function(){
Route::prefix('kasir')->group(function(){
	Route::get('/', 'KasirController@dashboard')->name('kasir');

	Route::prefix('transaksi')->group(function(){
		Route::get('/', 'KasirController@transaksi')->name('transaksi');
		Route::post('/proses-transaksi', 'KasirController@proses_transaksi')->name('transaksi_proses_transaksi');

		Route::get('/proses_hapus/{id}', 'KasirController@proses_hapus')->name('transaksi_hapus');
		Route::get('/proses_hapusall/{id}', 'KasirController@proses_hapus_all')->name('transaksi_hapus_all');

		Route::get('/checkout', 'KasirController@checkout')->name('transaksi_checkout');
		Route::post('/proses_checkout', 'KasirController@proses_checkout')->name('transaksi_proses_checkout');

		Route::get('/kode_unik', 'KasirController@kode_unik')->name('kode_unik');
		Route::get('/invoice', 'KasirController@invoice')->name('invoice');
	});

	Route::prefix('laporan')->group(function(){
		// Route::get('/produk', 'KasirController@laporan_produk')->name('laporan_produk');
	});

	Route::prefix('profile')->group(function(){
		Route::get('/', 'KasirController@profile')->name('kasir_profile');
		Route::post('/proses_profile', 'KasirController@proses_profile')->name('kasir_profile_edit');
	});
});
});

});

Route::get('/', 'PagesController@login')->name('login');
Route::post('/proses_login', 'PagesController@proses_login')->name('proses_login');

Route::get('/logout', 'PagesController@logout')->name('logout');