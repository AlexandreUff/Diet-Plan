import React from "react";
import { useParams } from "react-router-dom";

export default function Result(){
    const {proteinMin, proteinMax, carboMin, carboMax, fat, metabolicRate, caloricExpenditure} = useParams();

    console.log("DADOS:",proteinMin, proteinMax, carboMin, carboMax, fat, metabolicRate, caloricExpenditure)

    return <div style={{background:'red', fontSize:'30px'}}>
        Resultado {proteinMin} {proteinMax} {carboMin} {carboMax} {fat} {metabolicRate} {caloricExpenditure}!
    </div>
}