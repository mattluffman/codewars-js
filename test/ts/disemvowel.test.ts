import { assert } from "chai";
import { Kata } from "../../kata/typescript_kata";

describe("disemvowel", function () {
    it("should pass a sample test", function () {
        assert.strictEqual(Kata.disemvowel("This website is for losers LOL!"), "Ths wbst s fr lsrs LL!");
    });
});
