import { Store } from "./domain/Store";
import { BankPaymentProcessor } from "./domain/BankPaymentProcessor";
import { Bank } from "./api/Bank";
import { PaypalPaymentProcessor } from "./domain/PaypalPaymentProcessor";
import { Paypal } from "./api/Paypal";

const storeWithBank = new Store(new BankPaymentProcessor(new Bank()));
storeWithBank.purchase();

const storeWithPaypal = new Store(new PaypalPaymentProcessor(new Paypal()));
storeWithPaypal.purchase();
