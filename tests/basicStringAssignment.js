/*
Given a string s consisting of words and spaces, return the length of the last word in the string.
 
Example 1:
 
Input: s = "Hello World"
Output: 5
Explanation: The last word is "World" with length 5.
*/
let input1 = "Hello World";
let words1 = input1.split(" ");
console.log(`Length of the last word in "${input1}"`, words1[words1.length-1].length);
 
/*Example 2:
 
Input: s = "   fly me   to   the moon  "
Output: 4
Explanation: The last word is "moon" with length 4.
*/

let input2 = "   fly me   to   the moon  ";
let words2 = input2.trim().split(" ");
console.log(`Length of the last word in "${input2}"`, words2[words2.length-1].length);



