// esto puede ser una clase abstracta o interfaz si uso typescript
class Comida {
  preparar() {
    console.log('comida ya esta preparada');
  }
}

class Hamburguesa extends Comida {
  constructor() {
    console.log('Nueva hamburguesa creada');
    super()
  }
  ponerKetchup() {
    console.log("Ketchup añadido");
  }
}

class Pizza extends Comida {
  constructor() {
    console.log('Nueva pizza creada');
    super()
  }
  // sobrescribe al metodo de la clase padre
  preparar() {
    console.log("la pizza ha sido preparada");
  }
}

class CocinaFactory {
  constructor( tipo ) {
    switch(tipo) {
      case 'pizza':
        return new Pizza()
      case 'hambuguesa':
        return new Hamburguesa()
      default:
        return null;
    }
  }
}

const pizza = new CocinaFactory('pizza')
