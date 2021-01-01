const { relative } = require("path");

let persona = {
  nombre: 'Tony',
  apellido: 'Stark',
  clave: 'Ironman',
  edad: 45,
  rango: 'cientifico',
  getNombre: function() {
      return `${ this.nombre } ${ this.apellido} - clave: ${this.clave}`
  }
};

// let nombre = persona.nombre;
// let apellido = persona.apellido;
// let clave = persona.clave;


// let { nombre, apellido, clave } = persona;
                                 
//es un alias
let { nombre: primerNombre, apellido, clave } = persona;
console.log(primerNombre, apellido, clave);
console.log( 'Nombre: ' + primerNombre + ' Apellido: ' + apellido);

// template literal
console.log( `Nombre: ${primerNombre} Apellido ${apellido}` );

// function sumar (a, b) {
//   return a + b
// }

// expression function
// const sumar = function(a, b) {
//   return a + b
// } 

// Arrow function
// const sumar = (a, b) => {
//    return a + b
// } 

// expresion lambda
// const sumar = (a, b) =>  a + b

// console.log(sumar(1,1));





// desestructuro
// const retornaHeroe = (persona) => {
//   const { apellido, clave, nombre } = persona
//   console.log( apellido, clave, nombre )
// }

// desestructuracion en el argumento de la funcion
// const retornaHeroe = ({ nombre, apellido, clave, rango = 'capitan'}) => {
//   console.log( apellido, clave, nombre, rango )
// }

// retornaHeroe(persona)


const useContext = ({clave,  edad})  => {
  return {
     nombreClave: clave,
     anios: edad,
     latlng: {
       lat: 14.3232,
       lng: -12.3323
     }
  }
}

// const avenger = useContext(persona)
// console.log(avenger)

// Desestructuracion normal y desestructuracion anidada de objetos 
const {nombreClave, anios, latlng: {lat, lng}} = useContext(persona)
console.log(nombreClave, anios)
console.log(lat, lng)

