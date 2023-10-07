import styled from 'styled-components';

export const ButtonArea = styled.div`
    width: 100%;
    height: 32px;
    margin: 8px 0px;
    background-color: transparent;

    button {
        width: 100%;
        height: 100%;
        padding: 0px 8px;

        background-color: #3CBD5A;
        color: #fff;

        box-sizing: border-box;
        border-radius: 6px;

        border: 0;
        outline: none;
        
        outline: 0;

        transition: all 0.15s ease;

        &:hover {
            background-color: #2D944F;
        }

        &:focus {
            outline: 0;
            border: none;
            background-color: #1E6A44;
            transform: scale(0.989);
        }

    }
`;