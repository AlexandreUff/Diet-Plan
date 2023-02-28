import react, { useEffect, useState } from "react";
import { ArrowBackIcon, ArrowNextIcon, CheckDoneIcon } from "./Icons";
import Result from "../services/result";
import { redirect } from "react-router-dom";

const inputFocus = document.querySelectorAll("[inputStyled]");

export default function CardData(props){

    const [posit,usePosit] = useState(0);

    useEffect(()=>{

      console.log('POISIÇÃO ATUAL:',posit*(-1))

      const inputsNodeElements = document.getElementsByClassName("inputStyled");

      /* Converte para um formato de array */
      const inputFocus = [...inputsNodeElements];

      /* Talvez volte */
      /* inputFocus[posit*(-1)].addEventListener("keydown",(keyAction)=>{
        if(keyAction.key === 'Tab'){
            keyAction.preventDefault()
        }
      }) */

      console.log(inputFocus)

      console.log("INDICE ELEM. FOCADO",inputFocus.indexOf(inputFocus[posit*(-1)-1]))

      /* inputFocus[posit*(-1)].addEventListener("focus",(event)=>{
        console.log("Agora tem nada.");
      }) */

      inputFocus[posit*(-1)+1].addEventListener("focus",(event)=>{
        console.log("CHEGOU AQUI",event.target.id)
        if(posit*(-1) !== inputFocus.indexOf(event.target)+1){
            console.log("diferentes:",posit*(-1),inputFocus.indexOf(event.target))
            inputFocus[posit*(-1)].focus()
            event.preventDefault()

        }

      })

      setTimeout(()=>{
        inputFocus[posit*(-1)-1].focus();
        console.log("Bateu!")
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
        const objChecked = objetivo[0].checked ? objetivo[0].value : objetivo[1].value

        const result = Result(peso,estatura, idade, atividade, sexo, objetivo)
        console.log("RESULTADO FINAL", result);

        const setToResultView = (...datas) => {

            const urlDatas = datas.reduce((acc, data) => acc+`/${data}`,'')

            window.location = `/result${urlDatas}`
        }

        if(objChecked === "H"){
            setToResultView(
                atividade.value,
                result.proteins.min,
                result.proteins.max,
                result.carbo.min,
                result.carbo.max,
                result.fat,
                result.metabolicRate,
                result.caloricExpenditure
            );
        } else if (objChecked === "E"){
            setToResultView(
                atividade.value,
                result.proteins,
                result.carbo,
                result.fat,
                result.metabolicRate,
                result.caloricExpenditure
            );
        }


        /* window.location = `/result/${result.proteins.min}/${result.proteins.max}/${result.carbo.min}/${result.carbo.max}/${result.fat}/${result.metabolicRate}/${result.caloricExpenditure}` */

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