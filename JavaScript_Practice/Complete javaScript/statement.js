// if else statement ---->
/*let a = prompt(parseInt("Enter your age"));
//if statement runs if condition is true
a = 18
if(a > 18){
    console.log("this is a valid age");
}
//else statement runs if condition is flase
else{
    console.log("it's not a valid age")
}*/




// else if statement --->

let a1 = prompt(parseInt("Enter your age"));
if(a1 >= 18){
    console.log("this is a valid age");
}
else if(a1 > 10 && a1 < 18){
    console.log("you are a kid buddy");
}
else{
    console.log("it's not a valid age");
}