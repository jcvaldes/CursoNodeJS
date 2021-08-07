
let nombreMetodo = "gritarNombre"

class Persona {
  // permite hacer las inicializaciones del objeto cuando es creado
  constructor(nombre) {
    this.nombre = nombre
  }

  decirNombre() {
    console.log(this.nombre)
  }
  // metodo computado se realiza a traves de una variable
  [nombreMetodo]() {
    console.log(this.nombre.toUpperCase())
  }
  // metodo estatico
  static crear( nombre ) {
    return new Persona(nombre)
  }
}

let yo = Persona.crear("juan")
console.log(yo.decirNombre())
console.log(yo.gritarNombre())

let sol = Persona.crear("Sol")