const {assert} = require("chai");
const {songDecoder} = require("../../kata/kata");

describe("songDecoder", function () {
    it("It should pass fixed tests", function () {
        assert.strictEqual(songDecoder("AWUBBWUBC"), "A B C", "WUB should be replaced by 1 space");
        assert.strictEqual(songDecoder("AWUBWUBWUBBWUBWUBWUBC"), "A B C", "multiples WUB should be replaced by only 1 space");
        assert.strictEqual(songDecoder("WUBAWUBBWUBCWUB"), "A B C", "heading or trailing spaces should be removed");
    });
});
