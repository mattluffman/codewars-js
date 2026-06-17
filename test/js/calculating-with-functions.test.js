const { assert } = require('chai');
const {
    zero, one, two, three, four, five, six, seven, eight, nine,
    plus, minus, times, dividedBy
} = require('../../kata/larger-problems/js/calculating-with-functions');

describe("Calculating with Functions", () => {
    it("test", () => {
        assert.strictEqual(seven(times    (five ())), 35, "seven(times(five ()))");
        assert.strictEqual(four (plus     (nine ())), 13, "four (plus(nine ()))");
        assert.strictEqual(eight(minus    (three())),  5, "eight(minus(three()))");
        assert.strictEqual(six  (dividedBy(two  ())),  3, "six(dividedBy(two()))");
    });

    it("my tests", () => {
        assert.strictEqual(zero(), 0, "zero()");
        assert.strictEqual(one(), 1, "one()");
        assert.strictEqual(two(), 2, "two()");
        assert.strictEqual(three(), 3, "three()");
        assert.strictEqual(four(), 4, "four()");
        assert.strictEqual(five(), 5, "five()");
        assert.strictEqual(six(), 6, "six()");
        assert.strictEqual(seven(), 7, "seven()");
        assert.strictEqual(eight(), 8, "eight()");
        assert.strictEqual(nine(), 9, "nine()");

        assert.strictEqual(one(plus(one())), 2, "one(plus(one()))");
        assert.strictEqual(zero(plus(five())), 5, "zero(plus(five()))");
        assert.strictEqual(two(plus(three())), 5, "two(plus(three()))");

        assert.strictEqual(nine(minus(one())), 8, "nine(minus(one()))");
        assert.strictEqual(five(minus(five())), 0, "five(minus(five()))");
        assert.strictEqual(one(minus(zero())), 1, "one(minus(zero()))");

        assert.strictEqual(two(times(three())), 6, "two(times(three()))");
        assert.strictEqual(zero(times(nine())), 0, "zero(times(nine()))");
        assert.strictEqual(three(times(three())), 9, "three(times(three()))");

        assert.strictEqual(nine(dividedBy(four())), 2, "nine(dividedBy(four()))");
        assert.strictEqual(eight(dividedBy(four())), 2, "eight(dividedBy(four()))");
        assert.strictEqual(one(dividedBy(one())), 1, "one(dividedBy(one()))");
    });
});
