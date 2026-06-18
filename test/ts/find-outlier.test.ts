import { assert } from "chai";
import { findOutlier } from "../../kata/typescript_kata";

describe("findOutlier", function () {
    it("Simple tests", function () {
        assert.equal(findOutlier([0, 1, 2]), 1);
        assert.equal(findOutlier([1, 2, 3]), 2);
        assert.equal(findOutlier([2, 6, 8, 10, 3]), 3);
        assert.equal(findOutlier([0, 0, 3, 0, 0]), 3);
        assert.equal(findOutlier([1, 1, 0, 1, 1]), 0);
    });

    describe("additional examples", function () {
        it("findOutlier([2, 4, 0, 100, 4, 11, 2602, 36]) should return 11", function () {
            assert.equal(findOutlier([2, 4, 0, 100, 4, 11, 2602, 36]), 11);
        });

        it("findOutlier([160, 3, 1719, 19, 11, 13, -21]) should return 160", function () {
            assert.equal(findOutlier([160, 3, 1719, 19, 11, 13, -21]), 160);
        });
    });
});
