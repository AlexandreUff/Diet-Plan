import react, { useState } from "react";
import { ArrowBackIcon, ArrowNextIcon } from "./Icons";

export default function CardData(props){

    const [posit,usePosit] = useState(0);

    function moveContent(direction){     

        if(direction === "next"){
            usePosit(posit-1);
        } else if (direction === "back") {
            usePosit(posit+1);
        }

        const inputFocus = document.getElementsByName("inputStyled");

        console.log(inputFocus)
        console.log(posit*(-1))

      }

    console.log(props.children[1].props.children[0]["pr"])
    return (
        <div className='card-ground'>
            <div className='form-content' style={
                {
                    gridTemplateColumns: `repeat(${props.children.length},${(12 / props.children.length).toFixed(2)}fr)`,
                    width:`${props.children.length * 100}%`,
                    left: `${posit}00%`,
                }
                }>
                {props.children}
            </div>
            <button onClick={() => moveContent("back")} style={{
                display: posit >= -1 ? "none" : "inline",
                /* width: "145px", */
                position:"absolute",
                bottom:"0px",
                left:"calc(50% - 177px)"
                }}
                >
                   <><ArrowBackIcon/> {"Voltar"}</>
            </button>
            <button onClick={() => moveContent("next")} style={{
                position:"absolute",
                /* width: "180px", */
                bottom:"0px",
                left: posit >= -1 ? "calc(50% - 91px)" : "50%"
            }}
            >
                {posit === 0 ? "COMEÇAR" : <>Avançar <ArrowNextIcon/></>}
            </button>
        </div>
    )
}

/* 
    style={{width=(props.children)*100"%"}}
*/