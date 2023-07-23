// import React, { useState, useRef, useEffect } from "react";

// const Ref = () => {
//   const [count, setCount] = useState("");
//   const counting = useRef(0);
//   useEffect(() => {
//     counting.current = counting.current + 1;
//   });
//   return (
//     <>
//       <input
//         type="text"
//         value={count}
//         onChange={(e) => setCount(e.target.value)}
//       />
//       <h1>Render count: {counting.current}</h1>
//     </>
//   );
// };

// export default Ref;

// Second Example

// import React, { useState, useRef, useEffect } from "react";

// const Ref = () => {
//   const [count, setCount] = useState(0);
//   const counting = useRef(0);

//   useEffect(() => {
//     counting.current = counting.current + 1;
//   });
//   const Decrement = () => {
//     if (count > 0) {
//       setCount((count) => count - 1);
//     }
//   };

//   const Increment = () => {
//     setCount((count) => count + 1);
//   };
//   return (
//     <>
//       <button onClick={Decrement}>Decrement</button>
//       <span>{count}</span>
//       <button onClick={Increment}>Increment</button>
//       <h1>render: {counting.current}</h1>
//     </>
//   );
// };
// export default Ref;

// import { useState, useRef, useEffect } from "react";

// const Ref = () => {
//   const [count, setCount] = useState(0);
//   const counting = useRef(0);
//   useEffect(() => {
//     counting.current = counting.current + 1;
//   });
//   const decrement = () => {
//     if (count > 0) {
//       setCount((count) => count - 1);
//     }
//   };
//   const increment = () => {
//     setCount((count) => count + 1);
//   };
//   return (
//     <>
//       <h1>use Ref</h1>
//       <button onClick={decrement}>decrement</button>
//       <span style={{ fontSize: 28 }}>{count}</span>
//       <button onClick={increment}>Increment</button>
//       <h1>count UseRef: {counting.current}</h1>
//     </>
//   );
// };
// export default Ref;


import React, { useRef, useState, useEffect } from 'react'

const Ref = () => {
  const [count, setCount] = useState(0)
  const counting = useRef(0)
  useEffect(() => {
    counting.current = counting.current + 1
  });
  const increment = () => {
    setCount((count) => count + 1)
  }
  const decrement = () => {
    setCount((count) => count - 1)

  }
  return (
    <>
      <button onClick={decrement}>decrement</button>
      <span>{count}</span>
      <button onClick={increment}>increment</button>
      <h1>count useRef: {counting.current}</h1>
    </>
  )
}

export default Ref