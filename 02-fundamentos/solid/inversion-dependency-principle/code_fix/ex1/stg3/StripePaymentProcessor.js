// las dependencias se deben dar en las abstracciones
// y no sobre las implementaciones o clases concretas
const { Stripe } = require("./Stripe");
class StripePaymentProcessor {
  constructor(user) {
    this.stripe = new Stripe(user);
  }
  pay(amountInDollars) {
    this.stripe.makePayment(amountInDollars * 100);
  }
}
module.exports = {
  StripePaymentProcessor,
};
