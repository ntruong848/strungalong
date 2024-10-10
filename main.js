// Import rule modules (always located at the top of the js file)
import { isPalindrome } from './rules/palindrome.js';
import { minLength } from './rules/minLength.js';
import { containsNumber } from './rules/containsNumber.js';

let level = 1;

document.getElementById('checkButton').addEventListener('click', () => {
    const userInput = document.getElementById('userInput').value;
    const result = checkInput(userInput);
    document.getElementById('result').innerText = result;
});

function checkInput(str) {
    if (level === 1) {
        if (isPalindrome(str)) {
            level++;
            return "Level 1 passed! Your string is a palindrome.";
        } else {
            return "Level 1 failed! Try entering a palindrome.";
        }
    } else if (level === 2) {
        if (isPalindrome(str) && minLength(str, 5)) {
            level++;
            return "Level 2 passed! Your string is a palindrome and has at least 5 characters.";
        } else {
            return "Level 2 failed! Make sure your string is a palindrome and has at least 5 characters.";
        }
    } else if (level === 3) {
        if (isPalindrome(str) && minLength(str, 5) && containsNumber(str)) {
            level++;
            return "Level 3 passed! Your string is a palindrome, has at least 5 characters, and contains a number.";
        } else {
            return "Level 3 failed! Ensure your string is a palindrome, at least 5 characters, and contains a number.";
        }
    }
    return "Congratulations! You've passed all levels!";
}
