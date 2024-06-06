const request = require('request');
const { expect } = require('chai');

describe(' This is API integration test ', () => {
    const api_url = 'http://localhost:7865';

    it('GET / responds with 200 containing "Welcome to the payment system" ', (done) => {
        request.get(api_url, (error, response, body) => {
            expect(response.statusCode).to.equal(200);
            expect(body).to.equal('Welcome to the payment system');
            done();
        });
    });
})
