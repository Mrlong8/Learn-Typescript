const getTotal = (...numbers: number[]) => {
    let total = 0;
    numbers.forEach((num) => total += num);
    return total;
}

console.log(getTotal());
console.log(getTotal(10, 20));
console.log(getTotal(1, 2, 3));