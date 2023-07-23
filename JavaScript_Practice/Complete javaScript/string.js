// 😃😃 Strings: strings are immutable inorder to access the
// character at an index we use the following syntax that's means we can not change the value of string

let a = "Aditya";
let b = "Tiwari";

// console.log(a);
// console.log(a.length);          //😃if we have / in string its not counted on length(bcz / is a space sequence character)
// console.log(a.toUpperCase());
// console.log(a.toLowerCase())
// console.log(a.slice(1,4))     //(initial, end)
// console.log(a.slice(4))       //(intitial only. print string from initial to end point)
// console.log(a.slice(0,4))
// console.log(a.slice(2))

// console.log(a.replace("Aditya", "Kanha"))
// console.log(a.concat(b))
// console.log(b.trim())       //removes whitespace

// console.log(a[0])
// console.log(a[1])
// console.log(a[2])
// console.log(a.includes(b));
// console.log(`the word "${b}" ${a.includes(b) ? "is" : "is not"} in the sentence`);
console.log(b.startsWith("T"))