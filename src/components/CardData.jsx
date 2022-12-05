import react, { useEffect, useState } from "react";
import { ArrowBackIcon, ArrowNextIcon, CheckDoneIcon } from "./Icons";
import Result from "../services/result";

const inputFocus = document.querySelectorAll("[inputStyled]");

export default function CardData(props){

    const [posit,usePosit] = useState(0);

    useEffect(()=>{
      const inputFocus = document.getElementsByClassName("inputStyled");

      inputFocus[posit*(-1)].addEventListener("keydown",(keyAction)=>{
        if(keyAction.key === 'Tab'){
            keyAction.preventDefault()
        }
      })

      setTimeout(()=>{
        inputFocus[posit*(-1)-1].focus();
      },1000)
    },[posit]);

    function buttonName(cardSize){
      if (cardSize-1 > posit*(-1)) {
          return <>Avançar <ArrowNextIcon/></>
      } else {
          return <><CheckDoneIcon/> Finalizar</>
      }
    }

    async function finalization(cardSize){
        const peso = document.getElementById("peso");
        const estatura = document.getElementById("estatura");
        const idade = document.getElementById("idade");
        const atividade = document.getElementById("atividade");
        const sexo = document.getElementsByName("sexo");
        const objetivo = document.getElementsByName("objetivo");

        Result(peso,estatura, idade, atividade, sexo, objetivo)

        /* console.log("Peso",peso.value);
        console.log("estatura",estatura.value);
        console.log("idade",idade.value);
        console.log("atividade",atividade.value);

        for(let i=0;i<=sexo.length;i++){
            if(sexo[i].checked === true){
                console.log("sexo",sexo[i].value);
            }
        }

        for(let j=0;j<=objetivo.length;j++){
            if(objetivo[j].checked === true){
                console.log("objetivo",objetivo[j].value);
            }
        } */

      }

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
            <button onClick={props.children.length === posit*(-1) ? finalization() : () => usePosit(posit-1)} style={{
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