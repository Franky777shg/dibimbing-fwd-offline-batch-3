// Buat variabel hargaSatuan = 15000 dan jumlah = 4. Hitung total, lalu tampilkan dengan template literal. Setelah itu, buat variabel boolean gratisOngkir yang bernilai true jika total lebih dari 50000.

// Contoh output:

// Total belanja: Rp 60000
// Gratis ongkir: true
const hargaSatuan = 15000
const jumlah = 4
const gratisOngkir = hargaSatuan * jumlah > 50000 // false or true
console.log(`Total belanja: Rp ${hargaSatuan * jumlah}`)
console.log(`Gratis ongkir: ${gratisOngkir}`)