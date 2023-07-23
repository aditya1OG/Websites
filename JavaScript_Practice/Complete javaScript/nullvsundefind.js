// comparing undefined and null
undefined == null;

//true

undefined === null;

//false
// As you can see, when the equality operator is used it compares only the values. Both undefined and null are falsy by default. So == returns true.

// But when we use the strict equality operator (===) which checks both type and value, 
// since undefined and null are of different types (from the typeof Operator section), the strict equality operator returns false.

// Why is Null an object?

// As promised, now let’s look as to why the type of null is an “object”. As it then indicates that null must be an object, which is not true. 
// In fact, null is one of the primitive values in JavaScript.

// It is actually a bug in the language and unfortunately can’t be fixed that easily, as it will break the existing codebase

//demonstrating that both undefined and null are falsy



var t, a = null;

if (t) {

    console.log('t is defined');

} else if (a) {

    console.log('a is defined');

} else {

    console.log('both t and a are not defined with a value');

}
// output :both t and a are not defined with a value.
