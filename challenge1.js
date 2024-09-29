// Define the student's grade
let grade = 70;

// Check the range of the grade and print the corresponding letter grade
if (grade >= 0 && grade <= 39) {
    console.log("E"); // Grade E for scores between 0 and 39
}
if (grade >= 40 && grade <= 49) {
    console.log("D"); // Grade D for scores between 40 and 49
}
if (grade >= 50 && grade <= 59) {
    console.log("C"); // Grade C for scores between 50 and 59
}
if (grade >= 60 && grade <= 79) {
    console.log("B"); // Grade B for scores between 60 and 79
}
if (grade >= 80 && grade <= 100) {
    console.log("A"); // Grade A for scores between 80 and 100
}

// Output the student's grade
console.log(`The student's grade is: ${grade}`); // Print the numeric grade
