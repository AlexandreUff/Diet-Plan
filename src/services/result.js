const getCaloricExpenditure = (data)=>{
    const male = 66+(13.7*data.peso)+(5*data.estatura)-(6.8*data.idade)
    const female = 655+(9.6*data.peso)+(1.8*data.estatura)-(4.7*data.idade);

    let caloricExpenditure;
    let metabolicRate = data.sexo === "masc" ? +male.toFixed(2) : +female.toFixed(2);

    switch(data.atividade){
        case "nad":
            caloricExpenditure = +(metabolicRate * 1.2).toFixed(2)
            break;
        case "lev":
            caloricExpenditure = +(metabolicRate * 1.375).toFixed(2)
            break;
        case "mod":
            caloricExpenditure = +(metabolicRate * 1.55).toFixed(2)
            break;
        case "alt":
            caloricExpenditure = +(metabolicRate * 1.725).toFixed(2)
            break;
        case "ext":
            caloricExpenditure = +(metabolicRate * 1.9).toFixed(2)
            break;
    }

    return {
        metabolicRate,
        caloricExpenditure,
    }
}

const Hipertrophy = (data) => {
    console.log("Hipertrophy",data);

    const { metabolicRate, caloricExpenditure } = getCaloricExpenditure(data);

    const proteins = {
        min: Math.round(data.peso * 1.6),
        max: Math.round(data.peso * 2.2),
    };

    const fat = Math.floor(data.peso);

    const basalCarboCalculation = (proteins) => {
        return Math.round((caloricExpenditure - ((proteins * 4) + (fat * 9))) / 4);
    };

    const carbo = {
        min: basalCarboCalculation(proteins.max),
        max: basalCarboCalculation(proteins.min),
    };

    console.log("TMB",metabolicRate);
    console.log("GASTO",caloricExpenditure);
    console.log("PRoteínas:",proteins);
    console.log("Gorduras:",fat);
    console.log("Carbo:",carbo);

    return {
    metabolicRate,
    caloricExpenditure,
    proteins,
    carbo,
    fat,
    }
}

const Slimming = (data) => {
    console.log("Emagrecimento",data);

    const { metabolicRate, caloricExpenditure } = getCaloricExpenditure(data);

    const macroNutrientsCalc = (percentage, calories) => Math.round((caloricExpenditure * (percentage / 100)) / calories);

    const proteins = macroNutrientsCalc(40,4);
    
    const carbo = macroNutrientsCalc(40,4);

    const fat = macroNutrientsCalc(20,9);

    console.log("p,c,f:",proteins,carbo,fat);

    console.log("TMB",getCaloricExpenditure(data));

    return {
        metabolicRate,
        caloricExpenditure,
        proteins,
        carbo,
        fat,
        }
}

export default function Result(peso,estatura, idade, atividade, sexo, objetivo){
        console.log("Peso",peso.value);
        console.log("estatura",estatura.value);
        console.log("idade",idade.value);
        console.log("atividade",atividade.value);
        console.log("sexo 0",sexo[0].checked);
        console.log("sexo 1",sexo[1].checked);
        console.log("objetivo 0",objetivo[0].checked);
        console.log("objetivo 1",objetivo[1].checked);

        const userData = {
            peso: +peso.value,
            estatura: +estatura.value,
            idade: +idade.value,
            atividade: atividade.value,
            sexo: sexo[0].checked ? "masc" : "fem",
        }

        if(objetivo[0].checked){
            return Hipertrophy(userData);
        } else if(objetivo[1].checked){
            return Slimming(userData);
        }
}