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

    const middleMacro = (min, max) => {
        const calcResult = +min+(+max-(+min))/2;

        return Math.trunc(calcResult);
    }

    return (
    <div className="result-main">
        <h2>Segue uma sugestão para o seu consumo diário de macronutrientes.:</h2>
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
            <p>Com um Metabolismo Basal de <strong>{metabolicRate} kcal</strong> e um nível de atividade de grau {`${degreeOfActivity()}`}, seu gasto diário médio de calorias é de <strong>{caloricExpenditure} kcal</strong>.</p>

            <p>Os macronutrientes sugeridos acima, se consumidos corretamente, compensarão a quantidade de calorias gastas diariamente e, com isso, garantirão uma melhor hipertrofia.</p>

            <br /> 

            <p className="observation">
                Obs: O seu consumo de carboidratos é definido inversamente proporcional conforme a quantidade de proteínas que ingerir. Ou seja, se você consome o valor máximo de proteínas ({proteinMax}g), deve consumir o mínimo de carboidratos ({carboMin}g). Caso consuma o minimo de proteínas ({proteinMin}g), deve consumir o máximo de carboidratos ({carboMax}g).

                <br />
                
                A variação de valor máximo e mínimo entre ambos macronutrientes citados acima é de 59g, o que significa que para cada grama de proteína que for ingerir, dentro dessa margem, é uma grama a menos de carboidrato.
            </p>

            <br />

            <p className="exemple">
                Ex.:
                <ul>
                    <li>Consumo mínimo de proteínas ({proteinMin}g) = Consumo máximo de carboidrátros ({carboMax}g);</li>
                    <li>Consumo médio de proteínas ({middleMacro(proteinMin,proteinMax)}g) = Consumo médio de carboidratos ({middleMacro(carboMin,carboMax)}g);</li>
                    <li>Consumo máximo de proteínas ({proteinMax}g) = Consumo mínimo de carboidratos ({carboMin}g).</li>
                </ul>
            </p>
        </section>
    </div>
    )
}