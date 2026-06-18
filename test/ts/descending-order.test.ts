import { assert } from "chai";
import { descendingOrder } from "../../kata/typescript_kata";

describe("descendingOrder", function () {
    it("should return some sample numbers in descending order", function () {
        assert.strictEqual(descendingOrder(0), 0);
        assert.strictEqual(descendingOrder(1), 1);
        assert.strictEqual(descendingOrder(123456789), 987654321);
    });

    describe("additional examples", function () {
        it("descendingOrder(21445) should equal 54421", function () {
            assert.strictEqual(descendingOrder(21445), 54421);
        });

        it("descendingOrder(145263) should equal 654321", function () {
            assert.strictEqual(descendingOrder(145263), 654321);
        });
    });
});
