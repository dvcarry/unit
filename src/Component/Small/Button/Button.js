import React from 'react';
import './Button.css'

const ButtonAdd = props => {   

    return (
        <button onClick={props.click} className="button">{props.name}</button>
    )
}

export default ButtonAdd