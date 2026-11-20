const stock = 3;

if (stock === 0) {
    console.log('Habis');
} else if (stock <= 5) {
    console.log('Sisa sedikit!');
} else {
    console.log('Tersedia');
}

const stock2 = 3

switch (true) {
    case stock === 0:
        console.log('Habis');
        break
    case stock <= 5:
        console.log('Sisa sedikit!');
        break
    default:
        console.log('Tersedia');
}