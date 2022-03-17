import { Bank } from "./bank";
// 1. La clase de alto nivel Store no debe depender del modulo de bajo nivel que es la api que nos proporciona el 
// Banco ambos deben depender de abstracciones por lo tanto debemos crear una interfaz
export class Store {
  constructor(private bank: Bank) {}

  purchase() {
    this.bank.charge();
   }
}