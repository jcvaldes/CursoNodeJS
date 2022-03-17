"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaypalPaymentProcessor = void 0;
class PaypalPaymentProcessor {
    // requerimos inyectar el modulo de bajo nivel oscea la api que nos proporciona el banco
    // los modulos de alto nivel STORE no dependen de los modulos de bajo nivel BANK ambos dependen 
    // de esta abstraccion.
    constructor(paypal) {
        this.paypal = paypal;
    }
    pay() {
        this.paypal.chargeCustomer();
    }
}
exports.PaypalPaymentProcessor = PaypalPaymentProcessor;
