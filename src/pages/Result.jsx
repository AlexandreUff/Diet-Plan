import React from "react";
import { useParams } from "react-router-dom";

export default function Result(){
    const {protein, carbo} = useParams();

    return <div style={{background:'red'}}>
        Resultado {protein} {carbo}!
    </div>
}