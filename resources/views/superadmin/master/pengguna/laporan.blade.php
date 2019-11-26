<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
@if($brand)
<h1 style="text-align: center;">
  {{$brand->nama}}
</h1>
<h4 style="text-align: center;">{{$brand->alamat}}, {{$brand->kode_pos}}, {{$brand->telepon}}</h4>
<h4 style="text-align: center;">{{$brand->keterangan}}</h4>
@endif
<table class="table table-striped">
  <thead>
    <tr>
      <th scope="col">Nama</th>
      <th scope="col">Email</th>
      <th scope="col">Hak Akses</th>
    </tr>
  </thead>
  <tbody>
    @foreach($laporan as $laporans)
    <tr>
      <td>{{$laporans->name}}</td>
      <td>{{$laporans->email}}</td>
      @if($laporans->role == '0')
      <td>KASIR</td>
      @elseif($laporans->role == '1')
      <td>ADMIN</td>
      @elseif($laporans->role == '2')
      <td>SUPER ADMIN</td>
      @endif
    </tr>
    @endforeach
  </tbody>
</table>