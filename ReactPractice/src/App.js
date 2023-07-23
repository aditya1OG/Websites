// 🧟 In app.js we can access all the element those are
// available in inside of reactDom.render method.

import React, { createContext, useContext, useEffect, useState } from "react";

// import AddIcon from '@mui/icons-material/Add';
// import Heading from './Heading';
// import Para from "./Para";
// import List from "./List"

// function App(){
//     return(
//         <>
//         <Heading />
//         <Para />
//         <List />
//         </>
//     );
// }
// export default App;

/////////////////////////|\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

// 🥇 if else condition:

// import { useState } from "react";
//  function App(){
//     const [userAge, setuserAge] = useState(null)
//     return(
//         <div className="App">
//             <header className="App-header">
//                 <form>
//                 <input type="number" name="" value={userAge}
//                 onChange={(e)=>setuserAge(e.target.value)}
//                 placeholder='enter age'
//                 />
//                 </form>
//                 {userAge < 18 ? <p>you are not allowed</p>:<p>you can enter</p>}

//             </header>

//         </div>
//     )
//  }
//  export default App;

/////////////////////////|\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

// 👍slot machine game ----

// import Slot from './SlotM'

// const App = () => {
//     return (
//     <>
//     <h1>welcome to <span style= {{fontWeight:'bolder'}}>slot machine game</span>{" "}</h1>

//     <Slot x = '😄'
//      y = '😄'
//      z = '😄'/>,
//     <Slot x = '👍'
//      y = '😄'
//      z = '👍'/>,
//     <Slot x = '🍎'
//      y = '🍎'
//      z = '🍎'/>,
//     <Slot x = '🍎'
//      y = '😄'
//      z = '🍌'/>,
//    </>
//     )
//   }
//   export default App;

/////////////////////////|\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

// 👍 Hooks in React---->

// useState: its a function which returns an array with two items
// useStae[undefind, f].or [current data, updated data]
// if you put some value in useState that is called initial data

// import { useState } from "react";

// const App = () => {
//     const state = useState();
// const [count, setCount] =useState(0)    //5 is initial value
// const Inc =() => {
//     setCount(count + 1)
// }

//     return (
//         <>
//         <h1>{count}</h1>
//         <button onClick={Inc}>Click Me</button>
//         </>
//     )
// }

// export default App;

/////////////////////////|\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

// 👍 Get time using clicking and refreshing:

// import { useState } from "react";

// const App = () => {
//     let newTime = new Date().toLocaleTimeString();
//     const [ctime, setCtime] = useState(newTime);
//     const UpdateTime = () => {
//         newTime = new Date().toLocaleTimeString();
//         setCtime(newTime);
//     };
//     return (
//     <>
//     <h1>{ctime}</h1>
//     <button onClick={UpdateTime}>TIme</button>
//     </>
//     )
// }
// export default App;

/////////////////////////|\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

// 👍 Digital Clock using React--->

// import { useState } from "react";

// const App = () => {

//         let newTime = new Date().toLocaleDateString();
//         const [ctime, setCtime] = useState(newTime);

//         const UpdateTime = () => {
//                   newTime = new Date().toLocaleTimeString();
//                  setCtime(newTime);
//         }
//          setInterval(UpdateTime, 1000);

// return (
//     <>
//     <h1>{ctime}</h1>
//     </>
// )

// }
// export default App;

/////////////////////////|\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

// 👍Handling Events:

// import { useState } from "react";
//     const App = () => {
//     const purple = "red";
//     const [bg, ubg] = useState(purple);      //Array destructuring
//     const [name, setName] = useState("Click Me")

//     const bgChange = () => {
//         let newBg =  "yellow"
//         ubg(newBg);
//         setName("Ouch!! 🌵");
//     };
//     const bgBack = () => {
//             ubg(purple)
//             setName("Wow  😸")
//         };

//     return(
//         <>
//         <div style={{backgroundColor: bg }}>
//         <button onMouseEnter={bgChange} onMouseLeave={bgBack}>{name}</button>

//         </div>
//         </>
//     )
// }
// export default App;

/////////////////////////|\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

//controlled component:An input form element whose value
// is controlled by react in this way is called a controlled component.

//If you are using value in form so you can not able to
// to write in this input form. for that you want to pass props

// import { useState } from "react";

