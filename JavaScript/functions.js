// //functions
// function greet(){
//     console.log("Hello World");
// }
// greet();

// //function with parameters
// function greetByName(name){
//     console.log("Hello " + name);
// }
// greetByName("Hemand");

// //Method
// let student = {
//     name: "Hemand",
//     greet: function(){
//         console.log("Hello my name is "+ this.name);
// }
// }
// student.greet();


//Arrow function
// const greet = (name)=>{
//     return "Hello world " + name;
// }

// const greet = (name)=>{
//     return "Hello " + name;
// }
// console.log(greet("Hemand"));




// //DOM
// let a = document.getElementById("head1");
// console.log(a);
// a.innerHTML ="Learning JavaScript"; //changes the content of the element with id "head1"
// a.style.color = "red";
// a.style.fontFamily = "Arial";
// a.style.textAlign = "center";


const btn = btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const resetbtn = document.getElementById("resetbtn");
const countLabel = document.getElementById("countLabel");
let count = 0;
btn1.onclick = function(){
    count--;
    countLabel.textContent = count;
}
btn2.onclick = function(){
    count++;
    countLabel.textContent = count;
}
resetbtn.onclick = function(){
    count = 0;
    countLabel.textContent = count;
}