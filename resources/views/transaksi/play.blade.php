<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Play Game</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" />
    <style>
        body {
            background: #f8f9fa;
            min-height: 100vh;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            padding: 2rem;
        }
        .game-container {
            background: white;
            box-shadow: 0 0.5rem 1rem rgba(0,0,0,0.1);
            border-radius: 0.5rem;
            max-width: 900px;
            width: 100%;
            padding: 1rem 1.5rem 2rem;
        }
        iframe {
            border: none;
            border-radius: 0.5rem;
            width: 100%;
            height: 480px;
            max-width: 100%;
            display: block;
            margin-top: 1rem;
        }
        h1 {
            font-weight: 600;
            font-size: 1.75rem;
            color: #343a40;
            text-align: center;
        }
        .error-message {
            color: #dc3545;
            font-weight: 600;
            font-size: 1.5rem;
            text-align: center;
            padding: 3rem;
        }
        .info-message {
            color: #0d6efd;
            font-weight: 500;
            font-size: 1rem;
            text-align: center;
            margin-bottom: 1rem;
        }
    </style>
</head>
<body>
    <div class="game-container">
        @if(isset($error))
            <div class="error-message">{{ $error }}</div>
        @elseif(isset($gameUrl))
            @if(isset($message))
                <h1>Mainkan Game</h1>
                <div class="info-message">{{ $message }}</div>
            @elseif(isset($transaksi))
                <h1>{{ $transaksi->nama_user }} - Mainkan Game</h1>
            @endif

            <iframe src="{{ $gameUrl }}" allowfullscreen></iframe>
        @else
            <div class="error-message">Transaksi tidak ditemukan atau belum selesai.</div>
        @endif
    </div>
</body>
</html>
