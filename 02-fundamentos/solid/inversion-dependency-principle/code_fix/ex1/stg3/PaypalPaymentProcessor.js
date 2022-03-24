// las dependencias se deben dar en las abstracciones
// y no sobre las implementaciones o clases concretas
const { Paypal } = require("./Paypal");
class PaypalPaymentProcessor {
  constructor(user) {
    this.user = user;
    this.paypal = new Paypal(user);
  }
  pay(amountInDollars) {
    this.paypal.makePayment(amountInDollars);
  }
}
module.exports = {
  PaypalPaymentProcessor,
};
