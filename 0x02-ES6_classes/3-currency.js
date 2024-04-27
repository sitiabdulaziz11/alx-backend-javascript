// implementation of Currency class

export default class Currency {
  constructor(code, name) {
    this._code = code;
    this._name = name;
  }

  get code() {
    return this._code;
  }

  set code(citem) {
    this._code = citem;
  }

  get name() {
    return this._name;
  }

  set name(nitem) {
    this._name = nitem;
  }

  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
