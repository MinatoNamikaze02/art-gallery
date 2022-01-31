import styled from "styled-components";

export const Container = styled.div`
    background: #9D9D9D;
    display: flex;
    padding: 60px 40px;
    margin: auto;
    max-width: 1000px;
    flex-direction: column;

    @media (max-width: 1000px){
        padding: 70px 30px;
    }

`

export const Title = styled.p`
    font-size: 16px;
    font-family: 'Roboto', sans-serif !important;
    font-weight: 700;
    color: #000;
    margin-bottom: 40px;
    margin-left: 80px;

    @media (max-width: 1000px){
        margin-left: 10px;
    }
`

export const Text = styled.p`
    font-size: 13px;
    color: #757575;
    margin-bottom: 40px;

`