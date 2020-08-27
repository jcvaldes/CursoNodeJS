function Tarea(nombre, urgencia) {
  this.nombre = nombre
  this.urgencia = urgencia
}

Tarea.prototype.mostrarInfo = function() {
  return `La tarea ${this.nombre} tiene prioridad ${this.urgencia}`
}

const t1 = new Tarea('Aprender JS y React', 'Urgente')
const t2 = new Tarea('Aprender Angular', 'Urgente')
console.log(t1)
console.log(t1.mostrarInfo())
console.log(t2)
console.log(t2.mostrarInfo())
