const { verify } = require("crypto");

let db = [
  {
    id: 1625,
    product: 'Parlante JVC',
    price: 8600,
    commerce: 'Centrogar',
    promocion: true    
  }, 
  {
    id: 13456,
    product: 'Parlante JVC',
    price: 5600,
    commerce: 'Fravega',
    promocion: false
  },
  {
    id: 13457,
    product: 'TV JVC',
    price: 7000,
    commerce: 'Centrogar',
    promocion: false
  }
]


const quickSort = (arr) => {
  let smaller = []; 
  let larger = [];
	if (arr.length <= 1) {
		return arr;
  }
	for (let i = 1; i < arr.length; i++) { 
		if (arr[i].price < arr[0].price)
			smaller.push(arr[i]); 
		if (arr[i].price >= arr[0].price) 
			larger.push(arr[i]); 
	}
	return quickSort(smaller).concat(arr[0], quickSort(larger));
}

const minPriceCommerces = (product, arr) => {
  let MaxValue = 2147483647;
  let p = {};
  arr.forEach((v, k) => {
    if (v.product === product ) {
      if(v.price <= MaxValue) {
        p = v
        MaxValue = v.price; 
      }
    }
  });
  return arr.filter(i => i.product === p.product && i.price === p.price);
}

const maxPriceCommerces = (product, arr) => {
  let MinValue = 0;
  let p = {};
  arr.forEach((v, k) => {
    if (v.product === product ) {
      if(v.price >= MinValue) {
        p = v
        MinValue = v.price; 
      }
    }
  });
  return arr.filter(i => i.product === p.product && i.price === p.price);
}
const bestProductPrices = (commerce, arr) => {
  let MaxValue = 2147483647;
  let c = {};
  arr.forEach((v, k) => {
    if (v.commerce === commerce ) {
      if(v.price <= MaxValue) {
        c = v
        MaxValue = v.price; 
      }
    }
  });
  return arr.filter(i => i.commerce === c.commerce && i.product === c.product && i.price === MaxValue);
} 
let arrSorted = [];
arrSorted = quickSort(db)
console.log(arrSorted)

let productsMin = minPriceCommerces('Parlante JVC', db)
console.log(productsMin)

let productsMax = maxPriceCommerces('Parlante JVC', db)
console.log(productsMax)

let bestPrices = bestProductPrices('Centrogar', db)
console.log(bestPrices)

