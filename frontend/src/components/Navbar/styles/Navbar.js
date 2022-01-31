import styled from "styled-components/macro";
import {Link as LinkR} from 'react-router-dom'
import {Link as LinkS} from 'react-scroll'

export const Nav = styled.nav`
    background: transparent; 
    height: 80px;
    margin-top: -80px;
    display: flex;
    justify-content: center;
    align-items: center !imporant;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 10;
    
    @media screen and (max-width: 960px){
        transition: 0.8s all ease;
    }
`

export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 80px;
    z-index: 1;
    width: 100%;
    padding: 0 24px;
    max-width: 1100px;
`

export const NavLogo = styled(LinkR)`
    color: #F0E8D4;
    cursor: pointer;
    font-size: 1.5rem;
    display: flex;
    align-items: center !important;
    font-weight: bold;
    margin-left: 15px;
    text-decoration: none;
    &:hover{
        color: #F0E8D4 !important;
    }

`

export const MobileIcon = styled.div`
    display: none;
    @media screen and (max-width: 768px){
        display: flex;
        align-items: center !important;
        top: 0;
        right: 0;
        tranform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
        color: #F0E8D4;
    }
`

export const NavMenu = styled.ul`
    display: flex;
    align-items: center !important;
    list-style: none;
    text-align: center;
    margin-right: -22px;

    @media screen and (max-width: 768px){
        display: none;
    }
`

export const NavItem = styled.li`
    height: 80px;
`

export const NavLinks = styled(LinkS)`
    color: #F0E8D4 !important;
    display: flex !important;
    width: 100% !important ;
    align-items: center !important;
    text-decoration: none !important;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    font-weight: 500;
    &:hover{
        color: #F0E8D4 !important;
    }
    &:active{
        border-bottom: 3px solid #6C63FF !important;
    }
`

export const NavBtn = styled.nav`
    display: flex;
    align-items: center;

    @media screen and (max-width: 768px){
        display: none;
    }
`
export const NavBtnLink = styled(LinkR)`
    border-radius: 50px;
    background: #C3C2C1;
    white-space: nowrap;
    padding: 10px 22px;
    color: #000;
    margin-left: 10px;
    font-size: 16px;
    outline: none;
    border: none;
    font-weight: bold;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover{
        transition: all 0.2s ease-in-out;
        background: #fff;
        color: #010606;
    }
`