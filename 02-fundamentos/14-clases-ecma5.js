function Persona( nombre ) {
  // atributos
  this.nombre = nombre;
  // metodo 
  this.gritarNombre = function() {
    console.log(this.nombre.toUpperCase());
  }
}
// metodos
Persona.prototype.decirNombre = function() {
  console.log(this.nombre);
}

// let juan = Persona("juan");
let juan = new Persona("juan");

juan.decirNombre();
juan.gritarNombre();
console.log(juan instanceof Persona);
console.log(juan instanceof Object);
