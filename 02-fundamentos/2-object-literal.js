const persona = {
  username: 'Ironman',
  nombre: 'Tony',
  apellido: 'Stark',
  edad: 40,
  direccion: {
    ciudad: 'Nueva York',
    pais: 'EUA'
  },
  ocupaciones: ['CEO Stark Industries', 'Superheroe de Marvel'],
  calcNacimiento: function () {
    return new Date().getFullYear() - this.edad
  }
}
console.log(persona)
console.log(persona.apellido)
console.log(persona.ocupaciones[0])

console.log('ciudad', persona['direccion']['ciudad'])
console.log('ciudad', persona.direccion.ciudad)
console.log(persona.calcNacimiento())

const propiedad = 'apellido'
console.log(persona[propiedad])
