class Store {
  constructor(paymentProcessor) {
    // this.paymentProcessor = new StripePaymentProcessor(user);
    this.paymentProcessor = paymentProcessor;
  }
  purchaseBike(quantity) {
    this.paymentProcessor.pay(200 * quantity);
  }
  purchaseHelmet(quantity) {
    this.paymentProcessor.pay(15 * quantity);
  }
}
// las dependencias se deben dar en las abstracciones y no sobre las implementaciones o clases concretas
class StripePaymentProcessor {
  constructor(user) {
    this.stripe = new Stripe(user);
  }
  pay(amountInDollars) {
    this.stripe.makePayment(amountInDollars * 100);
  }
}

class PaypalPaymentProcessor {
  constructor(user) {
    this.user = user;
    this.paypal = new Paypal(user);
  }
  pay(amountInDollars) {
    this.paypal.makePayment(amountInDollars);
  }
}

class Stripe {
  constructor(user) {
    this.user = user;
  }
  makePayment(amountInCents) {
    console.log(
      `${this.user} made a payment of ${amountInCents / 100} with Stripe`
    );
  }
}

class Paypal {
  constructor(user) {
    this.user = user;
  }
  makePayment(amountInDollars) {
    console.log(
      `${this.user} made a payment of $${amountInDollars} with Paypal`
    );
  }
}

// Puedo cambiar el procesador de pago desde el cliente y todo sigue andando
const store = new Store(new PaypalPaymentProcessor("John"));
const store1 = new Store(new StripePaymentProcessor("John"));

store.purchaseBike(2);
store1.purchaseHelmet(2);
