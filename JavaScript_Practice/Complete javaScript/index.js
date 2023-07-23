// let t = document.body.firstElementChild.firstElementChild
// console.log(t)

// let change = document.querySelectorAll(".hlw-guz")
// change[0].style.color = "red"
// change[1].style.color = "black"
// change[2].style.color = "green"
// change[3].style.color = "yellow"
// change[4].style.color = "blue"


// let a = document.querySelectorAll('.hlw-guz')
// a.forEach((ele) => {
//     ele.style.backgroundColor = "black"
//     ele.style.color = "white"
// })


// (document.querySelectorAll('.hlw-guz').forEach((ele) => {
//     ele.style.backgroundColor = "black"
//     ele.style.color = "white"
// }))


// there are some properties 👍: using TageName

// let a = document.getElementsByTagName('div')[0]

// let div = document.createElement('div');
// div.innerHTML = `<h1>hellow world</h1>`;

//👍 a.append(div);
//👍 a.prepend(div);
//👍 a.before(div);
//👍 a.after(div)
//👍 a.replaceWith(div)
//👍 a.remove(div)


// using ID instead of Tagename :

// let a  = document.getElementById('first')
// let div =  document.createElement('div')
// div.innerHTML = '<h1>This is heading tag</h1>'

// a.append(div);
// a.after(div);
// a.before(div);
// a.prepend(div);
// a.remove(div);
// a.replaceWith(div);




//👍😄 clsList and clsName : using ClassList you can add (if you want) or remove (if there exists this class) the class name

// let a = document.getElementById('first')
// a.classList.remove('dark')
// a.classList.add('dark')
// a.classList.contains('dark')
// a.classList.toggle('dark')
