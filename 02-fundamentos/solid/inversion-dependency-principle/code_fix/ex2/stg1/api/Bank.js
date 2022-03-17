"use strict";
// No se puede modificar
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bank = void 0;
class Bank {
    getAccountData(numberAccount) {
        return {
            name: 'John Doe',
            balance: 100,
            numberAccount: numberAccount
        };
    }
    charge() {
        // logica para cobrar
        console.log('cobrando con banco');
    }
}
exports.Bank = Bank;
