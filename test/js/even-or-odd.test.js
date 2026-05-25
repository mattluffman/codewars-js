const {assert} = require("chai");
const {evenOrOdd} = require("../../kata/kata");

describe("evenOrOdd", function () {
    describe("Sample tests", function () {
        it("2 is even", function () {
            assert.strictEqual(evenOrOdd(2), "Even");
        });

        it("7 is odd", function () {
            assert.strictEqual(evenOrOdd(7), "Odd");
        });

        it("-42 is even", function () {
            assert.strictEqual(evenOrOdd(-42), "Even");
        });

        it("-7 is odd", function () {
            assert.strictEqual(evenOrOdd(-7), "Odd");
        });

        it("0 is even", function () {
            assert.strictEqual(evenOrOdd(0), "Even");
        });
    });

    describe("additional examples", function () {
        it("1 is odd", function () {
            assert.strictEqual(evenOrOdd(1), "Odd");
        });
    });
});
