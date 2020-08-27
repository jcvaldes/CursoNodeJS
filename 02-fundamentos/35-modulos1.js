class Tarea {
  constructor(nombre, prioridad) {
    this.nombre = nombre
    this.prioridad = prioridad
  }
  mostrar() {
    console.log(`${this.nombre} tiene una prioridad de ${this.prioridad}`)
  }
}

class ComprasPendientes extends Tarea {
  constructor(nombre, prioridad, cantidad) {
    super(nombre, prioridad)
    this.cantidad = cantidad
  }
  mostrar() {
    super.mostrar()
    console.log(`y la cantidad es ${this.cantidad}`)
  }
}
// Mala Practica debo crear un archivo app.js
let t1 = new ComprasPendientes('Cafe', 'Alta', 1);
let t2 = new ComprasPendientes('Pollo', 'Alta', 1);
let t3 = new ComprasPendientes('Jabon', 'Alta', 3);

t1.mostrar()
t2.mostrar()
t3.mostrar()
