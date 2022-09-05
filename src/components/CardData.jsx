import react, { useEffect, useState } from "react";
import { ArrowBackIcon, ArrowNextIcon, CheckDoneIcon } from "./Icons";

const inputFocus = document.querySelectorAll("[inputStyled]");

export default function CardData(props){

    const [posit,usePosit] = useState(0);

    useEffect(()=>{
      console.log("O atual valor é",posit)
      
      const inputFocus = document.getElementsByName("inputStyled");
      console.log("TESTE:",inputFocus[posit*(-1)-1])
    },[posit]);
    function buttonName(cardSize){
      if (cardSize-1 > posit*(-1)) {
          console.log(cardSize,posit*(-1))
          return <>Avançar <ArrowNextIcon/></>
      } else {
          console.log(cardSize,posit*(-1))
          return <><CheckDoneIcon/> Finalizar</>
      }
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
            <button onClick={() => usePosit(posit+1)} style={{
                display: posit < -1 ? "inline" : "none",
                position:"absolute",
                bottom:"0px",
                left:"calc(50% - 177px)"
                }}
                >
                   <><ArrowBackIcon/> {"Voltar"}</>
            </button>
            <button onClick={() => usePosit(posit-1)} style={{
                position:"absolute",
                bottom:"0px",
                left: posit >= -1 ? "calc(50% - 91px)" : "50%"
            }}
            >
                {posit === 0 ? "COMEÇAR" : buttonName(props.children.length)}
            </button>
        </div>
    )
}

/* 
    style={{width=(props.children)*100"%"}}
*/