import React, { useState } from "react";
/* import { useState } from "react/cjs/react.production.min"; */

export default function FormArea(props){

    return (
        <div className="form-area">
            {props.children}
        </div>
        )
}