/*
int val = 5;
funtion to sum all the values between 1 to val
and return the sum
// activity ---> print between 1, 10 --> keep adding the sum of values
// 1, 2 (3), 3 (6), 4 (10), 5 (15)
// finally, print the sum !! 

*/

function calculateSum(range) {
    let sum = 0;
    for(let i = 1; i <=range; i++) {
        sum+=i;
        console.log(`${i} ${i > 1 ? `(${sum})` : ""}`);
    }
    console.log(`Total sum from 1 to ${range} is ${sum}`)
}

let val = 5;
calculateSum(val)