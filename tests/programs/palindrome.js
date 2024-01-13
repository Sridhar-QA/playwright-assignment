/*
If the given string and reverse string is same --> palindrome

Objective: If the given string is palindrome

hints:

1) use the above logic to reverse the string
2) if the reverse string === original string --> true else the false

*/

function isPalindrome(inputString) {
    let revString = "";
    for(let i = inputString.length-1; i>=0; i--) {
        revString+=inputString[i];
    }
    if(inputString.toLowerCase() === revString.toLowerCase()) {
        return true;
    }else{
        return false;
    }
}

let inputString = "Malayalam";
console.log(isPalindrome(inputString) ? `${inputString} is a palindrome`: `${inputString} is not a palindrome`);