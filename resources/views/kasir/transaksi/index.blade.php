@extends('layouts.kasir')
@section('content')
    <style>
    .invoice-box {
        max-width: 100%;
        margin: auto;
        padding: 30px;
        /*border: 1px solid #eee;
        box-shadow: 0 0 10px rgba(0, 0, 0, .15);*/
        font-size: 16px;
        line-height: 24px;
        font-family: 'Helvetica Neue', 'Helvetica', Helvetica, Arial, sans-serif;
        color: #555;
    }
    
    .invoice-box table {
        width: 100%;
        line-height: inherit;
        text-align: left;
    }
    
    .invoice-box table td {
        padding: 5px;
        vertical-align: top;
    }
    
    .invoice-box table tr td:nth-child(2) {
        text-align: right;
    }
    
    .invoice-box table tr.top table td {
        padding-bottom: 20px;
    }
    
    .invoice-box table tr.top table td.title {
        font-size: 45px;
        line-height: 45px;
        color: #333;
    }
    
    .invoice-box table tr.information table td {
        padding-bottom: 40px;
    }
    
    .invoice-box table tr.heading td {
        background: #eee;
        border-bottom: 1px solid #ddd;
        font-weight: bold;
    }
    
    .invoice-box table tr.details td {
        padding-bottom: 20px;
    }
    
    .invoice-box table tr.item td{
        border-bottom: 1px solid #eee;
    }
    
    .invoice-box table tr.item.last td {
        border-bottom: none;
    }
    
    .invoice-box table tr.total td:nth-child(2) {
        border-top: 2px solid #eee;
        font-weight: bold;
    }
    
    @media only screen and (max-width: 600px) {
        .invoice-box table tr.top table td {
            width: 100%;
            display: block;
            text-align: center;
        }
        
        .invoice-box table tr.information table td {
            width: 100%;
            display: block;
            text-align: center;
        }
    }
    
    /** RTL **/
    .rtl {
        direction: rtl;
        font-family: Tahoma, 'Helvetica Neue', 'Helvetica', Helvetica, Arial, sans-serif;
    }
    
    .rtl table {
        text-align: right;
    }
    
    .rtl table tr td:nth-child(2) {
        text-align: left;
    }
    </style>
        <div class="content-body">
            <div class="container-fluid">
                <div class="row page-titles">
                    <div class="col p-md-0">
                        <h4>Transaksi</h4>
                    </div>
                    <div class="col p-md-0">
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"><a href="javascript:void(0)">Home</a>
                            </li>
                            <li class="breadcrumb-item active">
                                <a href="">Transaksi</a>
                            </li>
                        </ol>
                    </div>
                </div>

                @if($message = Session::get('sukses'))
                <div class="alert alert-primary alert-dismissible fade show">
                    <button type="button" class="close h-100" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span>
                    </button> <strong>{{$message}}</strong></div>
                @endif

                    <div class="col-12">
                        <div class="card forms-card">
                            <div class="card-body">
                                <h4 class="card-title mb-4">Transaksi</h4>
                                <div class="basic-form">
                                    <div class="invoice-box">
                                        <div class="form-group">
                                            <form action="{{route('transaksi_proses_transaksi')}}" method="POST">
                                                @csrf
                                            <label class="text-label">Produk*</label>
                                            <select name="produk_id" class="form-control" placeholder="Masukkan Unit Produk" required>
                                                <option value="0">Pilih Produk</option>
                                                @foreach($produk as $produks)
                                                <option value="{{$produks->id}}">{{$produks->nama}} - Rp. {{$produks->harga_jual}}</option>
                                                @endforeach
                                            </select>
                                            <div>
                                            <input type="number" name="jumlah" class="form-control" placeholder="Masukkan Jumlah" required>
                                            </div>
                                                <div><br>   
                                                    <div class="button-icon">
                                                        <button type="submit" class="btn btn-rounded btn-info"><span class="btn-icon-left text-info"><i
                                                class="fa fa-plus color-info"></i> </span>Add</button>
                                                    </div>
                                                </div><br>
                                                </form>
        <form>
        <table cellpadding="0" cellspacing="0">
            
            <tr class="heading">
            </tr>
                <!-- <td>
                    1000
                </td> -->
            
            <tr class="heading">
                <td>
                    Item
                </td>
                
                <td>
                    Price
                </td>
            </tr>
            
            @foreach($cart as $carts)
            @foreach($carts->relasicart as $produk_cart)
            <tr class="item">
                <td>
                    {{$produk_cart->nama}} {{'@'}}{{$carts->jumlah}} {{$produk_cart->relasiunit->unit}}
                </td>
                
                <td>
                    {{$produk_cart->relasimatauang->matauang}} {{$carts->sub_total}} 
                    @if($produk_cart->diskon != null)
                    (Harga Sesudah Diskon {{$produk_cart->diskon}}
                    %)
                    @endif
                    <a href="{{route('transaksi_hapus', $carts->id)}}"><i class="fa fa-trash-o" aria-hidden="true" title="Hapus"></i></a>
                </td>
            </tr>
            @endforeach
            @endforeach

            <tr class="total">
                <td></td>
                
                @if($cart)
                <td>
                   Rp. {{$cart->sum('sub_total')}}
                </td>
                @else
                <td>
                   Rp. 
                </td>
                @endif
            </tr>
            
            <tr class="total">
                <td></td>
                
                <td>
                            <div class="card-body">
                                @if($cart2 != null)
                                <div class="button-icon">
                                    <a href="{{route('transaksi_checkout')}}" class="btn btn-primary">Checkout<span class="btn-icon-right"><i class="fa fa-shopping-cart"></i></span></a>
                                    <a href="{{route('transaksi_hapus_all', $carts->id)}}" class="btn btn-danger">Hapus Semua<span class="btn-icon-right"><i class="fa fa-close"></i></span></a>
                                </div>
                                @endif
                            </div>
                </td>
            </tr>
        </table>
        </form>
    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
@endsection