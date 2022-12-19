import React from "react";

const BMR = (data)=>{
    return data.sexo === "masc" ? 66+(13.7*data.peso)+(5*data.estatura)-(6.8*data.idade) : 655+(9.6*data.peso)+(1.8*data.estatura)-(4.7*data.idade);
}

const Hipertrophy = (data) => {
    console.log("Hipertrophy",data);
    console.log("TMB",BMR(data));
}

const Slimming = (data) => {
    console.log("Emagrecimento",data);
    console.log("TMB",BMR(data));
}

export default function Result(peso,estatura, idade, atividade, sexo, objetivo){
        console.log("Peso",peso.value);
        console.log("estatura",estatura.value);
        console.log("idade",idade.value);
        console.log("atividade",atividade.value);
        console.log("sexo 0",sexo[0].checked/*  ? sexo[0].checked : sexo[1].checked */);
        console.log("sexo 1",sexo[1].checked);
        console.log("objetivo 0",objetivo[0].checked);
        console.log("objetivo 1",objetivo[1].checked);

        const data = {
            peso: +peso.value,
            estatura: +estatura.value,
            idade: +idade.value,
            atividade: atividade.value,
            sexo: sexo[0].checked ? "masc" : "fem",
        }

        if(objetivo[0].checked){
            Hipertrophy(data);
        } else if(objetivo[1].checked){
            Slimming(data);
        }
}