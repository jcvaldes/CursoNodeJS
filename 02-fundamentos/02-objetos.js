const persona = {
  username: 'Ironman',
  nombre: 'Tony',
  apellido: 'Stark',
  edad: 40,
  direccion: {
    ciudad: 'Nueva York',
    pais: 'EUA'
  },
  ocupaciones: [
    'CEO Stark Industries',
    'Superheroe de Marvel'
  ],
  nacimiento: function() {
    return new Date().getFullYear() - this.edad
  }
}
console.log(persona.apellido)
console.log(persona.ocupaciones[0])

console.log('ciudad', persona['direccion']['ciudad'])
console.log('ciudad', persona.direccion.ciudad)
console.log(persona.nacimiento())

const propiedad = "nombre"
console.log(persona[propiedad])


