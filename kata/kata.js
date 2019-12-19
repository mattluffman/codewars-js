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


/*Test.describe("accum",function() {
    Test.it("Basic tests",function() {
        Test.assertEquals(accum("ZpglnRxqenU"), "Z-Pp-Ggg-Llll-Nnnnn-Rrrrrr-Xxxxxxx-Qqqqqqqq-Eeeeeeeee-Nnnnnnnnnn-Uuuuuuuuuuu");
        Test.assertEquals(accum("NyffsGeyylB"), "N-Yy-Fff-Ffff-Sssss-Gggggg-Eeeeeee-Yyyyyyyy-Yyyyyyyyy-Llllllllll-Bbbbbbbbbbb");
        Test.assertEquals(accum("MjtkuBovqrU"), "M-Jj-Ttt-Kkkk-Uuuuu-Bbbbbb-Ooooooo-Vvvvvvvv-Qqqqqqqqq-Rrrrrrrrrr-Uuuuuuuuuuu");
        Test.assertEquals(accum("EvidjUnokmM"), "E-Vv-Iii-Dddd-Jjjjj-Uuuuuu-Nnnnnnn-Oooooooo-Kkkkkkkkk-Mmmmmmmmmm-Mmmmmmmmmmm");
        Test.assertEquals(accum("HbideVbxncC"), "H-Bb-Iii-Dddd-Eeeee-Vvvvvv-Bbbbbbb-Xxxxxxxx-Nnnnnnnnn-Cccccccccc-Ccccccccccc");
})})*/

console.log(accum("EvidjUnokmM"));

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
    let formatted = joined.replace(/(\d{3})(\d{3})(\d{4})/, "($1) $2-$3");
    return formatted;
}

/*
  describe('Basic tests', () => {
  Test.assertEquals(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]), "(123) 456-7890");
  Test.assertEquals(createPhoneNumber([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]), "(111) 111-1111");
  Test.assertEquals(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]), "(123) 456-7890");
});
*/

console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));
console.log(createPhoneNumber([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]));
console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));


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
        console.log(message);
        throw new Error(message);
    }
    return bool ? "Yes" : "No";
}
console.log(boolToWord(true));
console.log(boolToWord(false));
//console.log(boolToWord(27));
/*
Test.assertEquals(boolToWord(true), 'Yes');
Test.assertEquals(boolToWord(false), 'No');
*/

/**
 * started: 11/26/19
 * finished:
 * kata: https://www.codewars.com/kata/53da3dbb4a5168369a0000fe/train/javascript
 * solutions: https://www.codewars.com/kata/53da3dbb4a5168369a0000fe/solutions/javascript
 * topics: numbers
 *
 * note: can also eliminate teh == 0 becaue non-zero ints evaluate to true
 */
function even_or_odd(number) {
    return number % 2 == 0 ? "Even" : "Odd";
}
console.log(even_or_odd(2));
console.log(even_or_odd(0));
console.log(even_or_odd(7));
console.log(even_or_odd(1));
/*
Test.assertEquals(even_or_odd(2), "Even")
Test.assertEquals(even_or_odd(0), "Even")
Test.assertEquals(even_or_odd(7), "Odd")
Test.assertEquals(even_or_odd(1), "Odd")
*/

/**
 * started: 12/6/19
 * kata: https://www.codewars.com/kata/546e2562b03326a88e000020/train/javascript
 * solutions:
 * topics:
 *
 * sources:
 */

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
console.log(removeSmallest([1,2,3,4,5])); // = [2,3,4,5]
console.log(removeSmallest([5,3,2,1,4])); // = [5,3,2,4]
console.log(removeSmallest([2,2,1,2,1]));// = [2,2,2,1]
/*
Test.describe("removeSmallest", function() {
  Test.it("works for the examples", function() {
    Test.assertSimilar(removeSmallest([1, 2, 3, 4, 5]), [2, 3, 4, 5], "Wrong result for [1, 2, 3, 4, 5]");
    Test.assertSimilar(removeSmallest([5, 3, 2, 1, 4]), [5, 3, 2, 4], "Wrong result for [5, 3, 2, 1, 4]");
    Test.assertSimilar(removeSmallest([2, 2, 1, 2, 1]), [2, 2, 2, 1], "Wrong result for [2, 2, 1, 2, 1]");
    Test.assertSimilar(removeSmallest([]), [], "Wrong result for []");
  });

  Test.it("returns [] if the list has only one element", function() {
    for (let i = 0; i < 10; ++i) {
      let x = ~~(Math.random() * 400);
      Test.assertSimilar(removeSmallest([x]), [], `Wrong result for ${[x]}`);
    }
  });

  function randomArray(length) {
    return Array.from({length: length}, () => ~~(Math.random() * 400));
  }

  Test.it("returns a list that misses only one element", function() {
    for(let i = 0; i < 10; ++i) {
      let arr = randomArray(~~(Math.random() * 10) + 1);
      let l = arr.length;
      Test.assertSimilar(removeSmallest(arr).length, l - 1, `Wrong result for ${arr}`);
    }
  });
});
 */
