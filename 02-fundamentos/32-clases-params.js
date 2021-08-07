function creadorClases(definicionClase) {
  return new definicionClase()
}
let objeto = creadorClases(class {
  // permite hacer las inicializaciones del objeto cuando es creado
  constructor() {
    this.nombre = undefined
    this.edad = 30
  }

  saludar() {
    console.log('hola!')
  }
})
objeto.saludar()

class Cuadrado {
  // el constructor sirve para inicializar el objeto
  constructor(lado) {
    this.lado = lado
  }
  getArea() {
    return this.lado * this.lado
  }
}

function imprimirCuadrado(cuadrado) {
  if (!(cuadrado instanceof Cuadrado)) {
    console.error("El parametro enviado no es un cuadrado")
    return
  }
  console.log(cuadrado.getArea())
}
let mesa = new Cuadrado(10)
imprimirCuadrado(mesa)