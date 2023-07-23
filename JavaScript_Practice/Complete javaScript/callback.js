//what is callback function ?

//ans-> Any function that is passed as an argument to another
// function is called a callback function.

// why we are using callback funcion ?

//1.javascript is an event driven language. this
// means that instead of waiting for a response
// before moving on, javascript will keep executing
//  while listening for others events.

//2. callback are a way to make sure certain code doesn't
//  execute until other code has already finished execution.

// function myFunction(val, callback){
//     if(val == 1){
//         callback(true);
//     }else{
//         callback(false);
//     }
// }

// myFunction(0, 1)

// //the true or false are passed from callback()
// //is getting here as bool
// // the anonymous function below defines the functionality of the callback
// function (bool){
//     if(bool){
//         alert("do stuff for when value is true");
//     }else {
//         //this condition is satisfied as 0 passed
//         alert("do stuff for when value is false");
//     }
// });

// document.body.addEventListener('click', myFunction);

// 👍👍👍 example :

// const funA = () => {
//     setTimeout(function () {
//         console.log('welcome aadi');
//     }, 2000);

// }
// const funB = () => {
//     console.log('welcome kanha');
// }
// funA();
// funB();

// setTimeout(() => {
//     console.log("hiii")
// }, 2000);

// 👍👍👍 example :

// (() => {
//     console.log("this is the start");

//     setTimeout(() => {
//       console.log("Callback 1: this is a msg from call back");
//     }); // has a default time value of 0

//     console.log("this is just a message");

//     setTimeout(() => {
//       console.log("Callback 2: this is a msg from call back");
//     }, 0);

//     console.log("this is the end");
//   })();

// const data = {
//   name: "aditya",
//   course: "MCA",
//   age: 12,
// };
// let store = data.name;
// delete data.name;
// console.log(data);
// console.log(store);

// let x = 2;
// for (let i = 1; i < 10; i++) {
//     const result = i * x;
//   console.log(result);
// }
