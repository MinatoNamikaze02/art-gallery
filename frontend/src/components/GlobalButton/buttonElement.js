import styled from "styled-components/macro";

import {Link as LinkS} from "react-scroll";

export const Button = styled(LinkS)`
    border-radius: 50px;
    background: transparent;
    white-space: nowrap;
    padding: ${({big}) => big ? '14px 48px' : '12px 30px'};
    color: ${({dark}) => dark ? '#010606' : '#fff'};
    font-size: ${({fontBig}) => fontBig ? '20px' : '16px'};
    outline: none;
    border: none;
    cursor: pointer;
    font-weight: 500;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;
    margin: 0;
    &:hover {
        transition: all 0.2s ease-in-out;
        background: #C3C2C1;
        color: #000;
        
    }
`