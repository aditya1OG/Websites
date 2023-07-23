// 👍😄 Browser Events : an event is a signal that something has happend.
// all the DOM nodes generate such signals.

// some DOM events are : 
//👍Mouse Events : click, mouseOver, mouseOut, mouseDown, mouseUp, mouseMove

//👍Keyboard Events : keyDown and keyUp

//👍Element Events :  submit, foucs etc

//👍Document events : DomcontroalLoaded



// addEventListener and removeEventListener 👍:

let x = function (e) {
    alert("i'm first")
}

let y = function (e) {
    alert("i'm second")
}
// const btn = document.querySelector(".btn")

btn.addEventListener('click', x)
btn.addEventListener('click', y)

let a = prompt("what is your favourite number?");

if (a == "2") {
    btn.removeEventListener('click', x)
}