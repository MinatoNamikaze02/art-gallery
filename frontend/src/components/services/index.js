import React from 'react'
import { ServicesContainer, ServicesH1, ServicesH2, ServicesP, ServicesWrapper, ServicesIcon, ServicesCard } from './style/services'
import icon1 from '../../images/art_5.svg'
import icon2 from '../../images/art_6.svg'
import icon3 from '../../images/art_7.svg'

export default function Services(){
    return (
        <ServicesContainer id="services">
            <ServicesH1>
                Our Services
            </ServicesH1>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon src={icon1}/>
                    <ServicesH2>Promote Artwork</ServicesH2>
                    <ServicesP>Our goal is to maintain a steadfast connection between artists and the public.</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={icon2}/>
                    <ServicesH2>Customer Services</ServicesH2>
                    <ServicesP>We follow a very modern customer service <br/> approach.</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={icon3}/>
                    <ServicesH2>Artist Support</ServicesH2>
                    <ServicesP>We try our best to provide financial aid to upcoming artists.</ServicesP>
                </ServicesCard>
            </ServicesWrapper>
        </ServicesContainer>
    )
}


