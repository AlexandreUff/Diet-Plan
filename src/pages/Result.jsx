import React from "react";
import { useParams } from "react-router-dom";

export default function Result(){
    const {proteinMin, proteinMax, carboMin, carboMax, fat, metabolicRate, caloricExpenditure} = useParams();

    console.log("DADOS:",proteinMin, proteinMax, carboMin, carboMax, fat, metabolicRate, caloricExpenditure)

    return (
    <div className="result-main">
        <h2>Segue abaixo o seu consumo diário de macronutrientes:</h2>
        <section className="macros-show">
            <div className="macro">
                <div className="data">
                    🍗🥩🥛
                    <p>{proteinMin}g a {proteinMax}g</p>
                </div>
                <div className="macro-name">
                    <strong>Proteína</strong>
                </div>
            </div>
            <div className="macro">
                <div className="data">
                    🍠🍌🍞
                    <p>{carboMin}g a {carboMax}g</p>
                </div>
                <div className="macro-name">
                    <strong>Carboidrato</strong>
                </div>
            </div>
            <div className="macro">
                <div className="data">
                    🥓🥜🧈
                    <p>{fat}g</p>
                </div>
                <div className="macro-name">
                    <strong>Gordura</strong>
                </div>
            </div>
        </section>
        
        Metabolismo Basal: {metabolicRate} kcal
        <br />
        Gasto Calórico: {caloricExpenditure} kcal
    </div>
    )
}