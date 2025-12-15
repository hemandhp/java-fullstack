// //Synchronous
// console.log("I am first");
// console.log("I am second");
// console.log("I am third");

// //Asynchronous
// console.log("I am first");
// setTimeout(() => {
//     console.log("I am second");
// }, 2000);
// console.log("I am third");

// //Promise
// const orderPizza = new Promise((resolve, reject) => {
//     let pizzaReady = true;

//     if(pizzaReady) {
//         resolve("Pizza is ready");
//     }else{
//         reject("Sorry,Pizza is not ready");
//     } 
// });

// orderPizza
// .then((message) => 
//     console.log(message)
// )
// .catch((error) => 
//     console.log(error));

// //Async
// async function greet(){
//     return "Hello";
// }
// greet().then(msg => console.log(msg));

//Using async await
function getData(){
    return new Promise((resolve)=>{
        setTimeout(() => {
            resolve("Data fetched successfully");
    },5000);
})
}

async function fetchData(){
    console.log("Fetching data...");
    console.log("Task completed");
    const result = await getData();
    console.log(result);
}
fetchData();
