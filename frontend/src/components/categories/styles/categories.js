import styled from "styled-components"
import { mobile } from "../../responsive"

export const Container1 = styled.div`
  
  display: flex;
  padding: 20px;
  justify-content: space-between;
  ${mobile({ padding: '0px', flexDirection: 'column' })}

`

export const Container = styled.div`
  flex: 1;
  margin: 3px;
  height: 70vh;
  position: relative;
  &:hover{
    opacity: 0.5;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  ${mobile({ height: "20vh" })}
`;

export const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
 
`;

export const Title = styled.h1`
    color: black;
    margin-bottom: 20px;
`;

export const Button = styled.button`
    border:none;
    padding: 10px;
    background-color: white;
    color:gray;
    cursor: pointer;
    font-weight: 600;
    &:hover{
      background-color: black;
      color: white;

    }
`;

export const Title2 = styled.h1`
    padding-top: 100px;
    margin-bottom: 100px;
    text-align: center;
    &:after{
        content: "";
        display: block;
        max-width: 100%;
        width: 200px;
        border-bottom: 0.2rem solid black;
        margin: 20px auto 0;

    }

`