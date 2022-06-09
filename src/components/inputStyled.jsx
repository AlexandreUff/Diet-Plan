import React, { useState } from "react";
/* import { useState } from "react/cjs/react.production.min"; */

export default function InputStyled(props){

    const [val,useVal] = useState("");

    /* function printPrefix(e){
        const userValue = e.slice(e.length-1,props.title.length);
        useVal(userValue+" Kg");
        console.log(val)
    } */

    return (
            <input
                type="text"
                name={`inputStyled-${props.title}`}
                id={`inputStyled-${props.title}`}
                placeholder={props.placeholder}
                value={val}
                onChange={e => useVal(e.target.value)}
            />
        )
}