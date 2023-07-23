// what is Clousers in Javascript ?

//1.Clousers in action that is inner function can have 
//access the outer function parameters/variables 
//as well as the global variables.

//2.clousers is the combination of a function and the
//lexical enviornment within that function was declared.

//3.In js, clousers are created every-time
// a function is created at function creation time.


//this is the example of lexical scope and clousers both.
// const outerFun = (a) => {
//     let b = 10;
//     const innerFun = () => { //block scope
//         let sum = a + b;
//         console.log(`the sum of two no is ${sum}`);
//     }
//     innerFun();
// }
// outerFun(5);



//this is the example of clousers only.

const outerFunction = (a) => {
    let b = 15;
    const innerFunction = () => {
        let sum = a + b;
        console.log(`the sum of two no is ${sum}`);
    }
    return innerFunction;
}
let inner = outerFunction(5);
    console.dir(inner);

inner();
