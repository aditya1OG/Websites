import React from "react";
const Note = (props) => {
    return(
        <>
        <div className='mote'>
            <h1 className="head">{props.title}</h1>
            <br />
            <p className="paraa">{props.content}</p>
        </div>
        </>
    )
}
export default Note;