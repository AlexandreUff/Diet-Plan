import react, { useEffect, useState } from "react";
import { ArrowBackIcon, ArrowNextIcon } from "./Icons";

export default function CardData(props){

    const [posit,usePosit] = useState(0);
    
    const inputFocus = document.getElementsByName("inputStyled");
    
    useEffect(()=>{
        console.log("Posição atual: ",posit*(-1) - 1);

        if(posit >= -1){
           console.log("Elemento: ",inputFocus[posit*(-1)]);
        }
    },[posit]);

    
    function moveContent(direction){     
        
        console.log("Início:",posit)
        
        if(direction === "next"){
            usePosit(posit-1);
            console.log("Avançou");
        } else if (direction === "back") {
            usePosit(posit+1);
            console.log("Voltou");
        }

        const inputFocus = document.getElementsByName("inputStyled");

        console.log(inputFocus)
        console.log("Depois:",posit)

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