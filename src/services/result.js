import React from "react";

const Hipertrofia = () => {
    console.log("Hipertrofia")
}

const Emagracimento = () => {
    console.log("Emagrecimento")
}

export default function Result(peso,estatura, idade, atividade, sexo, objetivo){
        console.log("Peso",peso.value);
        console.log("estatura",estatura.value);
        console.log("idade",idade.value);
        console.log("atividade",atividade.value);
        console.log("sexo 0",sexo[0].checked ? sexo[0].checked : sexo[1].checked);
        console.log("sexo 1",sexo[1].checked);
        console.log("objetivo 0",objetivo[0].checked);
        console.log("objetivo 1",objetivo[1].checked);
}