class Store {
  constructor(user) {
    // this.stripe = new Stripe(user);
    this.paypal = new Paypal(user);
    this.user = user;
  }
  purchaseBike(quantity) {
    // this.stripe.makePayment(200 * quantity * 100);
    this.paypal.makePayment(200 * quantity);
  }
  purchaseHelmet(quantity) {
    // this.stripe.makePayment(15 * quantity * 100);
    this.paypal.makePayment(15 * quantity);
  }
}
// class Stripe {
//   makePayment(user, amountInCents) {
//     console.log(`${user} made a payment of ${amountInCents / 100} with Paypal`);
//   }
// }

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
