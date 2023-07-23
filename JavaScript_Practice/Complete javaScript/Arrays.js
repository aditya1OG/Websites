// 😃😃 Arrays

let marks = [12, 23, 34, 23, 43, "not-present"];

// console.log(marks);
// console.log(marks.length)
// console.log(marks[7])           //undefined bcz index 7 is not exist
// marks[5] = "present"              //we can change the values
// console.log(marks)               //Arrays are mutable it's can be changed

//😃 for (let i in marks) {
//     console.log(marks[i])
// }

//😃 for (let i = 0; i <= marks.length; i++) {
//     console.log(marks[i])
// }

//😃 let a = marks.join(" and ")
// console.log(a)

//😃 c = marks.pop()
// console.log(marks, c)         //it's returns popped element

//😃 c = marks.push(3)
// console.log(marks, c)            //it's returns the new array length with new push element

//😃Concat using array:

let a = [12, 72, 34, 44, 37, 32, 54, 3, 22, 2];

let b = [41, 94, 39, 33, 29, 54, 45, 66, 4, 5, 23, 24, 25, 26];

// let add = a.concat(b)
// console.log(add)

//😃👍 dlt method: it's dlt the item but the length of the item before dlt and after dlt are same
// here dlt element give empty list and lenght count this empty list with array.

// console.log(a.length)
// dlt a[2]
// console.log(a, a.length)

//😃👍 sort method: its sort the element Alphabatically, not decresing to incresing order

// b.sort()
// console.log(b)

//😃👍 sorting for incresing/Asending order we need a compare function

// function compare(a, b) {
//   return a - b;
// }
// b.sort(compare);
// console.log(b);

//😃👍 sorting for decresing/Desending order

// function compare(a, b) {
//     return b - a
// }
// a.sort(compare)
// console.log(a)

//😃👍 Splice method: index(start, end, elements(what you want to add from start to end))
// it replace those element whose start and end from given index number

// dltitems = a.splice(3, 2, 85,34, 65)
// console.log(a, dltitems)

//😃👍 Slice Method: starting from 3rd index(including 3rd) and from last index(last index - 1 that means 4)
// its delete the given item which index number we are given

// items = a.slice(3, 5)           //for output: print this items value its not given new arrray
// console.log(a, items)

//😃👍 foreach: calls a function once for each array element.

//😃 qus1 print the array:
// a.forEach((element) => {
//     console.log(element);
// })

//using for in:

// for(let i in a){
//     console.log(a[i])
// }

//using for loop:

// for(let i = 0 ; i<a.length;i++){
//     console.log(a[i])
// }

//😃 print the sqare_root of elements:

// a.forEach((ele) => {
//     console.log(ele * ele)
// })

// using for in loop
// for (let i in a) {
//     console.log(a[i] * a[i])
// }

//😃👍 Array from: it's given complete data in array form

// let data = "aditya"
// let arr = Array.from(data)
// console.log(arr)

// 😃for of : it return array values

// for ( let i of a){
//     console.log(i)
// }

// 😃for in : it return array keys/index

// for ( let i in a){
//     console.log(i)
// }

// 😃👍😃👍😃👍😃👍 MAP, FILTER AND REDUCE: THESE ARE HIGHER ORDER ARRAY METHODS 😃👍😃👍😃👍😃👍//

//😃👍 Map Method: creates a new array by perfoming some operation on each array element

// arr = a.map((value, index, array) => {
//     console.log(value, index, array)
//     return ele + 2
// })
// console.log(arr)

// arr = a.map((ele)=> {
//     return ele * 2
// })
// console.log(arr)

//😃👍 Filter method: filter an array with values that passes a test creates a new array.

// let arr2 = a.filter((val) => {
//     return val < 50
// })
// console.log(arr2)

// let arr = a.filter((val) => {
//     return val >= 25
// })
// console.log(arr)

// let arr = a.filter(checkAge)
// function checkAge(val){
//     return val >= 25
// }
// console.log(arr)

//😃👍 Reduce Method: reduce an array to a single value

//😃 using function :

// const arr3 = (h1, h2) => {
//     return h1 + h2
// }
// let newarr3 = a.reduce(arr3)
// console.log(newarr3);


//😃 without function:

// let arr3 = a.reduce((h1, h2) => {
//     return h1 + h2
// })
// console.log(arr3)
