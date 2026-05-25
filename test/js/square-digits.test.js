const {assert} = require("chai");
const {squareDigits} = require("../../kata/kata");

describe("squareDigits", function () {
    describe("Basic tests", function () {
        it("squareDigits(3212) should equal 9414", function () {
            assert.strictEqual(squareDigits(3212), 9414);
        });

        it("squareDigits(2112) should equal 4114", function () {
            assert.strictEqual(squareDigits(2112), 4114);
        });

        it("squareDigits(0) should equal 0", function () {
            assert.strictEqual(squareDigits(0), 0);
        });
    });

    describe("additional examples", function () {
        it("squareDigits(9119) should equal 811181", function () {
            assert.strictEqual(squareDigits(9119), 811181);
        });

        it("squareDigits(9914) should equal 8181116", function () {
            assert.strictEqual(squareDigits(9914), 8181116);
        });
    });

    it("throws when input is not a number", function () {
        assert.throws(() => squareDigits("23456a"), Error, "23456a is not a number");
    });
});
