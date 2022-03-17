import { Paypal } from "../api/Paypal";
import { PaymentProcessor } from "./PaymentProcessor";

export class PaypalPaymentProcessor implements PaymentProcessor {
  // requerimos inyectar el modulo de bajo nivel oscea la api que nos proporciona el banco
  // los modulos de alto nivel STORE no dependen de los modulos de bajo nivel BANK ambos dependen 
  // de esta abstraccion.

  constructor(private paypal: Paypal) {}
  pay() {
    this.paypal.chargeCustomer();
  }
}