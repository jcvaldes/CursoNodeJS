enum Type {
  Basic,
  Medium,
  Premium,
}
class Mobile {
  private _type: Type;
  private _price: number;
  private _name: string;
  constructor(type: Type, price: number, name: string) {
    this._type = type;
    this._price = price;
    this._name = name;
  }
  get type() {
    return this._type;
  }
  set type(value) {
    this._type = value;
  }
  get price() {
    return this._price;
  }
  set price(value) {
    this._price = value;
  }
  get name() {
    return this._name;
  }
  set name(value) {
    this._name = value;
  }
  toString() {
    return `${this.name}, Categoría: ${this.type} Precio: ${this.price}`;
  }
}
abstract class Handler {
  protected _successor: Handler;

  setSuccessor(successor: Handler) {
    this._successor = successor;
  }

  abstract handleRequest(mobile: Mobile): void;
}
class Employee extends Handler {
  handleRequest(mobile: Mobile): void {
    if (this.canHandle(mobile)) {
      console.log(`orden de ${mobile.name} realizada por empleado`);
    } else {
      this._successor.handleRequest(mobile);
    }
  }
  canHandle(mobile: Mobile): boolean {
    return mobile.type === Type.Basic;
  }
}

class Supervisor extends Handler {
  handleRequest(mobile: Mobile): void {
    if (this.canHandle(mobile)) {
      console.log(`orden de ${mobile.name} realizada por supervisor`);
    } else {
      this._successor.handleRequest(mobile);
    }
  }
  canHandle(mobile: Mobile): boolean {
    return mobile.type === Type.Medium;
  }
}

class Ceo extends Handler {
  handleRequest(mobile: Mobile): void {
    if (this.canHandle(mobile)) {
      console.log(`orden de ${mobile.name} realizada por ceo`);
    } else {
      this._successor.handleRequest(mobile);
    }
  }
  canHandle(mobile: Mobile): boolean {
    return mobile.type === Type.Premium;
  }
}
const client = () => {
  const iphone = new Mobile(Type.Premium, 900, "Iphone");
  const xiaomi = new Mobile(Type.Medium, 400, "Xiaomi note");
  const motoG7 = new Mobile(Type.Basic, 400, "Motorola G7");

  const phones: Mobile[] = [];
  phones.push(iphone);
  phones.push(xiaomi);
  phones.push(motoG7);

  const ceo = new Ceo();
  const supervisor = new Supervisor();
  const employee = new Employee();
  employee.setSuccessor(supervisor);
  supervisor.setSuccessor(ceo);

  phones.forEach((t) => employee.handleRequest(t));
};

client();
