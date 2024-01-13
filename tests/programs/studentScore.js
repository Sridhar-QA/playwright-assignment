/*
1. Create a function named `calculateGrade` that takes a student's score as a parameter.

2. Use `switch` statement inside the function - 
   - Use a `switch` statement with the condition `true`.
   - Use `case` statements to check different score ranges and return the corresponding grade.

3. Declare and initialize the variable

4. Call the function and print the result


*/

function calculateGrade(score) {
    switch(true) {
        case (score>=90 && score<=100):
            return "A grade";
        case (score>=80 && score<=89):
            return "B grade";
        case (score>=70 && score<=79):
            return "C grade";
        case (score>=60 && score<=69):
            return "D grade";
        case (score>=0 && score<=59):
            return "E grade";
        default:
            return "INVALID SCORE";
    }
}

let score = 70;
console.log(calculateGrade(score));