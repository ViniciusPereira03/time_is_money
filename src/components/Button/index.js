import React from 'react';
import { ButtonArea } from './style';

const Button = ({ ...props }) => {

    return (
        <ButtonArea>
             <button {...props}>
                {props.value}
             </button>
        </ButtonArea>
    )
}

export default Button;