// Input
const products = [
  { name: "Laptop", category: "Electronics", price: 1200 },
  { name: "Mouse", category: "Electronics", price: 25 },
  { name: "Keyboard", category: "Electronics", price: 50 },
  { name: "Chair", category: "Furniture", price: 100 },
  { name: "Table", category: "Furniture", price: 200 }
];

const findCheapestProduct = (arr, category) => {
    // Kelompokan product sesuai category yang diminta
    const filteredProducts = arr.filter(item => item.category === category)
    // []

    // Kalau data setelah flter kosong, maka return 'Product Not found'
    if (filteredProducts.length === 0) return 'Product Not found'

    // Urutkan product berdasarkan harga secara ascending
    const sortedProducts = filteredProducts.sort((a, b) => a.price - b.price)

    // Ambil product pertama dalam array nya
    return sortedProducts[0]
}

// Contoh
console.log(findCheapestProduct(products, "Wibu"));

// Output
// {
//   name: "Mouse",
//   category: "Electronics",
//   price: 25
// }
