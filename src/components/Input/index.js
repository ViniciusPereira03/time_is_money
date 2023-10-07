import React from 'react';
import { InputArea } from './style';

const Input = ({ ...props }) => {

    return (
        <InputArea {...props}>
            <input {...props} />
        </InputArea>
    )
}

export default Input;