// const App = () => {
//     const [cval, uval] = useState("")
//     const [pval, puval] = useState("")
//     const [newval, newuval] = useState()
//     const [newpval, newpuval] = useState(" ")
//     const [Eval, Euval] = useState("")
//     const [newEval, newEuval] = useState(" ")

//     const inputEvent = (event) => {
//      uval(event.target.value)
//     }
//     const onSubmit = (event) => {
//     event.preventDefault();
//         newuval(cval)
//         newpuval(pval)
//         newEuval(Eval)
//     }
//     const onPassword = (event) => {
//         puval(event.target.value)
//     }
//     const onEmail = (event) => {
//         Euval(event.target.value)
//     }
//     return (
//         <>
//         <div>
//  <form onSubmit={onSubmit}>
//         <div className="new_div">
//             <h1>Hellow {newval} {newpval} {newEval}</h1>
//             <input type="text"
//              placeholder="Enter you fucking name"
//              onChange={inputEvent}
//              value={cval}
//             />
//             <input type="text"
//              placeholder=" Enter you fucking password"
//              onChange={onPassword}
//              value={pval}
//             />
//             <input type="text"
//              placeholder=" Enter you fucking Email"
//              onChange={onEmail}
//              value={Eval}
//             />
//             <button type="submit">Submit 👍</button>
//         </div>
// </form>
// </div>
//         </>
//     )
// }
// export default App;

///////////////////////////|\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

///////////////////////////|\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

// 👍 handling complex Multiple input Forms in React
// and 👍 React login Form using react:

// import { useState } from "react";
// const App = () => {
//     const [cval, uval] = useState({
//         Name: '',
//         pass: '',
//         Email:'',
//         no: '',
//     })

//     const inputEvent = (event) => {
//         const value = event.target.value;
//         const name = event.target.name;

// //also write like this using event destructuring

// // const {name, value} = event.target

//         uval((preValue) => {

//         console.log(preValue)
//         if(name === 'Name'){
//            return{
//             Name: value,
//             pass: preValue.pass,
//             Email: preValue.Email,
//             no: preValue.no,
//            }
//         }
//            else if(name === 'pass'){
//                 return{
//                  Name: preValue.Name,
//                  pass: value,
//                  Email: preValue.Email,
//                  no: preValue.no,
//                 }
//              }
//            else if(name === 'Email'){
//                 return{
//                  Name: preValue.Name,
//                  pass: preValue.pass,
//                  Email: value,
//                  no: preValue.no,
//                 }
//              }
//            else if(name === 'no'){
//                 return{
//                  Name: preValue.Name,
//                  pass: preValue.pass,
//                  Email: preValue.Email,
//                  no: value,
//                 }
//              }
//         })
//             }
//     const onSubmits = (event) => {
//             event.preventDefault(uval(cval));

//             }
//     return(
//         <>
//         <div>
//           <form onSubmit={onSubmits}>
//        <div className="new_div">
//        <h1>Hellow {cval.Name} {cval.pass}</h1>
//        <p>{cval.Email}</p>
//        <p>{cval.no}</p>
//         <input type="text"
//                      placeholder="Enter you fucking name"
//                      onChange={inputEvent}
//                      name="Name"
//                      value={cval.Name}
//                     />
//                     <input type="text"
//                      placeholder=" Enter you fucking password"
//                      onChange={inputEvent}
//                      name="pass"
//                      value={cval.pass}
//                     />
//                     <input type="email"
//                      placeholder=" Enter you fucking Email"
//                      onChange={inputEvent}
//                      name="Email"
//                      value={cval.Email}
//                     />
//                     <input type="number"
//                      placeholder=" Enter you fucking Number"
//                      onChange={inputEvent}
//                      name="no"
//                      value={cval.no}
//                     />
//                     <button type="submit">Submit 👍</button>
//                 </div>
//         </form>
//         </div>
//                 </>

//     )
// }

// export default App;

/////////////////////////|\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

// 👍 Form using Spread Operator

// import { useState } from "react";
// const App = () => {
//     const [cval, uval] = useState({
//         Name: '',
//         pass: '',
//         Email:'',
//         no: '',
//     })

//     const inputEvent = (event) => {
//         const value = event.target.value;
//         const name = event.target.name;

// //also write like this using event destructuring
// // const { name, value } = event.target;

