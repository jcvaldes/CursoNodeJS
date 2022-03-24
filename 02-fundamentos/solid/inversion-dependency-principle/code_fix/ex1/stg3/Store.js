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
module.exports = {
  Store,
};
