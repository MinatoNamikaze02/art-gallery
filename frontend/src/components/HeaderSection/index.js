import React, { useState } from 'react'
import { Button } from '../GlobalButton/buttonElement'
import {
  HeaderSectionContainer,
  HeaderBg,
  VideoBg,
  HeaderContent,
  HeaderTitle,
  HeaderSubtitle,
  HeaderBtnWrapper,
  ArrowForward,
  ArrowRight,
} from './style/headersection'
import video from '../../videos/video.mp4'

export default function HeaderSection() {
  const [hover, setHover] = useState(false)
  const onHover = () => {
    setHover(!hover)
  }

  return (
    <HeaderSectionContainer>
      <HeaderBg>
        <VideoBg autoPlay loop muted src={video} type='video/mp4' />
      </HeaderBg>
      <HeaderContent>
        <HeaderTitle>Grow, Sell and Buy Art Online.</HeaderTitle>
        <HeaderSubtitle>
          Helping artists thrive and making art accessible to the entire world.
          <br /> Sign Up Now!
        </HeaderSubtitle>
        <HeaderBtnWrapper>
          <Button
            to='signup'
            onMouseEnter={onHover}
            onMouseLeave={onHover}

          >
            Get Started {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </HeaderBtnWrapper>
      </HeaderContent>
    </HeaderSectionContainer>
  )
}
