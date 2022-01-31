import styled from "styled-components";
import {FiSearch} from 'react-icons/fi'
import {RiShoppingBagLine} from 'react-icons/ri'
import {Link} from 'react-scroll'
import '../../../App.css'

export const Container = styled.div`
    height: 90px;
    background-color: #fff;
    border-bottom: 1px solid #e6e6e6;
`

export const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`
export const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    margin-left: 40px;
`
export const Center = styled.div`
    flex: 1;
    text-align: center;
`
export const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: space-evenly;

`

export const Lang = styled.span`
    font-size: 14px;
    cursor: pointer;
`

export const SearchContainer = styled.div`
    border: 0.5px solid lightgray;
    display: flex;
    align-items: center;
    margin-left: 25px;
    padding: 5px;
`

export const SearchIcon = styled(FiSearch)`
    margin-left: 10px; 
    color: gray;
    font-size: 16px
`

export const Input = styled.input`
    border: none;
`
export const Logo = styled.h1`
    font-weight: bold;
`
export const MenuItem = styled(Link)`
    font-size: 14px;
    cursor: pointer;
    margin-right: 20px;
    background-color: #000;
    border-radius: 15px;
    padding: 5px 20px;
    color: #fff;
    &:hover{
        background-color: #000 !important;
        color: #fff !important;
    }

`
export const CartIcon = styled(RiShoppingBagLine)`
    margin-right: 10px;
    cursor: pointer;
    font-size: 20px;
`