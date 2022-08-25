import react, { useEffect, useState } from "react";
import { ArrowBackIcon, ArrowNextIcon } from "./Icons";

const inputFocus = document.querySelectorAll("[inputStyled]");

export default function CardData(props){

    const [posit,usePosit] = useState(0);
    
    
    useEffect(()=>{
        /* console.log("Posição atual: ",posit*(-1) - 1);
        console.log("[Elementos:] ",inputFocus); */

        if(posit >= -1){
           console.log("Elemento: ",inputFocus[posit*(-1)]);
        }
    },[posit]);

    
    function moveContent(direction){     
        
        /* console.log("Início:",posit) */
        
        if(direction === "next"){
            usePosit(posit - 1);
            /* usePosit((prevPosit) => prevPosit-1); */
            console.log("Avançou");
            console.log(posit);
        } else if (direction === "back") {
            usePosit(posit+1);
            /* usePosit((prevPosit) => prevPosit + 1); */
            console.log("Voltou");
            console.log(posit);
        }

        const inputFocus = document.getElementsByName("inputStyled");

        /* console.log("Depois:",posit) */
        
        setTimeout(()=>{
            console.log("TESTE:",inputFocus[posit*(-1)])
        },600)

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
                display: posit < -1 ? "inline" : "none",
                position:"absolute",
                bottom:"0px",
                left:"calc(50% - 177px)"
                }}
                >
                   <><ArrowBackIcon/> {"Voltar"}</>
            </button>
            <button onClick={() => moveContent("next")} style={{
                position:"absolute",
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