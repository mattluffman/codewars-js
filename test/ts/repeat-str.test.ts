import { assert } from "chai";
import { repeatStr } from "../../kata/typescript_kata";

describe("solution", function () {
    it("Tests", function () {
        assert.equal(repeatStr(3, "*"), "***");
        assert.equal(repeatStr(5, "#"), "#####");
        assert.equal(repeatStr(2, "ha "), "ha ha ");
        assert.equal(repeatStr(0, "qwerty"), "");
        assert.equal(repeatStr(0, ""), "");
        assert.equal(repeatStr(5, ""), "");
        assert.equal(repeatStr(6, "I"), "IIIIII");
        assert.equal(repeatStr(5, "Hello"), "HelloHelloHelloHelloHello");
    });
});
