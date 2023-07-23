// var React = require('react');
import React from 'react'
// var ReactDOM = require('react-dom');
import ReactDOM from 'react-dom/client'
import './index.css'




// ReactDOM.render(<h1>Hellow aditya</h1>,
// document.getElementById('root'));



// 👌 using totally JS for printing hellow world.
//no need to import react and react-dom.

// var h1 = document.createElement('h1');
// h1.innerHTML = 'hellow world';
// document.getElementById("root").appendChild(h1);

/////////////////////////|\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

// 🆕if you want to put more than one element inside
//the render than -->

// ReactDOM.render(
//     <div>
//         <h1>hellow i'm aditya tiwari</h1>
//         <p> hellwo i'm kanha tiwari</p>
//     </div>,
//     document.getElementById('root')
// );
//this is how to use more than one element inside the render element.

// ReactDOM.render(
//     [
//         //we are using comma here bcz we are using 
//         //arr/sqare baces instead of div.
//         <h1>hellow i'm aditya tiwari</h1>,
//         <p> hellow i'm kanha tiwari</p>,
//         <h2>hellow how are you</h2>
//     ],
//     document.getElementById('root')
// );

/////////////////////////|\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

// 🌑 we are using div here than its automatically create 
//another div in html page.
//for eleminating that div we are using 
//react.fragement

// ReactDOM.render(
//     <React.Fragment>
//         <h1>hellow i'm aditya tiwari</h1>
//         <p> hellwo i'm kanha tiwari</p>
//     </React.Fragment>,
//     document.getElementById('root')
// );

/////////////////////////|\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

// 👍create a simple page.
// ReactDOM.render(
//     <React.Fragment>
//         <h1>Bet series according to aditya</h1>
//         <p> here is a top list</p>
//         <ol>
//            <li>Dark</li>
//            <li>1899</li>
//            <li>altred carbon</li>
//            <li>GOT</li>
//            <li>Wednesday</li>
//            <li>Money-Heist</li>
//         </ol>
//     </React.Fragment>,
//     document.getElementById('root')
// );


/////////////////////////|\\\\\\\\\\\\\\\\\\\\\\\\\\\\\


// 👍 const fname = "aditya";
// const lname = "tiwari";
// ReactDOM.render(
// <React.Fragment>
//      <h1>my name is {fname +" "+ lname}</h1>,
//      <h1>my name is {`${fname} ${lname}`}</h1>,
//      <p>my total no is {2+2},{2-2},{2*2},{2/2}</p>
//      <p>my total no is {Math.random()}</p>
//   </React.Fragment>,
//   document.getElementById("root"));


/////////////////////////|\\\\\\\\\\\\\\\\\\\\\\\\\\\\\


// 👍print date and current time
// const name = 'aditya' 
// const curdate = new Date().toLocaleDateString();
// const curtime = new Date().toLocaleTimeString();
//    ReactDOM.render(
//     <React.Fragment>
//     <h1>hellow, my name  is {name}</h1>,
//     <p>current date is = {curdate}</p>,
//     <p>current date is = {curtime}</p>
//     </React.Fragment>,
//     document.getElementById('root')); 


/////////////////////////|\\\\\\\\\\\\\\\\\\\\\\\\\\\\\


//👍 in react we are using className instead of class.
//and this is how to add attributes and links in react.
//in this we are using external CSS.

// const name = 'Aditya Tiwari'
// const img = 'https://picsum.photos/225/300';
// const img1 = 'https://picsum.photos/230/300';
// const img2 = 'https://picsum.photos/235/300';
// const link = 'https://www.google.co.in/'
// ReactDOM.render(
// <>
//   <h1 className='heading' contentEditable="true">my name is {name}</h1>
// {/* here img is a self closing tag here and this 
// // contentEditable edit the content in real time*/ }

