/* 
Concepto:
Si S es un subtipo de T, instancias de T deberían poderse sustituir por instancias de S sin alterar las propiedades del programa
Es decir, al tener una jerarquía nos supone que estamos estableciendo un contrato en el padre, por lo que, garantizar que se mantiene dicho contrato en el hijo, nos permitirá que podamos sustituir al padre y la aplicación seguirá funcionando perfectamente 👌

Cómo:
El comportamiento de de las subclases debe respetar el contrato establecido en la superclase.

Finalidad:
Mantener correctitud funcional para poder aplicar OCP
*/
class Shape {
  constructor(width, height) {
    if (this.constructor == Shape) {
      throw new Error("Abstract classes can't be instantiated.");
    }
    this.width = width;
    this.height = height;
  }
  setWidth(width) {
    this.width = width;
  }
  setHeight(height) {
    this.height = height;
  }
  getArea() {
    return this.width * this.height;
  }
  // increaseShapeWidth(shape) {
  //   if (shape.width === shape.height) {
  //     shape.setHeight(shape.height + 1);
  //   }
  //   shape.setWidth(shape.width + 1);
  // }
}

class Rectangle extends Shape {
  constructor(width, height) {
    super(width, height);
  }
}
class Square extends Shape {
  constructor(heightAndWidth) {
    super(heightAndWidth, heightAndWidth);
  }
  getArea() {
    return super.getArea();
  }
}

function increaseShapeWidth(rectangle) {
  if (rectangle.width === rectangle.height) {
    rectangle.setHeight(rectangle.height + 1);
  }
  rectangle.setWidth(rectangle.width + 1);
}

// client
const rectangle1 = new Rectangle(10, 2);
const rectangle2 = new Rectangle(5, 5);

const square = new Square(5, 5);

increaseShapeWidth(rectangle1);

increaseShapeWidth(rectangle2);

// NOOOOOOOOO
// rectangle2.increaseShapeWidth(rectangle2);

increaseShapeWidth(square);

console.log(rectangle1.getArea());
console.log(rectangle2.getArea());

// rompe el principio de sustitucion de liskov
console.log(square.getArea());
