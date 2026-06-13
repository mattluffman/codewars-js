import { assert } from "chai";
import { sumArray } from "../../kata/typescript_kata";

describe("KataTest", function () {
    it("BasicTests", function () {
        assert.deepEqual(sumArray([6, 2, 1, 8, 10]), 16);
        assert.deepEqual(sumArray([6, 0, 1, 10, 10]), 17);
    });
});
