function cuenta_regresiva(numero) {
  numero -= 1
  if (numero > 0) {
    console.log(numero)
    cuenta_regresiva(numero)
  } else {
    console.log('Booom!')
  }

  console.log('Fin de la func ', numero)
}

cuenta_regresiva(5)

function factorial(num) {
  if (num < 0) return -1
  else if (num == 0) return 1
  else {
    return num * factorial(num - 1)
  }
}

console.log('Factorial de 4 es 4.3.2.1 = ', factorial(4))
function factorialize(num) {
  if (num === 0 || num === 1)
    return 1;
  for (var i = num - 1; i >= 1; i--) {
    num *= i;
  }
  return num;
}
console.log(factorialize(4));