const request = require('request');
const { expect } = require('chai');

describe('This is API integration test', () => {
    const api_url = 'http://localhost:7865';

    it('GET / responds with 200 containing "Welcome to the payment system"', (done) => {
        request.get(`${api_url}/`, (error, response, body) => {
            if (error) {
                done(error);
                return;
            }
            expect(response && response.statusCode).to.equal(200);
            expect(body).to.equal('Welcome to the payment system');
            done();
        });
    });

    it('GET /cart/:id responds with 200 containing "Payment methods for cart :id"', (done) => {
        request.get(`${api_url}/cart/1`, (error, response, body) => {
            if (error) {
                done(error);
                return;
            }
            expect(response && response.statusCode).to.equal(200);
            expect(body).to.equal('Payment methods for cart 1');
            done();
        });
    });

    it('GET /cart/:id returns 404 response for negative number values in :id', (done) => {
        request.get(`${api_url}/cart/-1`, (error, response, _body) => {
            if (error) {
                done(error);
                return;
            }
            expect(response && response.statusCode).to.equal(404);
            done();
        });
    });

    it('GET /cart/:id returns 404 response for non-numeric values in :id', (done) => {
        request.get(`${api_url}/cart/d200-44a5-9de6`, (error, response, _body) => {
            if (error) {
                done(error);
                return;
            }
            expect(response && response.statusCode).to.equal(404);
            done();
        });
    });
});
