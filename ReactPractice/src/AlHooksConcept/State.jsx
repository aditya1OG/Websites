import { useState, useEffect } from "react";

// const State = () => {
//     const [count, setCount] = useState(0)
//     const [theme, setTheme] = useState()     //also we can pass here initial state

//     const decrement = () => {
//         if (count >= 1) {
//             // setCount(count - 1)
//             setCount(prevCount => prevCount - 1)
//             setTheme("blue")
//         }
//     }

//     const increment = () => {
//         setCount(prevCount => prevCount + 1)
//         // if we want to update our theme so we can :t
//         setTheme("red")
//     }

//     return (
//         <>
//             <button onClick={decrement} type="" style={{ background: "blue", padding: '0 10px', margin: "0", }}>-</button>
//             <span style={{ background: "red", padding: '4px 10px', margin: '0' }}>{count}</span>
//             <span style={{ background: "black", color: "white", padding: '4px 10px', margin: '0' }}>{theme}</span>
//             <button onClick={increment} type="" style={{ background: "blue", padding: '0 10px', margin: "0", }}>+</button>
//         </>
//     )
// }

// export default State

const State = () => {
  const [count, setCount] = useState(0);
  const Decrement = () => {
    if (count > 0) {
      setCount((count) => count - 1);
      console.log(count);
    }
  };
  const Increment = () => {
    setCount((count) => count + 1);
    console.log(count);
  };
  return (
    <>
      <button onClick={Decrement}>Decrement</button>
      <span style={{ fontSize: 20 }}>{count}</span>
      <button onClick={Increment}>Increment</button>
    </>
  );
};
export default State;
