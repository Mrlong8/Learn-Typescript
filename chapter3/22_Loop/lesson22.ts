// for (let i = 0; i < 10; i++) {
//     console.log(">> i = ", i)
// }

// while
let product = [
    { name: 'phone', price: 500 },
    { name: 'tablet', price: 800 },
    { name: 'laptop', price: 1300 }
];

for (let i = 0; i < product.length; i++) {
    if (product[i].price == 1300) {
        break;

    }
    console.log(product[i])
}