"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Store_1 = require("./domain/Store");
const BankPaymentProcessor_1 = require("./domain/BankPaymentProcessor");
const Bank_1 = require("./api/Bank");
const PaypalPaymentProcessor_1 = require("./domain/PaypalPaymentProcessor");
const Paypal_1 = require("./api/Paypal");
const storeWithBank = new Store_1.Store(new BankPaymentProcessor_1.BankPaymentProcessor(new Bank_1.Bank()));
storeWithBank.purchase();
const storeWithPaypal = new Store_1.Store(new PaypalPaymentProcessor_1.PaypalPaymentProcessor(new Paypal_1.Paypal()));
storeWithPaypal.purchase();
