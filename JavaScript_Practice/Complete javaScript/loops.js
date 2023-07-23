// 😃😃  for loop--->

// for (let i=0; i<5; i++){
//     console.log(i)
// }

//😃😃 add n sum numbers --->

let sum = 0
let n = prompt(parseInt("Enter the number"))

for (let i = 0; i < n; i++) {
    sum += (i + 1)
}
console.log(sum);


// 😃😃 for in loop----->

const obj = {
    aadi: 12,
    kanha: 13,
    anubhav: 4,
    mohit: 3,
}
for (let a in obj) {
    console.log("Marks of " + a + " are " + obj[a])
}



// 😃😃 for of loop----->

for (let a of "aditya") {
    console.log("value of " + a)
}


// 😃😃 While loop ----->

let a = prompt(parseInt("Enter the value"))

let i = 0
while (i < a) {
    console.log(i)
    i++;
}

// 😃😃Do While loop ----->

let b = prompt(parseInt("Enter the value"))

let j = 0
do {
    console.log(j)
    j++;
}
while (j <= b)