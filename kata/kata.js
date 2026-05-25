/**
 * 10/31/19
 * kata: https://www.codewars.com/kata/551dc350bf4e526099000ae5/train/javascript
 * solutions: https://www.codewars.com/kata/551dc350bf4e526099000ae5/solutions/javascript
 * topics: regex, string replace
 *
 * sources
 * https://stackoverflow.com/questions/494035/how-do-you-use-a-variable-in-a-regular-expression
 * https://www.designcise.com/web/tutorial/how-to-replace-all-occurrences-of-a-word-in-a-javascript-string
 */
function songDecoder(song) {
    const DUBSTEP_BULLSHIT = 'WUB';
    let lessShittySong = song.replace(new RegExp(DUBSTEP_BULLSHIT, 'g'), ' ')
        .replace(/  +/g, ' ')
        .trim();

    return lessShittySong;
}

/* tests provided
Test.assertEquals(songDecoder("AWUBBWUBC"), "A B C","WUB should be replaced by 1 space");
Test.assertEquals(songDecoder("AWUBWUBWUBBWUBWUBWUBC"), "A B C","multiples WUB should be replaced by only 1 space");
Test.assertEquals(songDecoder("WUBAWUBBWUBCWUB"), "A B C","heading or trailing spaces should be removed");
*/

console.log(songDecoder("AWUBWUBWUBBWUBWUBWUBC"));

/**
 * 10/31/19
 * kata: https://www.codewars.com/kata/5667e8f4e3f572a8f2000039/train/javascript
 * solutions: https://www.codewars.com/kata/mumbling/solutions/javascript
 * topics: split, map, repeat, lambda, join
 *
 * sources
 * https://codeburst.io/an-introduction-to-regular-expressions-regex-in-javascript-1d3559e7ac9a
 * https://www.w3schools.com/jsref/jsref_split.asp
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/repeat
 * note: map needs to return something
 */
function accum(s) {
    // no matter the case of the input letter, first instane is always capital
    let letters = s.toLowerCase().split(''); //array element for each letter
    let parts = letters.map((part, index) => {
        return part.repeat(index + 1).replace(/^[a-z]/, part.toUpperCase());
    });

    return parts.join('-');
}

/**
 * 11/11/19
 * kata: https://www.codewars.com/kata/525f50e3b73515a6db000b83/train/javascript
 * solutions: https://www.codewars.com/kata/525f50e3b73515a6db000b83/solutions/javascript
 * topics: regex replacement, join
 *
 * sources: https://stackoverflow.com/a/8358214
 * @param numbers
 */
function createPhoneNumber(numbers){
    let joined = numbers.join("");
    return joined.replace(/(\d{3})(\d{3})(\d{4})/, "($1) $2-$3");
}

/**
 * started: 11/25/19
 * finished: 11/26/19
 * kata: https://www.codewars.com/kata/53369039d7ab3ac506000467/train/javascript
 * solutions: https://www.codewars.com/kata/53369039d7ab3ac506000467/solutions/javascript
 * topics: error,
 *
 * sources: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error
 */
function boolToWord(bool){
    if (typeof bool !== "boolean") {
        const message = "Incorrect type passed";
        throw new Error(message);
    }
    return bool ? "Yes" : "No";
}

/**
 * started: 11/26/19
 * finished:
 * kata: https://www.codewars.com/kata/53da3dbb4a5168369a0000fe/train/javascript
 * solutions: https://www.codewars.com/kata/53da3dbb4a5168369a0000fe/solutions/javascript
 * topics: numbers
 *
 * note: can also eliminate teh == 0 becaue non-zero ints evaluate to true
 */
function evenOrOdd(number) {
    return number % 2 === 0 ? "Even" : "Odd";
}

/**
 * started: 12/6/19
 * finished: 1/2/20
 * kata: https://www.codewars.com/kata/546e2562b03326a88e000020/train/javascript
 * solutions: https://www.codewars.com/kata/546e2562b03326a88e000020/solutions/javascript
 * topics: bitwise operators?, parseInt(), toString(10)
 *
 * sources: https://stackoverflow.com/questions/9914216/how-do-i-separate-an-integer-into-separate-digits-in-an-array-in-javascript
 *
 */
function squareDigits(num) {
    //may the code be with you
    if (isNaN(num)) {
        throw new Error(num + " is not a number");
    }

    //split each digit into array
    const digits = num.toString(10).split("").map(x => {
        let parsedNum = parseInt(x);
        return Math.pow(parsedNum, 2);
    });

    //join into string
    const joined = digits.join("");

    return parseInt(joined);
}

/**
 * started: 12/6/19
 * kata: https://www.codewars.com/kata/remove-the-minimum/train/javascript
 * solutions: https://www.codewars.com/kata/563cf89eb4747c5fb100001b/solutions/javascript
 * topics: arrays, numbers, slice, splice
 *
 * sources: https://davidwalsh.name/javascript-clone-array
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
 * https://www.w3schools.com/jsref/jsref_isarray.asp
 * https://love2dev.com/blog/javascript-remove-from-array/
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex
 */
function removeSmallest(numbers) {
    if (!Array.isArray(numbers)) {
        throw Error("parameter must be an array")
    }

    if (numbers.length === 0) {
        return [];
    }

    let clone = numbers.slice(0);
    let min = Math.min(...clone);
    let index = clone.indexOf(min);
    clone.splice(index, 1);
    return clone;
}

/**
 * started 5/23/26
 * kata: https://www.codewars.com/kata/514b92a657cdc65150000006/train/javascript
 * topics: math, algorithms
 * modulus
 * NOTE: I'm not using AI to solve this problem
 *
 * sources:
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Remainder
 */
function multiplesOf3Or5(number) {
    // return 0 if number is negative
    if (number < 0) {
        return 0;
    } else {
        let sum = 0;
        for (let i = number - 1; i > 0; --i) {
            if (i % 3 === 0 || i % 5 === 0) {
                sum += i;
            }
        }
        return sum;
    }
}

module.exports = {
    removeSmallest,
    multiplesOf3Or5,
    squareDigits,
    evenOrOdd,
    boolToWord,
    createPhoneNumber,
    accum,
};