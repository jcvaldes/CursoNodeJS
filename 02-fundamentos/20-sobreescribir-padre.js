
class Rectangulo {
  constructor(alto, largo) {
    this.alto = alto
    this.largo = largo
  }
  getArea() {
    return `rectangulo: ${this.alto * this.largo}`
  }
}
let rectangulo = new Rectangulo(3, 2)


class Cuadrado extends Rectangulo {
  constructor(alto) {
    super(alto, alto)
  }
  getArea() {
    return super.getArea() + ' ' +  "cuadrado: " + (this.alto * this.largo)
  }
}
let cuadrado = new Cuadrado(10)

console.log(cuadrado.getArea())

