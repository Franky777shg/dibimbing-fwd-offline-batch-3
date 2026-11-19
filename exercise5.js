// Buat fungsi cekTahunKabisat(tahun) yang mengembalikan true/false hanya dengan satu ekspresi (tanpa if/ternary).
// Aturan: kabisat jika habis dibagi 4 dan tidak habis dibagi 100 atau habis dibagi 400.

const cekTahunKabisat = (tahun) => {
    console.log(tahun % 4 == 0 && tahun % 100 != 0 || tahun % 400 == 0)
}

cekTahunKabisat(1900) // false
cekTahunKabisat(2024) // true
cekTahunKabisat(2000) // true