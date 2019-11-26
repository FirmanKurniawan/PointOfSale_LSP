@extends('layouts.admin')
@section('content')
<div class="content-body">
    <div class="container-fluid">
        <div class="row page-titles">
            <div class="col p-md-0">
                <h4>Edit Produk</h4>
            </div>
            <div class="col p-md-0">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><a href="index.html">Home</a>
                    </li>
                    <!-- <li class="breadcrumb-item"><a href="javascript:void()">Forms</a>
                            </li> -->
                    <li class="breadcrumb-item active">Edit Produk
                    </li>
                </ol>
            </div>
        </div>

        @if($message = Session::get('sukses'))
        <div class="alert alert-primary alert-dismissible fade show">
            <button type="button" class="close h-100" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span>
            </button> <strong>{{$message}}</strong>
        </div>
        @endif

        <div class="row">
            <div class="col-12">
                <div class="card forms-card">
                    <div class="card-body">
                        <h4 class="card-title mb-4">Edit Produk</h4>
                        <div class="basic-form">
                            <form action="{{route('produk_proses_detail')}}" method="POST">
                            	@csrf
                                <div class="form-group">
                                    <label class="text-label">Nama Produk*</label>
                                    <input type="hidden" name="barcode" value="{{$produk->barcode}}">
                                    <input type="text" name="nama" class="form-control" placeholder="Masukkan Nama Produk" required value="{{$produk->nama}}">
                                </div>
                                <div class="form-group">
                                    <label class="text-label">Kategori Produk*</label>
                                    <select name="kategori_id" class="form-control" required>
                                        <option value="{{$produk->relasikategori->id}}">{{$produk->relasikategori->kategori}}</option>
                                        @foreach($kategori as $kategoris)
                                        <option value="{{$kategoris->id}}">{{$kategoris->kategori}}</option>
                                        @endforeach
                                    </select>
                                </div>
                                <div class="form-group">
                                    <label class="text-label">Stok Produk*</label>
                                    <input type="number" name="stok" class="form-control" placeholder="Masukkan Stok Produk" required value="{{$produk->stok}}">
                                </div>
                                <div class="form-group">
                                    <label class="text-label">Mata Uang*</label>
                                    <select name="mata_uang_id" class="form-control" required>
                                        <option value="{{$produk->relasimatauang->id}}">{{$produk->relasimatauang->matauang}}</option>
                                        @foreach($matauang as $matauangs)
                                        <option value="{{$matauangs->id}}">{{$matauangs->matauang}}</option>
                                        @endforeach
                                    </select>
                                </div>
                                <div class="form-group">
                                    <label class="text-label">Unit Produk*</label>
                                    <select name="unit_id" class="form-control" placeholder="Masukkan Unit Produk" required>
                                        <option value="{{$produk->relasiunit->id}}">{{$produk->relasiunit->unit}}</option>
                                        @foreach($unit as $units)
                                        <option value="{{$units->id}}">{{$units->unit}}</option>
                                        @endforeach
                                    </select>
                                </div>
                                <div class="form-group">
                                    <label class="text-label">Harga Beli Produk*</label>
                                    <input type="number" name="harga_beli" class="form-control" placeholder="Masukkan Harga Beli" required value="{{$produk->harga_beli}}">
                                </div>
                                <div class="form-group">
                                    <label class="text-label">Harga Jual Produk*</label>
                                    <select name="laba" class="form-control" required>
                                        <option value="{{$produk->relasiunit->id}}">{{$produk->relasilaba->laba}}%</option>
                                        @foreach($laba as $labas)
                                        <option value="{{$labas->id}}">{{$labas->laba}}%</option>
                                        @endforeach
                                    </select>
                                    <select name="stok_minimum" class="form-control" required>
                                        <option value="{{$produk->relasilaba->id}}">{{$produk->relasilaba->laba}}%</option>
                                        @foreach($stok_minimum as $stok_minimums)
                                        <option value="{{$stok_minimums->id}}">Stok Minimum: {{$stok_minimums->stok_minimum}} - PPN: {{$stok_minimums->ppn}}%</option>
                                        @endforeach
                                    </select>
                                </div>
                                <div class="form-group">
                                    <label class="text-label">Diskon Produk</label>
                                    <input type="number" name="diskon" class="form-control" placeholder="Masukkan Diskon Produk" value="{{$produk->diskon}}">
                                </div>
                                <div class="form-group">
                                    <label class="text-label">Keterangan Produk*</label>
                                    <textarea name="keterangan" class="form-control" placeholder="Masukkan Keterangan Produk" required>{{$produk->keterangan}}</textarea>
                                </div>
                                <button type="submit" class="btn btn-primary btn-form mr-2">Submit</button>
                                <a href="{{route('produk')}}" class="btn btn-light text-dark btn-form">Cancel</a>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    </div>
    <!-- #/ container -->
</div>
@endsection