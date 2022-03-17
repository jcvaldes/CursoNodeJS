// DEFINICION:  La clase de alto nivel Store no debe depender del modulo de bajo nivel que es la api que nos proporciona el 
// Banco ambos deben depender de abstracciones por lo tanto debemos crear una interfaz

import { PaymentProcessor } from "./PaymentProcessor";
// 1. Desacoplamos la Api que nos proporciona el banco de la clase Store gracias a la interfaz y cumplimos
// con la primera parte del principio de inversion de dependencias

// 2. Los modulos de bajo nivel debe depender de la abstraccion pero no podemos modificar la api
// que nos proporciona el banco por lo que requerimos crear un adaptador "BankPaymentProcessor" que implemente la interfaz

export class Store {
  constructor(private paymentProcessor: PaymentProcessor) {}

  purchase() {
    this.paymentProcessor.pay();
   }
}