const personas = [
  { 
    nombre: 'Juan',
    edad: 30,
    aprendiendo: 'Python'
  }, { 
    nombre: 'Joaquin',
    edad: 13,
    aprendiendo: 'JS'
  }, { 
    nombre: 'Oliver',
    edad: 5,
    aprendiendo: 'Node'
  },
]
let total = personas.reduce((edadTotal, persona) => edadTotal + persona.edad, 0);
console.log(total);
