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
