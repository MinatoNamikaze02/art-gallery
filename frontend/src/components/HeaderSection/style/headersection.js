import styled from "styled-components/macro";

import {MdKeyboardArrowRight, MdArrowForward} from "react-icons/md";

export const HeaderSectionContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 150px 30px;
    height: 800px;
    position: relative;
    z-index: 1;
    :before{
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(180deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.6) 100%),
        linear-gradient(180deg, rgba(0,0,0,0.2) 0%, transparent 100%);
        z-index: 2;
    }

`
export const HeaderBg = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
`

export const VideoBg = styled.video`

    
`

export const HeaderContent = styled.div`
    z-index: 3;
    max-width: 1200px;
    position: absolute;
    padding 8px 24px;
    flex-direction: column;
    align-items: center;
    display: flex;
    margin: 0;
`

export const HeaderTitle = styled.h1`
    color: #fff;
    font-size: 36px;
    text-align: center;

    @media screen and (max-width: 768px){
        font-size: 30px;

    }
    @media screen and (max-width: 480px){
        font-size: 24px;
    }
`
export const HeaderSubtitle = styled.p`
    margin-top: 12px;
    color: #fff;
    font-size: 24px;
    text-align: center;
    max-width: 600px;
    @media screen and (max-width: 600px){
        font-size: 9px;
    }


    @media screen and (max-width: 768px){
        font-size: 14px;

    }
    @media screen and (max-width: 480px){
        font-size: 20px;
    }
`
export const HeaderBtnWrapper = styled.div`
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media screen and (max-width: 600px){
        margin-top: 0;
    }

`

export const ArrowForward = styled(MdArrowForward)`
    margin-left: 8px;
    font-size: 20px;

`
export const ArrowRight = styled(MdKeyboardArrowRight)`

`