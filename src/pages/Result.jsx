import React from "react";
import { useParams } from "react-router-dom";

export default function Result(){
    const {atividade, proteinMin, proteinMax, carboMin, carboMax, fat, metabolicRate, caloricExpenditure} = useParams();

    console.log("DADOS:",proteinMin, proteinMax, carboMin, carboMax, fat, metabolicRate, caloricExpenditure)

    const degreeOfActivity = () => {
        switch(atividade){
            case "nad":
                return "sedentário (nenhuma por semana)"
            case "lev":
                return "leve (de 1x a 3x por semana)"
            case "mod":
                return "moderado (de 3x a 5x por semana)"
            case "alt":
                return "elevado (de 5x a 6x por semana)"
            case "ext":
                return "extremo (pesado e até 2x ao dia)"
        }
    }

    return (
    <div className="result-main">
        <h2>Segue uma sugestão para o seu consumo diário de macronutrientes:</h2>
        <section className="macros-show">
            <div className="macro">
                <div className="data">
                    🍗🥩🥛
                    <p>{proteinMin}g a {proteinMax}g</p>
                </div>
                <div className="macro-name">
                    <strong>Proteínas</strong>
                </div>
            </div>
            <div className="macro">
                <div className="data">
                    🍠🍌🍞
                    <p>{carboMin}g a {carboMax}g</p>
                </div>
                <div className="macro-name">
                    <strong>Carboidratos</strong>
                </div>
            </div>
            <div className="macro">
                <div className="data">
                    🥓🥜🧈
                    <p>{fat}g</p>
                </div>
                <div className="macro-name">
                    <strong>Gorduras</strong>
                </div>
            </div>
        </section>
        <section className="info-conclusion">
            Com um Metabolismo Basal de {metabolicRate} kcal e um nível de atividade de grau {`${degreeOfActivity()}`}, seu gasto diário médio de calorias é de <strong>{caloricExpenditure} kcal</strong>.
            <br />
            Para compensar todo esse gasto calórico...
        </section>
    </div>
    )
}