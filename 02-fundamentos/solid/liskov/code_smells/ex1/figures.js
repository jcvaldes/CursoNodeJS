/* 
Concepto:
Si S es un subtipo de T, instancias de T deberían poderse sustituir por instancias de S sin alterar las propiedades del programa
Es decir, al tener una jerarquía nos supone que estamos estableciendo un contrato en el padre, por lo que, garantizar que se mantiene dicho contrato en el hijo, nos permitirá que podamos sustituir al padre y la aplicación seguirá funcionando perfectamente 👌

Cómo:
El comportamiento de de las subclases debe respetar el contrato establecido en la superclase.

Finalidad:
Mantener correctitud funcional para poder aplicar OCP
*/
class Rectangle {
  constructor(width, height) {
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
}
class Square extends Rectangle {
  constructor(heightAndWidth) {
    super(heightAndWidth, heightAndWidth);
  }
  setWidth(width) {
    super.setWidth(width);
    super.setHeight(width);
  }
  setHeight(height) {
    super.setWidth(height);
    super.setHeight(height);
  }
}

function increaseRectangleWidth(rectangle) {
  rectangle.setWidth(rectangle.width + 1);
}

// client
const rectangle1 = new Rectangle(10, 2);
const rectangle2 = new Rectangle(5, 5);

//const square = new Square(5, 5);

increaseRectangleWidth(rectangle1);

increaseRectangleWidth(rectangle2);

// increaseRectangleWidth(square);

console.log(rectangle1.getArea());
console.log(rectangle2.getArea());

// rompe el principio de sustitucion de liskov
// console.log(square.getArea());