// <div className='img'>   
// <img src={img} alt='no img'/>,
// <img src={img1} alt='no img'/>,
// <a href={link} target="_kanha">
// {/* you can go to another link after touching that pic
// // this pic act like a link */}
// <img src={img2} alt='no img'/></a> ,
//   </div>
//   </>,
//   document.getElementById('root'));


/////////////////////////|\\\\\\\\\\\\\\\\\\\\\\\\\\\\\


//👍 INLINE CSS --->
// this is how we are using inline CSS

// const obj = {
//   display: 'flex',
//   justifyContent: 'center',
//   fontSize: '25px',
//   fontWeight: 'bold',
//   color: 'black',
//   backgroundColor: 'aquamarine',
//   textAlign: 'center',
//   textTransform: 'capitalize',
//   textShadow: '2px 4px 4px white'
// }
// const name = 'Aditya Tiwari'
// ReactDOM.render(
//   <>
//   <h1 style={obj}>My name is {name}</h1>
//   </>,
//   document.getElementById('root'));


/////////////////////////|\\\\\\\\\\\\\\\\\\\\\\\\\\\\\


// 👍#Showing good mrng, noon, night, even

// let curdate = new Date(2022,12,11)
// let greeting = ""
// curdate = curdate.getHours();
//  const cssStyle = {};
// if(curdate >=1 && curdate < 12){
//   greeting = 'Good Morning'
//   cssStyle.color = 'red'
// }
// else if(curdate >= 12 && curdate < 15){
//   greeting = 'Good Afternoon'
//   cssStyle.color = 'green'
// }
// else if(curdate >= 15 && curdate < 18){
//   greeting = 'Good Evening'
//   cssStyle.color = 'blue'
// }
// else {
//   greeting = 'Good Night'
//   cssStyle.color = 'yellow'
// }
//Also we can put that whole(above) code inside the App.js file.
// if you want to create component like below.
// ReactDOM.render(
//   <>
//   <div>
//  <h1>Hellow Dear, <span style={cssStyle}>{greeting}</span> </h1>
//  </div>
//   </>,
//   document.getElementById('root'));


/////////////////////////|\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

//👍// Components in react JS: ////

// import App from './App';
// ReactDOM.render(
//   <App />,
//   document.getElementById('root'));

/////////////////////////|\\\\\\\\\\\\\\\\\\\\\\\\\\\\\


// 😃this is how we perfome add,mul,sub,div using component.

// import {add,sub,div,mul} from './Cal';
// ReactDOM.render(
//   <>
//   <ul>
//     <li>add of two no is {add(20,10)}</li>
//     <li>sub of two no is {sub(45,10)}</li>
//     <li>div of two no is {div(120,10)}</li>
//     <li>mul of two no is {mul(21,11)}</li>
//   </ul>
//   </>,
//   document.getElementById('root'));


/////////////////////////|\\\\\\\\\\\\\\\\\\\\\\\\\\\\\



//🥇🅰️ PROPS IN REACT : props means property////

// import Card from './Card';

// ReactDOM.render(
//   <>
// <h1 className='heading_style'>Best on Netflix in 2022</h1>
// <Card 
// imgsrc={require('./images/1.jpg')}
// title=" A Netflix Original Series"
// Sname = "Dark"
// link="https://www.netflix.com/title/80100172"
// />
// <Card 
// imgsrc={require('./images/2.jpg')} 
// title=" A Netflix Original Series"
// Sname = "The Stranger Things"
// link="https://www.netflix.com/title/80057281"
// />
// <Card 
// imgsrc={require('./images/3.jpg')} 
// title=" A Netflix Original Series"
// Sname = "Altered Carbon"
// link="https://www.netflix.com/title/80097140"
// />
// <Card 
// imgsrc={require('./images/4.jpg')} 
// title=" A Netflix Original Series"
// Sname = "Wednesday"
// link="https://www.netflix.com/title/81231974"
// />
// <Card 
// imgsrc={require('./images/5.jpg')} 
// title=" A Netflix Original Series"
// Sname = "The Witcher "
// link="https://www.netflix.com/title/80189085"
// />
// <Card 
// imgsrc={require('./images/0.jpg')} 
// title=" A Netflix Original Series"
// Sname = "Black Mirror"
// link="https://www.netflix.com/title/70204888"
// />
// <Card 
// imgsrc={require('./images/7.jpg')}
// title=" A Netflix Original Series"
// Sname = "Money Heist"
// link="https://www.netflix.com/title/80192098"
// />
// </>,
//   document.getElementById('root'));


