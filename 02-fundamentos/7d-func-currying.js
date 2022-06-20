function creaSumador(x) {
  return function (y) {
    console.log('x + y', x + y)
    return x + y
  }
}

const baseuno = creaSumador(1)
const basecinco = creaSumador(5)

const arr = [1, 2, 3, 4, 5]
console.log('base 1')
arr.map((n) => baseuno(n))
console.log('base 5')
arr.map((n) => basecinco(n))
