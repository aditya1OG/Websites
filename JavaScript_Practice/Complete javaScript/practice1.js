// //😄😄😄 Chapter-1 question and answers 😄😄😄

// // 😄😄 qus1:--> Create a variable of type string and try to add a number to it ?
// // Ans --->

// var a = "aadi"
// var b = 12
// var c = a + b;
// console.log(c)

// //😄😄 Qus2---> data type of previous ques
// // Ans--->
// console.log(typeof (c));

// //😄😄 Qus3--->const object in javascript

// const data = {
//     name: "aadi",
//     age: 22,
//     course: "MCA",
//     Specialization: "Front End Developer"
// };
// // //data = "My name is aditya";      //you can not change the data if you create a object
// // console.log(data);

// //😄😄 Qus4---->Add a new key here
// data["friend"] = "anubhav"        //we can add data/key here
// console.log(data);

// //😄😄 qus5----> add five word in dict

// const dict = {
//     appreciate: "recognize the full worth of.",
//     ataraxia: "a state of freedom from emotional disturbance and anxiety",
//     yakka: "work, especially hard work"
// }

// console.log(dict)
// console.log(dict.yakka)
// console.log(dict['ataraxia'])

// //😄😄😄 chapter-2 questions and answers 😄😄😄

// //😄😄 Qus1-------> logical operator
// // ans---->

// let age = palet num = parseInt(prompt("Enter you age"))

// if (age >= 20) {
//     console.log("its a valid")
// }
// else if (age > 10 && age < 20) {
//     console.log("you are lies between 10 and 20")
// }
// else {
//     console.log("you are a kid");
// }

// // 😄😄 switch case :

// let x = palet num = parseInt(prompt("Enter your age"))

// switch (x) {
//     case '12':
//         console.log("your age is 12");
//         break;
//     case '13':
//         console.log("your age is 13");
//         break;
//     case '14':
//         console.log("your age is 14");
//         break;
//     case '15':
//         console.log("your age is 15");
//         break;
//     default:
//         console.log("you are not here, shut the fuck your mouth")
// }

// // 😄😄 Qus-3 WAP to find no. is divisible by 2 and 3

// let num = parseInt(prompt("Enter the number"))

// if (num % 2 == 0 && num % 3 == 0) {
//     console.log("it's divisible by 2 and 3")
// }
// else {
//     console.log("not divisible by 2 and 3")
// }

// // 😄😄 Qus-4 WAP to find no. is divisible by either 2 or 3

// let num1 = palet num = parseInt(prompt("Enter the number"))

// if (num1 % 2 == 0) {
//     console.log("it's divisible by 2 ")
// }
// else if (num1 % 3 == 0) {
//     console.log("it's divisible by 3 ")
// }
// else {
//     console.log("not divisible by either 2 or 3")
// }

// // 😄😄 Ternery Operator-->
// let num2 = 18
// let a = num2 >= 18 ? "valid" : "not valid"
// console.log(a)

// // 😄😄 print the marks using for loops

// const Marks = {
//     aadi: 78,
//     kanha: 45,
//     Mohit: 34,
//     Anubhav: 45
// };
// for (i = 0; i < Object.keys(Marks).length; i++) {
//     console.log("The marks of " + Object.keys(Marks)[i] + " are " + Marks[Object.keys(Marks)[i]])
// }

// // 😄😄 print the marks using for in loops

// const Marks2 = {
//     aadi: 78,
//     kanha: 45,
//     Mohit: 34,
//     Anubhav: 45
// };

// for (let key in Marks2) {
//     console.log("The marks of " + key + " are " + Marks2[i]);
// }

// // 😄😄 print the correct no.

// i = palet num = parseInt(prompt("Enter the no"))
// let cn = 23

// if (i == cn) {
//     console.log("it's a valid number")
// }
// else {
//     console.log("try again")
// }

// // 😄😄 print the correct no. using while

// let i = palet num = parseInt(prompt("Enter the no"))
// let cn1 = 23

// while (i != 23) {
//     console.log("try again")
// }

// // 😄😄 Find Mean of 5 numbers--->

// const a2 = (b, c, d, e, f) => {
//     return ((b + c + d + e, f) / 5)
// }
// a2(1, 2, 3, 4, 5)

