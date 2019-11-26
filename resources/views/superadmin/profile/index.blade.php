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
                            <form action="{{route('superadmin_profile_edit')}}" method="POST">
                                @csrf
                                <div class="form-group">
                                    <label class="text-label">Nama*</label>
                                    <input type="text" name="name" class="form-control" placeholder="Firman Kurniawan" required value="{{$profile->name}}">
                                </div>
                                <div class="form-group">
                                    <label class="text-label">Email*</label>
                                    <input type="email" name="email" class="form-control" placeholder="kurniawan.firman94@gmail.com" required value="{{$profile->email}}">
                                </div>
                                <div class="form-group">
                                    <label class="text-label">Password Baru*</label>
                                    <input type="password" name="password" class="form-control" placeholder="************">
                                </div>
                                <div class="form-group">
                                    <label class="text-label">Hak Akses*</label>
                                    <input type="text" class="form-control" value="SUPER ADMIN" readonly>
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