// // instead of if and else if, we can use spread operator.

//         uval((preValue) => {
//             // console.log(preValue);
//             return {
//                 ...preValue,
//                 [name]: value,

//             };
//         })
//     }
//     const onSubmits = (event) => {
//             event.preventDefault();

//         }
//     return(
//         <>
//         <div>
//        <form onSubmit={onSubmits}>
//        <div className="new_div">
//        <h1>Hellow {cval.Name} {cval.pass}</h1>
//        <p>{cval.Email}</p>
//        <p>{cval.no}</p>
//         <input type="text"
//                      placeholder="Enter you fucking name"
//                      onChange={inputEvent}
//                      name="Name"
//                      value={cval.Name}
//                     />
//                     <input type="text"
//                      placeholder=" Enter you fucking password"
//                      onChange={inputEvent}
//                      name="pass"
//                      value={cval.pass}
//                     />
//                     <input type="email"
//                      placeholder=" Enter you fucking Email"
//                      onChange={inputEvent}
//                      name="Email"
//                      value={cval.Email}
//                     />
//                     <input type="number"
//                      placeholder=" Enter you fucking Number"
//                      onChange={inputEvent}
//                      name="no"
//                      value={cval.no}
//                     />
//                     <button type="submit">Submit 👍</button>
//                 </div>
//         </form>
//         </div>
//                 </>

//     )
// }
// export default App;

/////////////////////////|\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

// 👍 spread Operator:

//  const App = () => {
// const name = {
//     fname:"aditya",
//     lname:"tiwari"
// }

// const biodata = {
//     ...name,
//     id:1,
//     gender:"male",
//     age:22,
// }
// console.log(biodata);
// }
// export default App;

/////////////////////////|\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

// 👍 project: TODo list using react.

// import { useState } from "react";
// import Todo from './Todo';

// const App = () => {
//     const [inputlist, setinputlist] = useState("");
//     const [Item, setItem] = useState([]);

//     const itemEvent = (event) => {
//         setinputlist(event.target.value);
//     };

//       const  listOfItems = () => {
//         setItem((oldItems) => {
//             return [...oldItems, inputlist];
//         });
//         setinputlist(" ");
//     };
//     const deleteItems = (id) => {
//         setItem((oldItems) => {
//             return oldItems.filter((arrElem, index) => {
//                 return index !== id;
//             })
//         })
//     }
//     return (
//     <>
//     <div className="main_div">
//         <div className="center_div">
//             <br />
//             <h1>TODO APP</h1>
//             <br />
//             <input type="text" placeholder="Add a items" onChange={itemEvent} />
//             <button onClick={listOfItems}>Add+</button>

//             <ol>
//                 {/* <li>{inputlist}</li> */}
//                 {Item.map((itemval, index) => {
//                   return  <Todo
//                    key={index}
//                    id= {index}
//                    onSelect={deleteItems}
//                    text={itemval}
//                    />;
//                 })}
//             </ol>
//         </div>

//     </div>
//     </>
//     );
// }

// export default App;

/////////////////////////|\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

// 👍 increment and decrement using button clicked.
// import Button from '@mui/icons-material';

// import { useState } from "react";
// const App = () => {
//     const [num, setNum] = useState(0)
//     const incrNum = () => {
//         setNum(num + 1)
//     }
//     const decrNum = () => {
//         if(num > 0) {
//         setNum(num - 1)
//         }
//         else{
//             setNum(0)
//         }
//     }
//     return(
//    <>
// <div className="main_div">
// <div className="sec_div">
// <h1> {num} </h1>
// <div className="div_btn">
// <button onClick={incrNum}>increament</button>
// <button onClick={decrNum}>decrement</button>

// {/* <Button variant="outlined" onClick={incrNum}></Button>
// <Button variant="outlined" onClick={decrNum}></Button> */}
// </div>
// </div>
// </div>
//      </>
// )}

// export default App;

/////////////////////////|\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

// Accordian (qus and ans) using react

// import Accordian from "./accordian/Accordian";
// // import {Question} from "./accordian/Api";
// const App = () =>{
//     return(
//         <>
//         <Accordian />
//         {/* <Question /> */}
//         </>
//     )
// }
// export default App;

/////////////////////////|\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

