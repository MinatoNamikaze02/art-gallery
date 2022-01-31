import styled from 'styled-components'
import background from '../../../images/bg.jpg'
import {Link} from 'react-scroll'

export const colors = {
    primary: "#fff",
    theme: "#494A4D",
    secondary: "#fff",
    light1: "#F3F4F6",
    light2: "#E5E7EB",
    dark1: "#2D2E33",
    dark2: "#1A1B1F",
    red: "#FFFFFF",
    white: "#fff",
}

export const StyledContainer = styled.div`
    margin: 0;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${background});
    background-size: cover;
    background-attachmen: fixed;
`

export const StyledTitle = styled.h2`

    font-size: ${(props) => props.size}px;
    text-align: center;
    color: ${(props) => props.color};
    padding: 5px;
    margin-bottom: 20px;
`

export const ButtonGroup = styled.div`
    display: flex;
    justify-content: space-around;
    flex-direction: row;
    margin-top: 25px;
`

export const StyledTextInput = styled.input`
    width: 900px;
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
    `background-color: ${colors.red}; color: ${colors.primary};`}

    &:focus {
        background-color: '#fff';
        color: ${colors.dark1};
    }
    
`;

export const StyledLabel = styled.p`
    text-align: left;
    font-size: 13px;
    font-weight: bold;
`

export const StyledFormArea = styled.div`
    background-color: ${props => props.bg || colors.light1};
    text-align: center;
    margin: 8% auto;
    padding: 45px 175px;
    border-radius: 20px;
`

export const StyledFormButton = styled.button`
    padding: 10px;
    width: 150px;
    background-color: transparent;
    font-size: 16px;
    border: 2px solid ${colors.theme};
    border-radius: 25px;
    color: ${colors.theme};
    transition: ease-in-out 0.3s;

    &:hover {
        background-color: ${colors.dark1};
        color: ${colors.white};
        cursor: pointer;
    }
    &:disabled {
        &:hover {
            background-color: transparent;
            color: ${colors.theme};
            cursor: not-allowed;
        }
    }
`

export const ErrorMsg = styled.div`
    font-size: 11px;
    color: ${colors.red};
    margin-top: -5px;
    margin-bottom: 10px;
    text-align: left;
`

export const ExtraText = styled.p`
    font-size: ${(props) => props.size}px;
    text-align: center;
    color: ${(props) => props.color? props.color : colors.dark2};
    padding: 2px;
    margin-top: 10px;
`

export const TextLink = styled(Link)`
    text-decoration: none;
    color: ${colors.theme};
    transition: ease-in-out 0.3s;
    cursor: pointer;

    &:hover {
        text-decoration: underline;
    }

`
export const StyledIcon = styled.p`
    color: ${colors.dark1};
    position: absolute;
    font-size: 21px;
    top: 35px;
    ${(props) => props.right && `right: 20px;`};
    ${(props) => props.left && `left: 15px;`};
`

export const CopyrightText = styled.p`
    padding: 5px;
    margin: 20px;
    text-align: center;
    color: {colors.light2};
`