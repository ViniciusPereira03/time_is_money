import styled from 'styled-components';

export const InputArea = styled.div`
    width: 100%;
    height: 32px;
    margin: 4px 0px;

    transition: all 2s ease;

    input {
        width: 100%;
        height: 100%;
        padding: 8px;
        box-sizing: border-box;
        border: ${(props) => props.error ? '1px solid #C63535' : '1px solid rgba(255, 255, 255, 0.3)'};
        border-radius: 8px;
        background-color: #00172D;
        color: #fff;

        &::placeholder {
            transition: all 0.25s ease;
            padding-left: 0px;
            color: ${(props) => props.error ? '#C63535' : 'rgba(255, 255, 255, 0.3)'};
        }
        
        &:hover {
            border: ${(props) => props.error ? '1px solid #C63535' : '1px solid rgba(255, 255, 255, 0.5)'};

            &::placeholder {
                transition: all 0.25s ease;
                padding-left: 0px;
                color: ${(props) => props.error ? '#C63535' : 'rgba(255, 255, 255, 0.3)'};
            }
        }
        
        &:focus{
            outline: none;
            border: 1px solid rgba(255, 255, 255, 1);
            color: #FFF;
            
            &::placeholder {
                color: #FFF;
                padding-left: 8px;
            }

        }

        
        
    }
`;
