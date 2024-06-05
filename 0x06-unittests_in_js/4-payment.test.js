const sinon = require('sinon');
const Utils = require('./utils');
const { expect } = require('chai');
const sendPaymentRequestToApi = require('./4-payment');

describe('sendPaymentRequestToApi', () => {
  it('sendPaymentRequestToApi calls console.log with the right arguments', () => {
    const employer = sinon.spy(console);
    const test = sinon.stub(Utils, 'calculateNumber');

    test.returns(10);
    sendPaymentRequestToApi(100, 20);
    expect(test.calledWith('SUM', 100, 20)).to.be.true;
    expect(test.callCount).to.be.equal(1);
    expect(employer.log.calledWith('The total is: 10')).to.be.true;
    expect(employer.log.callCount).to.be.equal(1);
    test.restore();
    employer.log.restore();
  });
});
