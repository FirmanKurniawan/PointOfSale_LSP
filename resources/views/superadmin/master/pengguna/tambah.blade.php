@extends('layouts.superadmin')
@section('content')
<div class="content-body">
    <div class="container-fluid">
        <div class="row page-titles">
            <div class="col p-md-0">
                <h4>Tambah Pengguna</h4>
            </div>
            <div class="col p-md-0">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><a href="index.html">Home</a>
                    </li>
                    <!-- <li class="breadcrumb-item"><a href="javascript:void()">Forms</a>
                            </li> -->
                    <li class="breadcrumb-item active">Tambah Pengguna
                    </li>
                </ol>
            </div>
        </div>

        <div class="row">
            <div class="col-12">
                <div class="card forms-card">
                    <div class="card-body">
                        <h4 class="card-title mb-4">Tambah Pengguna</h4>
                        <div class="basic-form">
                            <form action="{{route('pengguna_proses_tambah')}}" method="POST">
                                @csrf
                                <div class="form-group">
                                    <label class="text-label">Nama*</label>
                                    <input type="text" name="name" class="form-control" placeholder="Firman Kurniawan" required>
                                </div>
                                <div class="form-group">
                                    <label class="text-label">Email*</label>
                                    <input type="email" name="email" class="form-control" placeholder="kurniawan.firman94@gmail.com" required>
                                </div>
                                <div class="form-group">
                                    <label class="text-label">Password*</label>
                                    <input type="password" name="password" class="form-control" placeholder="************" required>
                                </div>
                                <div class="form-group">
                                    <label class="text-label">Hak Akses*</label>
                                    <select name="role" class="form-control" required>
                                        <option value="2">Super Admin</option>
                                        <option value="1">Admin</option>
                                        <option value="0">Kasir</option>
                                    </select>
                                </div>
                                <button type="submit" class="btn btn-primary btn-form mr-2">Submit</button>
                                <a href="{{route('pengguna')}}" class="btn btn-light text-dark btn-form">Cancel</a>
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