interface IFigura {
  calcArea(): number;
}

class Rectangulo implements IFigura {    
  constructor(private base: number, private altura: number) {
      console.log('me cree');
  }

  calcArea(): number {
      return this.base * this.altura;
  }
}

class Cuadrado implements IFigura {    
  altura: number = 0;
  constructor(private base: number) {
      this.altura = base
  }

  calcArea(): number {
      return this.base * this.altura;
  }
}

class Circulo implements IFigura {
constructor(private radio: number) {}
calcArea(): number {
    return Math.PI * Math.pow(this.radio, 2);
}
}

// const rectangulo = new Rectangulo(2,4);
// console.log(rectangulo.calcArea());

// const cuadrado = new Cuadrado(4);
// console.log(cuadrado.calcArea());

// const circulo = new Circulo(3);
// console.log(circulo.calcArea());

let fig: IFigura = new Cuadrado(2);
console.log(fig.calcArea());

fig = new Circulo(3);
console.log(fig.calcArea());

fig = new Rectangulo(3, 3);
console.log(fig.calcArea());


