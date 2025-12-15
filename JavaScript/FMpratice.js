function welcomeMessage() {
    console.log("Welcome to our website!");
}
welcomeMessage();
welcomeMessage();

//question 2
function printDate() {
    let currentDate = new Date();
    console.log("Current Date and Time: " + currentDate);
}
printDate();

//question 3
function greetUser(name) {
    console.log("hello!" + name);
}
greetUser("Akshay");
greetUser("theju");
greetUser("Amegh");
greetUser("Akash");

//question 4
function calculateArea(length, width) {
    let area = length * width;
    console.log("Area of rectangle =" + area);

}
calculateArea(5, 10);


//question 5
function displayMarks(subject, marks) {
    console.log("You scored in " + subject + marks);

}
displayMarks("Maths = ", 95);
displayMarks("Science = ", 90);
displayMarks("Java = ", 87);
displayMarks("web = ", 92);

//Arrow function
const greet = (result) => {
    return "result = " + (result - 2);
}
console.log(greet(20));

//2
const getFullName = (firstName, lastName) => {
    return firstName + " " + lastName;
}
console.log(getFullName("Hemand", "Rajendraprasad"));

//3
const isEven = (num) => {
    if (num % 2 == 0) {
        return true;
    } else {
        return false;
    }

}
console.log(isEven(4));
console.log(isEven(7));