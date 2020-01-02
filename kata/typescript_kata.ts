/**
 * 12/6/19
 * Kata: https://www.codewars.com/kata/53369039d7ab3ac506000467/train/typescript
 * solutions: https://www.codewars.com/kata/53369039d7ab3ac506000467/solutions/typescript
 */
export const boolToWord = (bool: boolean): string => {
    return bool ? "Yes" : "No";
};

console.log(boolToWord(true));
console.log(boolToWord(false));


/**
 * started: 1/2/20
 * finished: 1/2/20
 * kata: https://www.codewars.com/kata/54ba84be607a92aa900000f1/train/typescript
 * solutions: https://www.codewars.com/kata/54ba84be607a92aa900000f1/solutions/typescript
 * topics: Set
 *
 * sources:
 */
export function isIsogram(str: string) : boolean {
    const splitChars = str.toLowerCase().split("");
    const unique = new Set<string>(splitChars);
    console.log(`size => ${unique.size}`);

    return unique.size == str.length;
}

console.log(isIsogram("Dermatoglyphics")); //true        \
console.log(isIsogram("aba")); //false
console.log(isIsogram("moOse")); //false
console.log(isIsogram("isIsogram")); //false
console.log(isIsogram("")); //true
console.log(isIsogram("isogram")); //true
/*
// See https://www.chaijs.com for how to use Chai.
import { assert } from "chai";
import { isIsogram } from "./solution";
// TODO Add your tests here
describe("example", function() {
  it("test", function() {
    assert.equal( isIsogram("Dermatoglyphics"), true );
    assert.equal( isIsogram("isogram"), true );
    assert.equal( isIsogram("aba"), false, "same chars may not be adjacent" );
    assert.equal( isIsogram("moOse"), false, "same chars may not be same case" );
    assert.equal( isIsogram("isIsogram"), false );
    assert.equal( isIsogram(""), true, "an empty string is a valid isogram" );
  });
});
 */


/**
 * started: 1/2/20
 * kata: https://www.codewars.com/kata/576b93db1129fcf2200001e6/train/typescript
 * solutions: https://www.codewars.com/kata/576b93db1129fcf2200001e6/solutions/typescript
 * topics: min, max, spread syntax, reduce, string template literals
 *
 * sources: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
 * https://codeburst.io/javascript-arrays-finding-the-minimum-maximum-sum-average-values-f02f1b0ce332
 *
 */
export function sumArray(array:number[]) : number {
    //check for empty
    if (array == null || array.length == 0 || array.length == 1) {
        return 0;
    }

    const min = Math.min(...array);
    const max = Math.max(...array);
    console.log(`Min: ${min} Max: ${max}`);

    //get sum including min & max
    const totalSum = array.reduce((accumulator, currentVal) => {
        return accumulator + currentVal
    }, 0); //start with 0
    console.log(`sum: ${totalSum}`);

    //return original sum minus min & max. Then you don't have to worry about duplicates & such
    return totalSum - max - min;
}
console.log(sumArray([ 6, 2, 1, 8, 10 ])); //16
console.log(sumArray([ 6, 0, 1, 10, 10 ])); //17
/*
/// <reference path="/runner/typings/main/ambient/mocha/index.d.ts"/>
/// <reference path="/runner/typings/main/ambient/chai/index.d.ts"/>
import solution = require('./solution');

import {assert} from "chai";

describe("KataTest", function(){
  it("BasicTests", function(){
    assert.deepEqual(solution.sumArray([ 6, 2, 1, 8, 10 ]), 16);
    assert.deepEqual(solution.sumArray([ 6, 0, 1, 10, 10 ]), 17);
  });
});
 */
