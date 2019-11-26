@extends('layouts.superadmin')
@section('content')
<div class="content-body">
            <div class="container-fluid">
                <div class="row page-titles">
                    <div class="col p-md-0">
                        <h4>Basic Forms</h4>
                    </div>
                    <div class="col p-md-0">
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"><a href="index.html">Home</a>
                            </li>
                            <!-- <li class="breadcrumb-item"><a href="javascript:void()">Forms</a>
                            </li> -->
                            <li class="breadcrumb-item active">Basic Forms
                            </li>
                        </ol>
                    </div>
                </div>

                <div class="row">
                    <div class="col-xl-12">
                        <div class="card forms-card">
                            <div class="card-body">
                                <h4 class="card-title mb-4">Basic Forms</h4>
                                <div class="basic-form">
                                    <form>
                                        <div class="form-group">
                                            <label class="text-label">Email Address*</label>
                                            <input type="email" name="email" class="form-control" placeholder="skinner@support.com" required>
                                        </div>
                                        <div class="form-group">
                                            <label class="text-label">Password*</label>
                                            <input type="password" name="password" class="form-control" placeholder="************" required>
                                        </div>
                                        <div class="form-group">
                                            <div class="form-check">
                                                <input id="checkbox1" class="form-check-input styled-checkbox" type="checkbox">
                                                <label for="checkbox1" class="form-check-label">Check Me Out</label>
                                            </div>
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