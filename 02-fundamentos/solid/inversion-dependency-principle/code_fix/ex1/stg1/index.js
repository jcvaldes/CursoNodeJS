class Store {
  constructor(user) {
    // el problema es que tengo que cambiar en todos lados donde se
    // usa el metodo StripePaymentProcessor
    this.paymentProcessor = new StripePaymentProcessor(user);
  }
  purchaseBike(quantity) {
    this.paymentProcessor.pay(200 * quantity);
  }
  purchaseHelmet(quantity) {
    this.paymentProcessor.pay(15 * quantity);
  }
}

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
    this.paypal = new Paypal();
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

const store = new Store("John");
store.purchaseBike(2);
store.purchaseHelmet(2);
