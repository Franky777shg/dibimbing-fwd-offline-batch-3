// let a = ["a", "b", "c", "d", "e"]
// let res1 = a.slice(1, 3)
// console.log(res1) // ?

// let b = ["a", "b", "c", "d", "e"]
// b.splice(0, 3, "z")
// console.log(b)

let nilai = [70, 85, 60]
let grade = nilai.map(n => n >= 75 ? "Lulus" : "Remidi")
let grade1 = nilai.map(() => "Remidi")
console.log(grade1);