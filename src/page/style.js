import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #00172D;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;

    form {
        /* width: 90%; */
        width: 364px;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 32px;
        margin-bottom: 64px;
    }


    .result {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        .text {
            color: #fff;
            font-size: 18px;
        }
        
        .time {
            color: #3CBD5A;
            font-size: 100px;
            margin-top: 32px;
        }
    }
`;

export const Title = styled.h1`
    color: #FFF;
    margin-top: 32px;
    
`;

export const Subtitle = styled.label`
    color: #FFF;

`;