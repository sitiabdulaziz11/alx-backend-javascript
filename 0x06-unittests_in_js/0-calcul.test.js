const assert = require('assert');

const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {
    it('should return the sum of a and b rounded to the nearest integer', () => {
        assert.strictEqual(calculateNumber(1, 3), 4);
    });

    it('floating point whole numbers', () => {
        assert.strictEqual(calculateNumber(2.0, 3.0), 5);
    });

    it('floating point decimals', () => {
        assert.strictEqual(calculateNumber(1.5, 3.0), 5);
    });

    it('floating point fractional number', () => {
        assert.strictEqual(calculateNumber(1.5, 3.5), 6);
    })

    it('floating point negative numbers', () => {
        assert.strictEqual(calculateNumber(-1.5, -3.5), -4);
    })

    it('rounding down a and b floating point fractional numbers with trailing 9\'s', () => {
        assert.strictEqual(calculateNumber(2.499999, 3.499999), 5);
    });

    it('rounding up a and b floating point fractional numbers with trailing 9\'s', () => {
        assert.strictEqual(calculateNumber(2.500001, 3.500001), 7);
    });
});