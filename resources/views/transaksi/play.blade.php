<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Play Game</title>
</head>
<body>
    @if(isset($transaksi))
        <h1>{{ $transaksi->nama_user }} - Mainkan Game</h1>
        <iframe src="{{ $gameUrl }}" width="100%" height="600px"></iframe>
    @elseif(isset($error))
        <h1>{{ $error }}</h1>
    @else
        <h1>Transaksi tidak ditemukan atau belum selesai.</h1>
    @endif
</body>
</html>
