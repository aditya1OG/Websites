import React, { useState } from "react";

const MyAccordian = ({question, answer}) => {
   const [show, setShow] = useState(false)
   return(
   <> 
   <div className="main-heading" style={{display:"flex",placeContent:"center",background:"aqua",marginTop:40}}>
   <p onClick={() => setShow(!show)}>{show? "➖":"➕"}</p>
   <h3 style={{marginLeft:15}}>{question}</h3> 
   </div>
   {
      show && <p style={{background:"white",fontSize:25}}>{answer}</p>
   }
   
   </>
   )
}
export default MyAccordian;