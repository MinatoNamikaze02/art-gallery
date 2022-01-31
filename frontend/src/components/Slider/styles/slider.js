import styled from "styled-components"
import {BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill} from "react-icons/bs"

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    background-color: #EFEFEF;
    position: relative;
    overflow: hidden;
`
export const Arrow = styled.div`
    width: 50px;
    height: 50px;
    font-size: 40px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    bottom: 0;
    cursor: pointer;
    opacity: 1;
    left: ${props => props.direction === "left" && "10px"};
    right: ${props => props.direction === "right" && "10px"};
    margin: auto;

`
export const Wrapper = styled.div`
   width: 100%;
   transition: transform 0.5s ease-in;
`
export const Slide = styled.div`
    width: 100vw;
    height: 100%;
    display: flex;
`
export const ImgContainer= styled.div`
    flex: 1;
    height: 900px;
    width: 2133.33px;
    background-size: cover;
`

export const InfoContainer = styled.div`
    flex: 1;
    z-index: 3;
    position: absolute;
    top: 35%;
    right: 50%
`
export const Title = styled.h1`
    font-size: 50px;
    color: white;
    text-align: center;
    background-color: black;
`
export const SubTitle = styled.h3`
    font-size: 40px;
    color: white;
    text-align: center;
    background-color: black;
    opacity: 0.5;
    padding: 50px;
`

export const Img = styled.img`
    height: 100%;
    width: 100%;

`

export const LeftIcon = styled(BsFillArrowLeftCircleFill)`
    color: #fff;
    z-index: 4;
    &:hover {
        color: teal;
    }
`

export const RightIcon = styled(BsFillArrowRightCircleFill)`
    color: #fff;
    z-index: 4;
    &:hover {
        color: teal;
    }
`