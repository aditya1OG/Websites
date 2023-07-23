// import { useEffect, useState } from 'react'

// const Effect = () => {
//     const [type, setType] = useState('Posts');
//     const [items, setItems] = useState([]);

//     useEffect(() => {
//         fetch(`https://jsonplaceholder.typicode.com/${type}`)
//             .then(res => res.json())
//             .then(json => setItems(json));
//     }, [type]);

//     return (
//         <>
//             <div style={{
//                 display: "flex",
//                 flexDirection: "column", height: "calc(100vh - 50px)", justifyContent: "center", alignItems: "center"
//             }}>
//                 <button style={{ background: "blue", padding: "0 30px", margin: "5px" }} onClick={() => setType('Posts')}>Posts</button>
//                 <button style={{ background: "red", padding: "0 30px", margin: "5px" }} onClick={() => setType('Users')}>Users</button>
//                 <button style={{ background: "green", padding: "0 10px", margin: "5px" }} onClick={() => setType('Comments')}>Comments</button>
//                 <h1>{type}</h1>
//             </div>

//             {items.map(item => {
//                 return <pre>{JSON.stringify(item)}</pre>
//             })}
//         </>
//     )
// }

// export default Effect

//👍😄 Second tutorial about useEffect:

// import { useState, useEffect } from 'react';

// const Effect = () => {
//     const [windowWidth, setwindowWidth] = useState(window.innerWidth)
//     const handleResize = () => {
//         setwindowWidth(window.innerWidth)
//     }

//     useEffect(() => {
//         window.addEventListener('resize', handleResize)
//         return () => {
//             window.addEventListener('resize', handleResize)
//         }
//     }, []);
//     return (
//         <>
//             <h1>
//                 {windowWidth}
//             </h1>
//         </>
//     )
// };

// export default Effect;

// import { useState, useEffect } from "react";

// const Effect = () => {
//   const [wWidth, setwWidth] = useState(window.innerHeight);
//   const handleWidth = () => {
//     setwWidth(window.innerHeight);
//   };

//   useEffect(() => {
//     window.addEventListener("resize", handleWidth);
//     return () => {
//       window.addEventListener("resize", handleWidth);
//     };
//   });
//   return (
//     <>
//       <h1>{wWidth}</h1>
//     </>
//   );
// };
// export default Effect;

// import { useState, useEffect } from "react";

// const Effect = () => {
//   const [wwidth, setwWidth] = useState(window.innerWidth);
//   const handleClick = () => {
//     setwWidth(window.innerWidth);
//   };
//   useEffect(() => {
//     window.addEventListener("resize", handleClick);
//     return () => {
//       window.addEventListener("resize", handleClick);
//     };
//   }, []);
//   return (
//     <>
//       <h1>{wwidth}</h1>
//     </>
//   );
// };
// export default Effect;

import React, { useState, useEffect } from "react";

const Effect = () => {
  const [wWidth, setwWidth] = useState(Window.innerWidth);

  const handleClick = () => {
    setwWidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", handleClick);
    return () => {
      window.addEventListener("resize", handleClick);
    };
  });

  return <h1>{wWidth}</h1>;
};
export default Effect;
