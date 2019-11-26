@extends('layouts.superadmin')
@section('content')
<div class="content-body">
    <div class="container-fluid">
        <div class="row page-titles">
            <div class="col p-md-0">
                <h4>Edit Pengguna</h4>
            </div>
            <div class="col p-md-0">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><a href="index.html">Home</a>
                    </li>
                    <!-- <li class="breadcrumb-item"><a href="javascript:void()">Forms</a>
                            </li> -->
                    <li class="breadcrumb-item active">Edit Pengguna
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
                        <h4 class="card-title mb-4">Edit Pengguna</h4>
                        <div class="basic-form">
                            <form action="{{route('pengguna_proses_detail')}}" method="POST">
                                @csrf
                                <div class="form-group">
                                    <label class="text-label">Nama*</label>
                                    <input type="hidden" name="id" value="{{$pengguna->id}}">
                                    <input type="text" name="name" class="form-control" placeholder="Firman Kurniawan" required value="{{$pengguna->name}}">
                                </div>
                                <div class="form-group">
                                    <label class="text-label">Email*</label>
                                    <input type="email" name="email" class="form-control" placeholder="kurniawan.firman94@gmail.com" required value="{{$pengguna->email}}">
                                </div>
                                <div class="form-group">
                                    <label class="text-label">Password*</label>
                                    <input type="password" name="password" class="form-control" placeholder="************">
                                </div>
                                <div class="form-group">
                                    <label class="text-label">Hak Akses*</label>
                                    <select name="role" class="form-control" required>
                                        @if($pengguna->role != null && $pengguna->role == '2')
                                        <option value="{{$pengguna->role}}">Super Admin</option>
                                        @elseif($pengguna->role != null && $pengguna->role == '1')
                                        <option value="{{$pengguna->role}}">Admin</option>
                                        @elseif($pengguna->role != null && $pengguna->role == '0')
                                        <option value="{{$pengguna->role}}">Kasir</option>
                                        @else
                                        <option value="">Pilih Hak Akses</option>
                                        @endif
                                        <option value="2">Super Admin</option>
                                        <option value="1">Admin</option>
                                        <option value="0">Kasir</option>
                                    </select>
                                </div>
                                <button type="submit" class="btn btn-primary btn-form mr-2">Submit</button>
                                <button type="button" class="btn btn-light text-dark btn-form">Cancel</button>
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