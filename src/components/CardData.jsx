import react from "react";

export default function CardData(props){
    console.log(props.children[1].props.children[0]["pr"])
    return (
        <div className='card-ground'>
            <div className='form-content' style={
                {
                    gridTemplateColumns: `repeat(${props.children.length},${(12 / props.children.length).toFixed(2)}fr)`,
                    width:`${props.children.length * 100}%`,
                    left: `${props.contentPosition}00%`,
                }
                }>
                {props.children}
            </div>
        </div>
    )
}

/* 
    style={{width=(props.children)*100"%"}}
*/