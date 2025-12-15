// // loop
// for(let i=1; i<=5; i++){
//     console.log("number" + i);
// }
// // while loop
// let count = 1;
// while(count <= 5){
//     console.log("count is" + count)
//     count++;
// };

// // do while loop
// let num = 1;
// do{
//     console.log("num is" + num);
//     num++;
// }while(num<=3);

// // false
// let num =5;
// do{
//     console.log("num is" + num);
//     num++;
// }while(num<=3);


// //String
// let message = "Hello World";
// console.log(message);
// console.log("Length:"+message.length);
// console.log("First character:" + message['6']);


// //common string methods
// let msg = "Hemand   ";
// console.log(msg.toUpperCase());
// console.log(msg.toLowerCase());
// console.log(msg.includes("is"));
// console.log(msg.trim());
// console.log(msg.slice(0,4));
// console.log(msg.charAt(5));

// let firstName = "Hemand";
// let lastName = " p p";
// let fullName = firstName + "" + lastName;
// console.log(fullName);

// //iterals
// let name = "Hemand";
// let course = "Mearn Stack";
// console.log(`Hello, My name is ${name} and i am learning ${course}`);

// let poem = `Roses are red,
// Violets are blue. 
// Sugar is sweet,
// and so are you.`;
// console.log(poem);

// //arrays
// let fruits = ["Apple", "Banana", "Mango"];
// console.log(fruits);
// console.log(fruits[1]);
// console.log(fruits.length);

// //example 1
// let Number = [1,2,3];
// Number.push(4);
// console.log(Number); //add element at the end

// Number.pop();
// console.log(Number); //remove element at the end

// Number.shift(0);
// console.log(Number); //remove element at the beginning

// Number.unshift(1);
// console.log(Number); //add element at the beginning

// //example 2
// let double = Number.map(n =>n*2); //multiply each element by 2
// console.log(double);

// let found = Number.find(n=> n>1); //find first element greater than 1
// console.log(found);


// let fruits = ["Apple", "Banana", "Mango"];
// console.log(fruits);
// let newfruits = fruits.slice(1,3); //extract elements from index 1 to 2
// console.log(newfruits);

// let fruits = ["Apple", "Banana", "Mango"];
// console.log(fruits);
// fruits.splice(1,1,"Orange","Pineapple"); //remove 1 element at index 1 and add "Orange" and "Pineapple"
// console.log(fruits);


// five q&a
//question 1
let colors = ["Red", "Green", "Blue"];
colors.push("yellow");
console.log(colors);
colors.pop();
console.log(colors);
colors.unshift("black");
console.log(colors);
colors.shift();
console.log(colors);
//question 2
let Number = [2,3,4,5,6];
let array = Number.map(n =>n*4);
console.log(array);
let found = Number.find(n => n>5);
console.log(found);
//question 3
let ary1 = [10,20];
let ary2 = [30,40];
let combined = ary1.concat(ary2);
console.log(combined);
let slice = combined.slice(0,2);
console.log(slice);
//question 4
let fruits = ["Apple", "Mango" ,"Orange"];
fruits.splice(1,1,"Grapes");
console.log(fruits);
fruits.reverse();
console.log(fruits);
fruits.sort();
console.log(fruits);
//question 5
let program = ["HTML", "CSS", "JavaScript"];
let join = program.join(" - ");
console.log(join);
program.push("React");
console.log(program);