// este es el client es el que origina todo. podria ser desde una aplicacion de celular
// nuestro cliente y tener una libreria empaquetada subida npm  con todo lo relacionado
// a nuestros procesadores de pago.
const { Store } = require("./Store");

const { PaypalPaymentProcessor } = require("./PaypalPaymentProcessor");
const { StripePaymentProcessor } = require("./StripePaymentProcessor");

// Puedo cambiar el procesador de pago desde el cliente y todo sigue andando
const store = new Store(new PaypalPaymentProcessor("John"));
const store1 = new Store(new StripePaymentProcessor("John"));

store.purchaseBike(2);
store1.purchaseHelmet(2);
