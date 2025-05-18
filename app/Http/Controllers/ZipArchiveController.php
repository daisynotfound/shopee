<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use ZipArchive;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Storage;

class ZipArchiveController extends Controller
{
    /**
     * Ekstrak file ZIP ke folder yang ditentukan.
     *
     * @param string $zipFilePath
     * @param string $gameFolder
     * @return bool
     */
    public function extractZipFile($zipFilePath, $gameFolder)
    {
        // Tentukan path ekstraksi
        $extractPath = public_path('storage/games/' . $gameFolder);

        // Cek jika folder game sudah ada, jika ada hapus dulu
        if (File::exists($extractPath)) {
            File::deleteDirectory($extractPath); // Menghapus folder jika sudah ada
        }

        // Buat folder baru untuk ekstraksi
        File::makeDirectory($extractPath, 0777, true, true);

        // Ekstrak file ZIP
        $zip = new ZipArchive;
        if ($zip->open($zipFilePath) === TRUE) {
            $zip->extractTo($extractPath);
            $zip->close();
            return true;
        } else {
            throw new \Exception('Gagal mengekstrak file ZIP');
        }
    }

    /**
     * Menangani permintaan ekstraksi game
     *
     * @param string $zipFilePath
     * @param string $gameFolder
     * @return \Illuminate\Http\RedirectResponse
     */
    public function handleGameExtraction($zipFilePath, $gameFolder)
    {
        try {
            $this->extractZipFile($zipFilePath, $gameFolder);
            return redirect()->back()->with('success', 'File berhasil diekstrak.');
        } catch (\Exception $e) {
            return redirect()->back()->with('error', 'Gagal mengekstrak file game: ' . $e->getMessage());
        }
    }
}
