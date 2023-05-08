import { useState } from "react"; 
import "./inputs.css"

const InputContainer = (props) => {
    const {type = "texto"} = props;

    const placeholderModificar=`${props.placeholder}...`;
    
    const modificaValue = (event) => {props.setValue(event.target.value)}
    
    return <div className={`input__container type__${type}`}>
        <label className="text">{props.titulo}</label>
        
        <input 
            type={type}
            placeholder={placeholderModificar}  
            className="text" 
            required={props.required} 
            value={props.value}
            onChange={modificaValue}
        /> 
    </div>
}

export default InputContainer