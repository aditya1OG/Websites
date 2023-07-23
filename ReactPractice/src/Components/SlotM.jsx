import React from "react";

const Slot = (props) => {
    let x = props.x
    let y = props.y
    let z = props.z


if(x===y && y===z){
    return (
        <>
        <div className="slot_inner">
            <h1>{x} {y} {z}</h1>
            <h3> This is Matching</h3>
            <hr />
        </div>
        </>
    );
}

else{
    return (
        <>
        <div className="slot_inner">
            <h1>{x} {y} {z}</h1>
            <h3> This is not Matching</h3>
            <hr />
        </div>
        </>
    );
}
}

export default Slot;