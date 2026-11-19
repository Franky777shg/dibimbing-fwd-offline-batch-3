// Buat fungsi sapa(nama) yang mengembalikan "Halo, <nama>!". Jika nama adalah null atau undefined, gunakan "Tamu". Jika nama berupa string kosong "", tetap dianggap sebagai nama valid. Tanpa if, gunakan operator yang tepat.

const sapa = (nama) => {
    // Tulis code nya
    const result = nama ?? 'Tamu'
    console.log(`Halo, ${result}!`)
}

sapa(undefined)
sapa(null)
sapa("Budi")