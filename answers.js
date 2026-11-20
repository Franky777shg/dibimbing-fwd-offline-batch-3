// // Soal 1
// let subTotal = 80000

// if (subTotal >= 100000) {
//     console.log(subTotal)
// } else {
//     console.log(subTotal + 15000)
// }

// // Soal 2
// let subTotal = 600000

// if (subTotal >= 500000) {
//     console.log(subTotal - (subTotal * 0.15))
// } else if (subTotal >= 200000) {
//     console.log(subTotal - (subTotal * 0.1))
// } else {
//     console.log(subTotal)
// }

const price = 10000
const qty = 10
let subTotal = 0

for (let i = 1; i <= qty; i++) {
    if (i % 5 == 0) {
        continue
    } else {
        subTotal += price
    }
}

// let counter = 1
// while (counter <= qty) {
//     switch (true) {
//         case counter % 5 == 0:
//             subTotal += price
//             break
//         default:
//     }
//     counter++
// }

console.log(subTotal)