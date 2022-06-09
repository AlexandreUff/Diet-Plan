import react from "react";

export default function CardInfo(props){
    return (
        <div className='card-ground'>
            <h2>{props.title}</h2>
            <>
                {props.children}
            </>
            {
                props.buttonsType === "confirm" ?
                <button>{props.buttonText}</button> : 
                <div style={{display:"flex"}}>
                    <button>{"<<"}</button><button>{">>"}</button>
                </div>
            }
        </div>
    )
}