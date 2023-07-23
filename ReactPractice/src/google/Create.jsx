import React from "react";
import { useState } from "react";
const Create = (props) => {
    const [note, setNote] = useState({
        title: "",
        content: "",
    });
    const InputEvent = (event) => {

        const value = event.target.value;
        const name = event.target.name;
        // you can also write this object distructuring
        // const {name, value} = event.target;
        setNote((prevData) => {
            return {
                ...prevData,
                [name]: value,
            }
        })
    }

    const addEvent = () => {
        props.passNote(note);
        setNote({
            title: "",
            content: "",
        });
    }
    return (
        <>
            <div className="main_note " style={{ display: 'flex', flexDirection: 'column' }}>
                <form style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px' }}>
                    <input type="text" name="title" value={note.title} onChange={InputEvent} placeholder="Title" style={{width:'300px',height:'25px'}} />
                    <textarea rows="" name="content" cols="" value={note.content} onChange={InputEvent} placeholder="write a note" style={{width:'300px',height:'55px'}}></textarea>
                    <div className="div" style={{ display: 'flex',gap:'100px', cursor:'pointer' }}>
                        <button className="btn" type="">➖</button>
                        <button className="btn " onClick={addEvent}>➕</button>
                    </div>
                </form>
            </div>
        </>
    );
};
export default Create;