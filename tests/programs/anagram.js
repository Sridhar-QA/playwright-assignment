/*Example 3: 

Write a function to check if two strings are anagrams.

 Input: isAnagram('listen', 'silent')
 Output: true
 Input: isAnagram('hello', 'world') 
 Output: false
 Explanation: An anagram is when you mix up the letters of a word to make a new one, using all the letters.
 
*/

function isAnagram(word1, word2) {
    const totalAsciiCharacters = 256;
    let count1 = [];
    let count2 = [];
    for(let i = 0; i<totalAsciiCharacters; i++) {
        count1[i] = 0;
        count2[i] = 0;
    }

    for(let i = 0; i<word1.length && i<string2.length; i++) {
        count1[word1[i].charCodeAt(0)]++;
        count2[word2[i].charCodeAt(0)]++;
    }
    
    if(word1.length !== word2.length) {
        return false;
    }

    for(let i = 0; i<totalAsciiCharacters; i++) {
        if(count1[i]!=count2[i]){
            return false;
        }
    }
    return true;
}

let string1 = "listen";
let string2 = "silent";
console.log(isAnagram(string1, string2) ? `${string1} and ${string2} are anagrams` : `${string1} and ${string2} are not anagrams`);