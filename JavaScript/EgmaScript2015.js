//EgmaScript2015

//var - function scope

function greet() {
    var message = "hello"
    console.log(message);
}
greet();
// console.log(message);

//Redeclaration

var city = "delhi";
var city = "mumbai";
city = "pune";   //Re-assign
console.log(city);

// let - block scoped
{
    let fruit = "mango";
    console.log(fruit);
}
// console.log(fruit);

//Re-Assign : we cannot Re-declare(using 'let') but we can re-assign

let name = "tony";
console.log(name);
name = "stark";
console.log(name);

//const - block scoped

const country = "india";//in const once declared it cannot be re initialised
// country = "usa";
console.log(country);

const person = {
    name: "Hemand",
    age: 21,
}
person.age = 23; //we can modify the content by using object or array
console.log(person);


//Global scope - we can access them from anywhere in the program

var globalVar = "I am global";
function show() {
    console.log(globalVar);
}
show();
console.log(globalVar);// global scope - variable declared outside the function (Applicable to var, let, const)

//default parameters
//normal function

function greet() {//parameters are given here
    console.log("Hello");
}
greet();//arguments are given here

//default parameter
function greets(name1 = "guest") {
    console.log("hello " + name1)
}
greets();

//multiple parameters

function add(a = 5, b = 10, c = 20) {
    console.log(a + b + c);
}
add();

//traditional function
function add1(a, b) {
    return a + b;
}

//arrow function

const add2 = (a, b) => a + b;

//simple function

const sayHello = () => console.log("Good Morning");
sayHello();

//simple function with one parameter

const greeet = name3 => console.log("hi " + name3);
greeet("Hemand");

//with multiple parameter

const multiply = (a, b, c) => a * b * c;
console.log(multiply(2, 3, 4));

//with multiple statements

const area = (l, b) => {
    let result = l * b;
    return result;
}
console.log(area(3, 4));