// //😄😃 add numbers to the array:

// let a3 = [23, 34, 45, 36]
// let add = palet num = parseInt(prompt("Enter the number"))

// // let newarr = a3.push(99, 23, 2, 3)
// // or
// let newarr = a3.push(add)
// console.log(a3, newarr);

// //😄😃 add numbers here until 0 is added to the array:

// let a3 = [23, 34, 45, 36]
// let add
// do {
//     add = palet num = parseInt(prompt("Enter the number"))
//     a3.push(add)
// }
// while (add != 0)
// console.log(a3)

//😄😃 fiter number whose divisible by 10 from a given array

// let a = [23, 20, 60, 90, 24, 5, 43, 4, 23, 54, 6]

// let add = a.filter((val) => {
//     return val % 10 == 0
// })
// console.log(add)

//😄😃 Create an array of sqare:

// let a = [4, 5, 3, 4, 2, 7, 6]
// let b = a.map((x) => {
//     return (x * x)
// })
// console.log(a, b)

//😄😃 Factorial of given number:

// let a = [1, 2, 3, 4, 5]
// let fact = a.reduce((x1, x2) => {
//     return x1 * x2
// })
// console.log(fact)

//😄👍😄 Guess the number :

// function guessnum() {
//     const random = Math.floor(Math.random() * 10) + 1

//     let num = parseInt(prompt("Guess the number"))

//     while (num != random) {
//         num = parseInt(prompt("Guess the number"))
//     }

//     if (num == random) {
//         console.log("you guessed the correct number")
//     }
// }
// guessnum();

//😄👍 how much time taken by for or while loop for execution.

// console.time("whileLoop")
// let i = 0
// while(i < 5){
//     console.log(233)
//     i++;
// }
// console.timeEnd("whileLoop")

// console.time("forLoop")
// let i = 0
// for (i = 0; i < 5; i++) {
//     console.log(233)
//     i++;
// }
// console.timeEnd("forLoop")

//😄👍using prompt to take input and use alert to output

// let num = parseInt(prompt("Enter the age"))
// let b =confirm("You have a vehical")
// const age = 18
// if(num >= age){
//     alert("Eligible for driving")
// }
// else if(num == -age){
//     console.error("age is not valid")
// }
// else{
//     alert("you are not Eligible now")
// }

//😄 2nd Method: using function

// let num = parseInt(prompt("Enter you age"))

// function checkage(age) {
//     if (age >= 18) {
//         alert("you can drive")
//     }
//     else {
//         console.log("you are not eligible now")
//     }
// }
// checkage();

//😄3rd Method: using flat arrow function

// let runagain = true;
// const checkage = (age) => {
//     return age >= 18 ? true : false
// }
// while (runagain) {
//     let age = parseInt(prompt("Enter you age"))
//     if (age < 0) {
//         console.error("enter the valid age")
//     }
//     if (checkage(age)) {
//         console.log("you are eligible now")
//     }
//     else {
//         alert("you are not eligible now")
//     }
//     runagain = confirm("you are intrested again")
// }

//😄👍 change the background color:

// let color = prompt("enter the color name")
// document.body.style.backgroundColor = color

//😄👍console.log : console.log shows the element DOM tree.
// console.dir : shows the element as an object with its properties.

//👍 Array length Reduce:
// let a = [12, 13, 22, 4, 42, 3, 52, 32];
// a.length = 4;
// console.log(a)

//👍 Duplicate Values:
// let a = [1, 2, 3, 4, 51, 2, 45, 2, 1, 3, 2, 2];
// let b = new Set(a);
// console.log(b);
// console.log(...b);
// console.log([...b]);

// 👍comma Operator:
// let a = 10;
// a = (a++, a++, a); //syntax(increment value, print)  always print the second value
// console.log(a);

// 👍Swap values using Destructuring:
// let a = 10;
// let b = 20;
// [a, b] = [b, a];
// console.log(a, b);

// 👍swap wihout distucturing
// a = 10;
// let b = 20;
// let c;
// c = a;
// a = b;
// b = c;
// console.log(a, b);

// 👍Destructuring:
// let a = [1, 2, 3, 4];
// let [x, y, z] = a;
// console.log(x, y, z);
