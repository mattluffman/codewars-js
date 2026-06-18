import { assert } from "chai";
import { boolToWord } from "../../kata/typescript_kata";

describe("boolToWord", function () {
    it("Sample tests", function () {
        assert.equal(boolToWord(true), "Yes");
        assert.equal(boolToWord(false), "No");
    });
});
