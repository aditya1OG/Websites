// import React from "react";
import {Question}  from "./Api";
import { useState } from "react";
import MyAccordian from "./MyAccordian";
const Accordian = () =>{
    const [data, setData] = useState(Question);

    return(
        <>
        {
            data.map((curElem) => {
                const {id} = curElem;
                return <MyAccordian 
                key={id} {...curElem}/>
            })
        }
        </>
    )
}

export default Accordian;