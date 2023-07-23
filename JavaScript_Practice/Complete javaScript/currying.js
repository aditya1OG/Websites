// function add(a) {
//   return function (b) {
//     return a + b;
//   };
// }
// console.log(add(3)(4));

// function curry(a) {
//   return function (b) {
//     return function (c) {
//       return a + b + c;
//     };
//   };
// }
// console.log(curry(2)(4)(3));

function foo(b) {
  const a = 10;
  return a + b + 11;
}

function bar(x) {
  const y = 3;
  return foo(x * y);
}

const baz = bar(7);
console.log(baz);