// Google Keep clone using react
// import Header from "./google/Header.jsx";
// import Footer from "./google/Footer.jsx";
// import Create from "./google/Create.jsx";
// import Note from "./google/Note.jsx";
// const App = () => {
//     const[additem, setAdditem] = useState([]);

//    const addNote = (note) => {
//         setAdditem((prevData) => {
//             return[...prevData, note];
//         });
//     };
//     return(
//     <>
//     <Header />
//     <Create
//         passNote={addNote}
//     />

//   { additem.map((val,index) => {
//         return <Note
//         key={index}
//         id={index}
//         title={val.title}
//         content={val.content}
//         />
//     })}
//     <Note />
//     <Footer />
//     </>
//     );
// };
// export default App;

/////////////////////////|\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

// 👍context in react

// import DemoB from "./context/DemoB";
// import DemoA from "./context/DemoA";

// const FirstName = createContext();
// const LastName = createContext();
// const App = () => {
//     return(
//    <>
//        {/* Also we can create a new context here */}
//      <FirstName.Provider value={"Aditya"}>
//         <LastName.Provider value={"Tiwari"}>
//             <DemoB />
//             <DemoA />
//         </LastName.Provider>
//      </FirstName.Provider>
//     </>
//     );
// };
// export default App;
// export {FirstName, LastName};

/////////////////////////|\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

// 👍 useEffect in react

// const App = () => {
//     const [num, Setnum] = useState(0);
//     useEffect( () => {
//         alert("i'am checked");
//     }, []);
//     useEffect(() => {
//         document.title=`you click me ${num}`
//     })
//     return(
//         <>
//         <button onClick={() => {
//             Setnum(num+1)
//         }} type="">Click me {num}</button>
//         </>
//     )
// }
// export default App;

/////////////////////////|\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

// 👍 Covid cases live count using react real API

// import Statewise from "./Covid/Statewise.jsx";
// import "./Covid/Statewise.css";

// const App = () => {
//     return(
//     <>
//     <Statewise />
//     </>
//     )
// }
// export default App;

/////////////////////////|\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

// 👍Props in react:

// import Props from "./Props/Props";
// const App = () => {
//    return (
//       <>
//          <Props title="Aditya" home="kanha" />
//       </>
//    )
// }
// export default App;

/////////////////////////|\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

//👍 Hooks :

// import State from "./AlHooksConcept/State";
// import Effect from "./AlHooksConcept/Effect";

// const App = () => {
//   return (
//     <>
//       {/* <State /> */}
//       <Effect />
//     </>
//   )
// }

// export default App

//ListGroup item: ----->

// import LIstGroup from "./component2/LIstGroup";
// const App = () => {
//   const Items = ["Delhi", "Mumbai", "Channai", "Goa", "Kolkata"];
//   const handleSelectItem = (item) => {
//     console.log(item);
//   };
//   return (
//     <>
//       <LIstGroup
//         items={Items}
//         heading="Cities"
//         onSelectedItem={handleSelectItem}
//       />
//     </>
//   );
// };

// export default App;

import State from "./AlHooksConcept/State";
import Ref from "./AlHooksConcept/Ref";
// import Component1 from "./AlHooksConcept/Component1";
import Effect from "./AlHooksConcept/Effect";

const App = () => {
  return (
    <>
      {/* <State /> */}
      {/* <Effect /> */}
      {/* <Component1 /> */}
      <Ref />
    </>
  );
};
export default App;

// 👍👍👍Context2

// import DemoA from "./context2/DemoA";
// const FirstName = createContext();
// const LastName = createContext();
// const App = () => {
//   return (
//     <>
//       <FirstName.Provider value={"Aditya "}>
//         <LastName.Provider value={"Tiwari"}>
//           <DemoA />
//         </LastName.Provider>
//       </FirstName.Provider>
//     </>
//   );
// };
// export default App;
// export { FirstName, LastName };

// 👍👍👍context:
// import DemoA from "./context/DemoA";
// const firstName = createContext();
// const lastName = createContext();
// const App = () => {
//   return (
//     <>
//       <firstName.Provider value={"Aditya"}>
//         <lastName.Provider value={"Tiwari"}>
//           <DemoA />
//         </lastName.Provider>
//       </firstName.Provider>
//     </>
//   );
// };

// export default App;
// export { firstName, lastName };
