@extends('layouts.admin')
@section('content')
<div class="content-body">
    <div class="container-fluid">
        <div class="row page-titles">
            <div class="col p-md-0">
                <h4>Tambah Stok PPN</h4>
            </div>
            <div class="col p-md-0">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><a href="index.html">Home</a>
                    </li>
                    <!-- <li class="breadcrumb-item"><a href="javascript:void()">Forms</a>
                            </li> -->
                    <li class="breadcrumb-item active">Tambah Stok PPN
                    </li>
                </ol>
            </div>
        </div>

        <div class="row">
            <div class="col-12">
                <div class="card forms-card">
                    <div class="card-body">
                        <h4 class="card-title mb-4">Tambah Stok PPN</h4>
                        <div class="basic-form">
                            <form action="{{route('stokppn_proses_tambah')}}" method="POST">
                                @csrf
                                <div class="form-group">
                                    <label class="text-label">Stok Minimum*</label>
                                    <input type="number" name="stok_minimum" class="form-control" placeholder="Masukkan Stok Minimum" required>
                                </div>
                                <div class="form-group">
                                    <label class="text-label">PPN*</label>
                                    <input type="number" name="ppn" class="form-control" placeholder="Masukkan PPN (%)" required>
                                </div>
                                <button type="submit" class="btn btn-primary btn-form mr-2">Submit</button>
                                <a href="{{route('stokppn')}}" class="btn btn-light text-dark btn-form">Cancel</a>
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