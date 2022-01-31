import styled from "styled-components/macro"

export const colors = {
    primary: "#fff",
    theme: "#494A4D",
    secondary: "#fff",
    light1: "#F3F4F6",
    light2: "#E5E7EB",
    dark1: "#2D2E33",
    dark2: "#1A1B1F",
    red: "#FF0000",
    white: "#fff",
}

export const StyledTextInput = styled.input`
    width: 300px;
    padding: 15px;
    padding-left: 40px;
    font-size: 17px;
    letter-spacing: 1px;
    color: ${colors.dark1};
    background-color: ${colors.light2};
    border: 0;
    display: block;
    margin: 5px auto 10px auto;
    transition: ease-in-out 0.3s;

    ${(props) => props.invalid && 
    `
    border: 1.5px solid ${colors.red};
    color: ${colors.primary};
    `
    }   

    &:focus {
        background-color: '#fff';
        color: ${colors.dark1};
    }
    
`

export const StyledLabel = styled.p`
    text-align: left;
    font-size: 13px;
    font-weight: bold;
`
export const ErrorMsg = styled.div`
    font-size: 11px;
    color: ${colors.red};
    margin-top: -5px;
    margin-bottom: 10px;
    text-align: left;
`


export const StyledIcon = styled.p`
    color: ${colors.dark1};
    position: absolute;

    font-size: 21px;
    top: 45px;
    left: 10px;
    ${(props) => props.right && `right: 0px;`};
    ${(props) => props.right && `left: 255px;`};
`