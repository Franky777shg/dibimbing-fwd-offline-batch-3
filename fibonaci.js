const fibGenerator = (n) => {
    let fibo = [0, 1]

    for (let i = 2; i < n; i++) {
        fibo.push(fibo[i - 1] + fibo[i - 2])
    }

    return fibo
}

console.log(fibGenerator(5)) // [0, 1, 1, 2, 3]
console.log(fibGenerator(10))