@extends('layouts.superadmin')
@section('content')
<div class="content-body">
            <div class="container-fluid">
                <div class="row page-titles">
                    <div class="col p-md-0">
                        <h4>Brand</h4>
                    </div>
                    <div class="col p-md-0">
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"><a href="index.html">Home</a>
                            </li>
                            <!-- <li class="breadcrumb-item"><a href="javascript:void()">Forms</a>
                            </li> -->
                            <li class="breadcrumb-item active">Brand
                            </li>
                        </ol>
                    </div>
                </div>
            <div class="row">
                <div class="col-12">
                    <div class="card forms-card">
                        <div class="card-body">
                            <h4 class="card-title mb-4">Brand</h4>
                            <div class="basic-form">
                                @if(!$brand == null)
                                <form action="{{route('brand_edit')}}" method="POST" enctype="multipart/form-data">
                                    @csrf
                                    <div class="form-group">
                                        <label class="text-label">Nama Toko*</label>
                                        <input type="hidden" name="id" value="{{$brand->id}}">
                                        <input type="text" name="nama" class="form-control" placeholder="Masukkan Nama Toko" value="{{$brand->nama}}">
                                    </div>
                                    <div class="form-group">
                                        <label class="text-label">Alamat Toko*</label>
                                        <input type="text" name="alamat" class="form-control" placeholder="Masukkan Alamat Toko" value="{{$brand->alamat}}">
                                    </div>
                                    <div class="form-group">
                                        <label class="text-label">Keterangan Toko*</label>
                                        <textarea name="keterangan" class="form-control" placeholder="Masukkan Keterangan Toko">{{$brand->keterangan}}</textarea>
                                    </div>
                                    <div class="form-group">
                                        <label class="text-label">Telepon Toko*</label>
                                        <input type="number" name="telepon" class="form-control" placeholder="Masukkan Telepon Toko" value="{{$brand->telepon}}">
                                    </div>
                                    <div class="form-group">
                                        <label class="text-label">Kode POS Toko*</label>
                                        <input type="number" name="kode_pos" class="form-control" placeholder="Masukkan Kode POS Toko" value="{{$brand->kode_pos}}">
                                    </div>
                                    <div class="form-group">
                                        <label class="text-label">Foto Toko*</label>
                                        <input type="file" name="foto" class="form-control" placeholder="Masukkan Foto Toko" value="{{$brand->foto}}">
                                    </div>
                                    <button type="submit" class="btn btn-primary btn-form mr-2">Submit</button>
                                    <a href="{{route('superadmin')}}" class="btn btn-light text-dark btn-form">Cancel</a>
                                </form>
                                @else
                                <form action="{{route('brand_edit')}}" method="POST" enctype="multipart/form-data">
                                    @csrf
                                    <div class="form-group">
                                        <label class="text-label">Nama Toko*</label>
                                        <input type="text" name="nama" class="form-control" placeholder="Masukkan Nama Toko">
                                    </div>
                                    <div class="form-group">
                                        <label class="text-label">Alamat Toko*</label>
                                        <input type="text" name="alamat" class="form-control" placeholder="Masukkan Alamat Toko">
                                    </div>
                                    <div class="form-group">
                                        <label class="text-label">Keterangan Toko*</label>
                                        <textarea name="keterangan" class="form-control" placeholder="Masukkan Keterangan Toko"></textarea>
                                    </div>
                                    <div class="form-group">
                                        <label class="text-label">Telepon Toko*</label>
                                        <input type="number" name="telepon" class="form-control" placeholder="Masukkan Telepon Toko">
                                    </div>
                                    <div class="form-group">
                                        <label class="text-label">Kode POS Toko*</label>
                                        <input type="number" name="kode_pos" class="form-control" placeholder="Masukkan Kode POS Toko">
                                    </div>
                                    <div class="form-group">
                                        <label class="text-label">Foto Toko*</label>
                                        <input type="file" name="foto" class="form-control" placeholder="Masukkan Foto Toko">
                                    </div>
                                    <button type="submit" class="btn btn-primary btn-form mr-2">Submit</button>
                                    <a href="{{route('superadmin')}}" class="btn btn-light text-dark btn-form">Cancel</a>
                                </form>
                                @endif
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            </div>
            <!-- #/ container -->
        </div>
@section('js')

<script src="/gleek/gleek/assets/plugins/datatables/js/jquery.dataTables.min.js"></script>
<script src="/gleek/gleek/main/js/plugins-init/datatables.init.js"></script>
@endsection
@endsection