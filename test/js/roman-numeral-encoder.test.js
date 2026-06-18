const chai = require('chai');
const assert = chai.assert;
const {romanNumeralEncoder} = require('../../kata/kata');

describe("romanNumeralEncoder", function(){
    it ("should encode small numbers", function(){
        assert.strictEqual(romanNumeralEncoder(1), 'I', '1 should return "I"')
        assert.strictEqual(romanNumeralEncoder(2), 'II', '2 should return "II"')
        assert.strictEqual(romanNumeralEncoder(3), 'III', '3 should return "III"')
        assert.strictEqual(romanNumeralEncoder(4), 'IV', '4 should return "IV"')
        assert.strictEqual(romanNumeralEncoder(5), 'V', '5 should return "V"')
        assert.strictEqual(romanNumeralEncoder(9), 'IX', '9 should return "IX"')
        assert.strictEqual(romanNumeralEncoder(10), 'X', '10 should return "X"')
        assert.strictEqual(romanNumeralEncoder(11), 'XI', '11 should return "XI"')
        assert.strictEqual(romanNumeralEncoder(19), 'XIX', '19 should return "XIX"')
        assert.strictEqual(romanNumeralEncoder(22), 'XXII', '22 should return "XXII"')
        assert.strictEqual(romanNumeralEncoder(15), 'XV', '15 should return "XV"')
    });

    it ("should encode large numbers", function(){
        assert.strictEqual(romanNumeralEncoder(1000), 'M', '1000 should, "M"')
        assert.strictEqual(romanNumeralEncoder(1001), 'MI', '1001 should, "MI"')
        assert.strictEqual(romanNumeralEncoder(1990), 'MCMXC', '1990 should, "MCMXC"')
        assert.strictEqual(romanNumeralEncoder(2007), 'MMVII', '2007 should, "MMVII"')
        assert.strictEqual(romanNumeralEncoder(2008), 'MMVIII', '2008 should, "MMVIII"')
    });
});