import styled from "styled-components/macro";

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
export const Column = styled.div`
    display: flex;
    flex-direction: column;
    text-align: left;

`
export const Row = styled.div`
    margin-left: 80px;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(190px, 1fr));
    grid-gap: 15px;

    @media(max-width: 1000px){
        margin-left: 10px;
        grid-template-columns: repeat(auto-fill, minmax(130px, 1fr));
    }

`
export const Link = styled.a`
    cursor: pointer;
    color: #000;
    font-weight: 600;
    margin-bottom: 20px;
    font-size: 14px;
    text-decoration: none;
    font-family: 'Roboto', sans-serif !important;

    &:hover{
        text-decoration: underline;
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
export const Break = styled.p`
    flex-basis: 100%;
    height: 0;

`