class Store {
  constructor(user) {
    this.paymentProcessor = new PaymentProcessor(user);
  }
  purchaseBike(quantity) {
    this.paymentProcessor.pay(200 * quantity, paymentProcessors.STRIPE);
  }
  purchaseHelmet(quantity) {
    this.paymentProcessor.pay(15 * quantity, paymentProcessors.STRIPE);
  }
}

class Stripe {
  makePayment(user, amountInCents) {
    console.log(`${user} made a payment of ${amountInCents / 100} with Stripe`);
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
const paymentProcessors = {
  Stripe,
  Paypal,
};

class PaymentProcessor {
  constructor(user) {
    this.user = user;
  }
  pay(amountInDollars, type) {
    if (type === paymentProcessors.STRIPE) {
      console.log(
        `${this.user} made a payment of ${amountInDollars} with Stripe`
      );
    } else if (type === paymentProcessors.Paypal) {
      console.log(
        `${this.user} made a payment of $${amountInDollars} with Paypal`
      );
    }
  }
}
const store = new Store("John");
store.purchaseBike(2);
store.purchaseHelmet(2);
