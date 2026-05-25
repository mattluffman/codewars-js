const {assert} = require("chai");
const {boolToWord} = require("../../kata/kata");

describe("boolToWord", function () {
    describe("Basic tests", function () {
        it("Testing for basic tests", function () {
            assert.strictEqual(boolToWord(true), "Yes");
            assert.strictEqual(boolToWord(false), "No");
        });
    });

    it("throws when input is not a boolean", function () {
        assert.throws(() => boolToWord(27), Error, "Incorrect type passed");
    });
});
