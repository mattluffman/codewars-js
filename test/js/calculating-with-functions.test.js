const { assert } = require('chai');
const { seven, times, five, four, plus, nine, eight, minus, three, six, dividedBy, two } = require('../../kata/larger-problems/js/calculating-with-functions');

describe("Calculating with Functions", () => {
    it("test", () => {
        assert.strictEqual(seven(times    (five ())), 35, "seven(times(five ()))");
        assert.strictEqual(four (plus     (nine ())), 13, "four (plus(nine ()))");
        assert.strictEqual(eight(minus    (three())),  5, "eight(minus(three()))");
        assert.strictEqual(six  (dividedBy(two  ())),  3, "six(dividedBy(two()))");
    });
});
