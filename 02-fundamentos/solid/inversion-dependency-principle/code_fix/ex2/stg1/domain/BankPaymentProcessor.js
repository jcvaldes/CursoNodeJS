"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BankPaymentProcessor = void 0;
class BankPaymentProcessor {
    // requerimos inyectar el modulo de bajo nivel oscea la api que nos proporciona el banco
    // los modulos de alto nivel STORE no dependen de los modulos de bajo nivel BANK ambos dependen 
    // de esta abstraccion.
    constructor(bank) {
        this.bank = bank;
    }
    pay() {
        this.bank.charge();
    }
}
exports.BankPaymentProcessor = BankPaymentProcessor;
