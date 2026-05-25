const {assert} = require("chai");
const {multiplesOf3Or5} = require("../../kata/kata");

function testMultiplesOf3Or5(n, expected) {
    it(`n=${n}`, () => {
        let actual = multiplesOf3Or5(n)
        assert.strictEqual(actual, expected)
    })
}

describe("basic tests", function () {
    testMultiplesOf3Or5(10, 23)
    testMultiplesOf3Or5(55, 698)
})
