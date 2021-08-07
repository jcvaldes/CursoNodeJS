const carros = ['Ford', 'Mazda', 'Honda']

let i = 0
while (i < carros.length) {
  console.log(carros[i]);
  i++;
}
// es considerado falso
// undefined
// null
// false
i=0;
console.log('ww', i);
while (carros[i]) {
  console.log(carros[i]);
  i++;
}

let j = 0;
do {
  console.log(carros[j]);
  j++;
} while( carros[j] );