/////////////////////////|\\\\\\\\\\\\\\\\\\\\\\\\\\\\\



// 🥈 🤚 This is second way of props  ///

// import Card from './Card';
// import Sdata from './Data';

// ReactDOM.render(
//   <>
// <h1 className='heading_style'>Best on Netflix in 2022</h1>
// <Card 
// imgsrc={val.imgsrc}
// title={val.title}
// Sname = {val.Sname}
// link={val.link}
// />
// <Card 
// imgsrc={Sdata[1].imgsrc}
// title={Sdata[1].title}
// Sname = {Sdata[1].Sname}
// link={Sdata[1].link}
// />
// <Card 
// imgsrc={Sdata[2].imgsrc}
// title={Sdata[2].title}
// Sname = {Sdata[2].Sname}
// link={Sdata[2].link}
// />
// <Card 
// imgsrc={Sdata[3].imgsrc}
// title={Sdata[3].title}
// Sname = {Sdata[3].Sname}
// link={Sdata[3].link}
// />
// <Card 
// imgsrc={Sdata[4].imgsrc}
// title={Sdata[4].title}
// Sname = {Sdata[4].Sname}
// link={Sdata[4].link}
// />
// <Card 
// imgsrc={Sdata[5].imgsrc}
// title={Sdata[5].title}
// Sname = {Sdata[5].Sname}
// link={Sdata[5].link}
// />
// <Card 
// imgsrc={Sdata[6].imgsrc}
// title={Sdata[6].title}
// Sname = {Sdata[6].Sname}
// link={Sdata[6].link}
// />
// </>,
//   document.getElementById('root'));


/////////////////////////|\\\\\\\\\\\\\\\\\\\\\\\\\\\\\



// 🥉 👍 Third Method---> Using Map method

// import Card from './Card';

// import Sdata from './Data';

// function ncard(val){
//   return(
//   <Card 
// imgsrc={val.imgsrc}
// title={val.title}
// Sname = {val.Sname}
// link={val.link}
// />
//   )
// }
// ReactDOM.render(
//   <>
// <h1 className='heading_style'>Best on Netflix in 2022</h1>,
// {Sdata.map(ncard)},
// </>,
//   document.getElementById('root'));


/////////////////////////|\\\\\\\\\\\\\\\\\\\\\\\\\\\\\


// 🆕 Fourth way:  Using Flat Arrow function-->

// import Card from './Card';
// import Sdata from './Data';

// ReactDOM.render(
//   <>
// <h1 className='heading_style'>Best on Netflix in 2022</h1>,

// {Sdata.map((val) => {

//   return(
//   <Card 
// key={val.id}
// imgsrc={val.imgsrc}
// title={val.title}
// Sname = {val.Sname}
// link={val.link}
// />
//  );
// })}
// </>,
//   document.getElementById('root'));


/////////////////////////|\\\\\\\\\\\\\\\\\\\\\\\\\\\\\


// 👍 IF ElSE condition ------>

// import App from './App';
// ReactDOM.render(
//   <>
//   <h1>this is header file</h1>
//   <App />
//   </>,
//   document.getElementById('root'));


/////////////////////////|\\\\\\\\\\\\\\\\\\\\\\\\\\\\\


