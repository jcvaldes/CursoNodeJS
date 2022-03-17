class Store {
  constructor(user) {
    this.stripe = new Stripe(user);
  }
  purchaseBike(quantity) {
    this.stripe.makePayment(200 * quantity * 100);
  }
  purchaseHelmet(quantity) {
    this.stripe.makePayment(15 * quantity * 100);
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
      `${this.user} made a payment of $${amountInDollars / 100} with Paypal`
    );
  }
}

const store = new Store("John");
store.purchaseBike(2);
store.purchaseHelmet(2);
