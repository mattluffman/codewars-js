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
export function isIsogram(str: string){
    const splitChars = str.toLowerCase().split("");
    const unique = new Set<string>(splitChars);
    console.log("size => " + unique.size);

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