// 👍 Slot Machine game---->
// import App from './App'
// import Slot from './SlotM';
// ReactDOM.render(
//   <>
//   <App />
//   <Slot />
//   </>,
//   document.getElementById('root'));


/////////////////////////|\\\\\\\\\\\\\\\\\\\\\\\\\\\\\


// 🍅 Hooks in React--->

//1. Hooks are the new feature introduced in the React 16.8 version.
//2. It allows you to use state and other React features without
// writing a class, Hooks are the functions which "hook into"
//  React State and lifecycle features from function components.
// 3.It does not work inside classes.
// 4.Hooks should always be used at the top level of the React function.
// 5.Node version 6 or above. NPM version 5.2 or above.
// 6.Hook can only be called inside of the body of a function component.

// import App from './App';
// ReactDOM.render(
//   < App />,
//   document.getElementById('root'));


/////////////////////////|\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

// 👍 Get time using clicking and refreshing the page.

// import App from './App';
// ReactDOM.render(
//   < App />,
//   document.getElementById('root'));

/////////////////////////|\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

// 🥇Digital clock

// import App from './App';
// ReactDOM.render(
//   < App />,
//   document.getElementById('root'));


/////////////////////////|\\\\\\\\\\\\\\\\\\\\\\\\\\\\\


// 👍 Handling Events:

// import App from './App';
// ReactDOM.render(
//   < App />,
//   document.getElementById('root'));


/////////////////////////|\\\\\\\\\\\\\\\\\\\\\\\\\\\\\


// 👍 Forms in React js

// import App from './App'

// ReactDOM.render(
//   <App />,
//   document.getElementById('root'));


/////////////////////////|\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

/////////////////////////|\\\\\\\\\\\\\\\\\\\\\\\\\\\\\


// 👍Login form using React

// import App from './App'

// ReactDOM.render(
//   <App />,
//   document.getElementById('root'));


/////////////////////////|\\\\\\\\\\\\\\\\\\\\\\\\\\\\\


// 👍Login form using Spread Operator

// import App from './App'

// ReactDOM.render(
//   <App />,
//   document.getElementById('root'));



/////////////////////////|\\\\\\\\\\\\\\\\\\\\\\\\\\\\\


// 👍 Spread Operator: using this in array and objects.
// we can create new object and array purt previous(if we already define any)
// in another one using three dots .( like this: ...name)

// import App from './App'
// ReactDOM.render(
//   <App />,
//   document.getElementById('root'));



/////////////////////////|\\\\\\\\\\\\\\\\\\\\\\\\\\\\\



// 👍Project: ToDO list using react 

// import App from './App'
// ReactDOM.render(
//   <App />,
//   document.getElementById('root'));



/////////////////////////|\\\\\\\\\\\\\\\\\\\\\\\\\\\\\



// 👍 increment and decrement using button

// import App from './App'
// ReactDOM.render(
// <App />,
// document.getElementById('root'));




/////////////////////////|\\\\\\\\\\\\\\\\\\\\\\\\\\\\\



// 👍Accordian using react

// import App from './App'
// ReactDOM.render(
//   <App />,
//   document.getElementById('root'));



/////////////////////////|\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

//👍 Google keep using react

// import App from './App'
// ReactDOM.render(
//   <App />,
//   document.getElementById('root'));



/////////////////////////|\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

// 👍context in react hooks

// import App from './App'
// ReactDOM.render(
//   <App />,
// document.getElementById('root'));


/////////////////////////|\\\\\\\\\\\\\\\\\\\\\\\\\\\\\


// 👍 useEffect in react line:673

// import App from './App'
// ReactDOM.render(
//   <App />,
// document.getElementById('root'));


/////////////////////////|\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

//  👍 covid cases live count using react , line: 697

// import App from './App'
// ReactDOM.render(
//   <App />,
// document.getElementById('root'));



/////////////////////////|\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

// 👍props using react

import App from './App'
const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <App />,
);