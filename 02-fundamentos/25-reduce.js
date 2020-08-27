const orders = [
  { 
    decripcion: "Hamburguesa XL",
    price: 10,
  }, { 
    decripcion: "Papas fritas",
    price: 20,
  }
]
let numbers = [1,2,3,5]

let total = numbers.reduce((acum, b) => acum + b, 0);
console.log(total);

let orderTotal = orders.reduce((acum, b) => acum + b.price, 0);
console.log(orderTotal);

// Son peores formas

// let acum = 0;
// for(let n = 0; n<orders.length; n++) {
//   acum = acum + orders[n].price
//   acum += orders[n].price
//}
// console.log(acum);


// let acum = 0;
// orders.forEach(function(item) {
//   acum += item.price;

// });


console.log(acum);


