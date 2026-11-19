// Buat fungsi formatDurasi(totalDetik) yang mengubah detik menjadi jam, menit, dan detik. Gunakan operator /, %, dan Math.floor.

const formatDurasi = (totalDetik) => {
    // Tulis codenya
    const jam = Math.floor(totalDetik / 3600)
    const menit = Math.floor(totalDetik % 3600 / 60)
    const detik = totalDetik % 60
    console.log(`${jam} Jam ${menit} Menit ${detik} Detik`)
}

formatDurasi(61) // 0 Jam 1 Menit 0 Detik
formatDurasi(200) // 0 Jam 3 Menit 20 Detik
formatDurasi(3670) // 1 Jam 1 Menit 10 Detik