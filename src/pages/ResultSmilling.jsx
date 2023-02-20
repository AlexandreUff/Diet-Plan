import React from "react";
import { useParams } from "react-router-dom";

export default function ResultSmilling(){
    const {atividade, protein, carbo, fat, metabolicRate, caloricExpenditure} = useParams();

    console.log("DADOS:",protein, carbo, fat, metabolicRate, caloricExpenditure)

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
        <h2>Segue uma sugestão para o seu consumo diário de macronutrientes.:</h2>
        <section className="macros-show">
            <div className="macro">
                <div className="data">
                    🍗🥩🥛
                    <p>{protein}g</p>
                </div>
                <div className="macro-name">
                    <strong>Proteínas</strong>
                </div>
            </div>
            <div className="macro">
                <div className="data">
                    🍠🍌🍞
                    <p>{carbo}g</p>
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
            <p>Com um Metabolismo Basal de {metabolicRate} kcal e um nível de atividade de grau {`${degreeOfActivity()}`}, seu gasto diário médio de calorias é de <strong>{caloricExpenditure} kcal</strong>.</p>

            <p>Os macronutrientes sugeridos acima, se consumidos corretamente, compensarão a quantidade de calorias gastas diariamente e, com isso, garantirão {`uma melhor hipertrofia : um melhor emagrecimento`}.</p>

            <br /> 

            <p>PARAGRAFO</p>
        </section>
    </div>
    )
}

/* 

                                        ATENÇÃO
                        REMOVER OS DADOS DE OBJETIVO DA ROTA

*/