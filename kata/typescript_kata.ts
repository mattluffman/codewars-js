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
 * topics: Set, split
 *
 * sources:
 */
export function isIsogram(str: string): boolean {
    const splitChars: string[] = str.toLowerCase().split("");
    const unique: Set<string> = new Set<string>(splitChars);
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
});  */


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
export function sumArray(array: number[]): number {
    //check for empty
    if (array == null || array.length <= 1) {
        return 0;
    }

    const min: number = Math.min(...array);
    const max: number = Math.max(...array);
    console.log(`Min: ${min} Max: ${max}`);

    //get sum including min & max
    const totalSum: number = array.reduce((accumulator, currentVal) => {
        return accumulator + currentVal
    }, 0); //start with 0
    console.log(`sum: ${totalSum}`);

    //return original sum minus min & max. Then you don't have to worry about duplicates & such
    return totalSum - max - min;
}

console.log(sumArray([6, 2, 1, 8, 10])); //16
console.log(sumArray([6, 0, 1, 10, 10])); //17
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
});  */

/**
 * started: 1/2/20
 * kata: https://www.codewars.com/kata/57a0e5c372292dd76d000d7e/train/typescript
 * solutions: https://www.codewars.com/kata/57a0e5c372292dd76d000d7e/solutions/typescript
 * topics: recursion, repeat (which doesn't work in this js version)
 *
 * sources: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/repeat
 */
export function repeatStr(n: number, s: string): string {
    if (n < 1) {
        return '';
    } else if (n == 1) {
        return s;
    } else {
        return s + repeatStr(n - 1, s);
    }
}
console.log(repeatStr(6, "I")); // "IIIIII"
console.log(repeatStr(5, "Hello")); // "HelloHelloHelloHelloHello"
/*
/// <reference path="/runner/typings/mocha/index.d.ts" />
/// <reference path="/runner/typings/chai/index.d.ts" />
import solution = require('./solution');
import {assert} from "chai";
describe("solution", function(){
  it("Tests", function(){
    assert.equal(solution.repeatStr(3, "*"), "***");
  });
});  */

/**
 * started: 1/2/20
 * kata: <a href="https://www.codewars.com/kata/5467e4d82edf8bbf40000155/train/typescript">https://www.codewars.com/kata/5467e4d82edf8bbf40000155/train/typescript</a>
 * solutions: https://www.codewars.com/kata/5467e4d82edf8bbf40000155/solutions/typescript, https://www.codewars.com/kata/reviews/59b7958262a4af5d6c001c13/groups/5de49fd27368900001ecbd72
 * topics: chaining, functional, split, map, sort, reverse, join
 *
 * sources: <a href="https://www.codewars.com/kata/reviews/5485f83ed8325edc730001c0/groups/57e57ff82827a683fa0022de">kata solutions for squareDigits()</a>
 */
export function descendingOrder(n: number): number {
    const result = n.toString(10)
        .split("")
        .map(elem => {
            return parseInt(elem);
        })
        .sort()
        .reverse()
        .join("");

    return parseInt(result);
}
console.log(descendingOrder(21445)); // Output: 54421
console.log(descendingOrder(145263)); // Output: 654321
console.log(descendingOrder(123456789)); // Output: 987654321


/**
 * started: 1/2/20
 * kata: https://www.codewars.com/kata/5526fc09a1bbd946250002dc/train/typescript
 * solutions: https://www.codewars.com/kata/5526fc09a1bbd946250002dc/solutions/typescript
 * topics: array initialization
 *
 * sources:
 */
export function findOutlier(integers: number[]): number {
    if (integers.length <= 2) {
        throw new Error("must have at least 3 elements")
    }

    const odd: number[] = [],
        even: number[] = [];

    integers.forEach((item: number) => {
        if (item % 2 == 0) {
            even.push(item);
        } else {
            odd.push(item);
        }
    });

    //test outliers
    if (even.length > 1 && odd.length > 1) {
        throw new Error("more than one outlier was provided");
    }

    if (odd.length == 1) {
        return odd[0];
    } else {
        return even[0]
    }
}
console.log(findOutlier([2, 4, 0, 100, 4, 11, 2602, 36])); //Should return: 11 (the only odd number)
console.log(findOutlier([160, 3, 1719, 19, 11, 13, -21])); //Should return: 160 (the only even number))

/**
 * started: 2/18/20
 * finished: 5/28/20
 * kata: https://www.codewars.com/kata/52fba66badcd10859f00097e/train/typescript
 * solutions: https://www.codewars.com/kata/52fba66badcd10859f00097e/solutions/typescript
 * topics: regex, replace
 *
 * sources: https://medium.com/@cristina_9416/beginning-to-use-regex-in-javascript-4fa0d391b5c1
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace
 *
 * solution to review: https://www.codewars.com/kata/reviews/59cf82b2c5c19968610002bf/groups/5ea6e6fb9de752000108c686
 * https://www.codewars.com/kata/reviews/59cf82b2c5c19968610002bf/groups/5eb674de0f61730001f08750
 */
export class Kata {
    static readonly vowelsRegex: RegExp = /[aeiou]/gi; // global, ignore case

    static disemvowel(str: string) {
        return str.replace(this.vowelsRegex, '');
    }
}
console.log(Kata.disemvowel("This website is for losers LOL!"));
/*
/// <reference path="/runner/typings/mocha/index.d.ts" />
/// <reference path="/runner/typings/chai/index.d.ts" />
import solution = require('./solution');
import {assert} from "chai";

describe("disemvowel", function() {
  it("should pass a sample test", function() {
    assert.strictEqual(solution.Kata.disemvowel("This website is for losers LOL!"), "Ths wbst s fr lsrs LL!");
  });
});
 */
