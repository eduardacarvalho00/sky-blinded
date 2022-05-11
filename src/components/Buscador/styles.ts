import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    padding-top: 1rem;
    align-items: center;
    
    input{
        border-radius: 5px;
        padding: 0.9rem 4rem;
        transition: 0.9s;

        &:hover{
            border-color: #20dbd8;
        }
    }
`