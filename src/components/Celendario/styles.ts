import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
`

export const List = styled.ul`
    list-style-type: none;
    height: 22rem;
    display: flex;
    justify-content: center;
    margin-top: 5rem;
    overflow: auto;

    @media(max-width: 768px){
        display: flex;
        flex-direction: row;
        align-items: center;
        flex-wrap: wrap;
    }
`
export const Content = styled.li`

    width: 20rem;
    text-align: center;
    border: solid;
    border-width: thin;
    border-radius: 0.5rem;
    padding: 0.5rem 2rem;
    margin: 0.3rem;
    font-weight: 600;
    border-color: #2bc4c8;
    
    @media (max-width: 768px) {
        width: 10rem;
        padding: 0.5rem 2rem;
        min-height: 20rem;
    }

`
export const Section = styled.section`
    padding-top: 1rem;
    margin-top: 2rem;
    font-weight: normal;
`