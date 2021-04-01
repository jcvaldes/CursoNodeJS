// Singleton
// sirve cuando quiero una sola instancia de un objeto en memoria
class MiSingleton {
  constructor(nombre = '') {
     // el constructor siempre devuelve this por defecto aunque no hace falta ponerlo 
    // return this

    this.nombre = nombre   
    // implicitamente siempre devuelve un this
    return this
  }
}


class Singleton {

  constructor(nombre = '') {
    console.log(Singleton.instance);
    // el constructor siempre devuelve this por defecto aunque no hace falta ponerlo 
    // return this
  }
  static getInstance(nombre='') {
    // const a = undefined
    // console.log(a);
    // console.log(!a);
    // console.log(!!a);
    
    // si existe la instancia 
    if (!!Singleton.instance) {
      return Singleton.instance
    }
    // si no esta vacia la instancia
    Singleton.instance = this
    this.nombre = nombre   
    return Singleton.instance
  }
  get instance() {
    return this.instance
  }
  get nombre() {
    return this.nombre
  }
}

const instancia1 = new MiSingleton('Ironman')
const instancia2 = new MiSingleton('Spiderman')
const instancia3 = Singleton.getInstance('Ironman')
const instancia4 = Singleton.getInstance('Spiderman')

console.log(`Nombre de la instancia1 es: ${instancia1.nombre}`);
console.log(`Nombre de la instancia2 es: ${instancia2.nombre}`);
console.log(`Nombre de la instancia3 es: ${instancia3.nombre}`);
console.log(`Nombre de la instancia4 es: ${instancia4.nombre}`);

