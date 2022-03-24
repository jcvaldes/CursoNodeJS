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
module.exports = {
  Paypal,
};
