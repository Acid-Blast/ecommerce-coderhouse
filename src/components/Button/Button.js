import React from 'react';
import './Button.css'

const Button = (props) => {

    return (
        <div className="btn-container">
            <button className="btn">
                {props.txt}
            </button>
        </div>
    )
}
export default Button;