import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    this._amount = amount;
    this._currency = currency;
  }

  get amount() {
    return this._amount;
  }

  set amount(item) {
    this._amount = item;
  }

  // returns {Currency}
  get currency() {
    return this._currency;
  }

  // param {Currency} value
  set currency(item) {
    if (!(item instanceof Currency)) {
      throw new TypeError('currency must be a Currency');
    }
    this._currency = item;
  }

  displayFullPrice() {
    return `${this._amount} ${this._currency._name} (${this._currency.code})`;
  }

  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }
}
