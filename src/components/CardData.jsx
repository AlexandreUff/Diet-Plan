import react from "react";

export default function CardData(props){
    return (
        <div className='card-ground'>
            <div className='form-content' style={{left: `${props.contentPosition}00%`}}>
                {props.children}
            </div>
        </div>
    )
}

/* 
    style={{width=(props.children)*100"%"}}
*/