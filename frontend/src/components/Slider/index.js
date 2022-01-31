import React, { useState } from 'react'

import {
  Container,
  LeftIcon,
  RightIcon,
  Wrapper,
  Arrow,
  ImgContainer,
  Img,
  Slide,
  InfoContainer,
  Title,
  SubTitle,
} from './styles/slider'

import Img0 from '../../images/categories.jpg'
import Img1 from '../../images/categories2.jpg'
import Img2 from '../../images/categories3.jpg'
import Img3 from '../../images/categories4.jpg'
import Img4 from '../../images/categories5.jpg'
import Img5 from '../../images/categories6.jpg'
const Images = [Img0, Img1, Img2, Img3, Img4, Img5]
const Titles = ["INSPIRATION", "PAINTING", "PHOTOGRAPHY", "DESIGN", "ART", "CRAFT"]
const SubTitles = ["Shape Your Space With Our Selection of Sculptures", "Paint Your Space With Our Selection of Paintings", "Capture Your Space With Our Selection of Photographs", "Design Your Space With Our Selection of Designs", "Art Your Space With Our Selection of Arts", "Craft Your Space With Our Selection of Crafts"]

function Slider() {

  const [currentImage, setCurrentImage] = useState(0)

  const handleClick = (direction) =>{
    if(direction === 'left'){
      if(currentImage === 0){
        setCurrentImage(5)
      }else{
        setCurrentImage(currentImage - 1)
      }
    }else if(direction==='right'){
      if(currentImage === 5){
        setCurrentImage(0)
      }else{
        setCurrentImage(currentImage + 1)
      }
    }
    }

  return (
    <Container>
      <Arrow direction='left' onClick={() => handleClick("left")}>
        <LeftIcon />
      </Arrow>
      <Wrapper>
        <Slide>
          <ImgContainer>
          <Img src={Images[currentImage]}/>
          </ImgContainer>
        </Slide>
      </Wrapper>
      <Arrow direction='right' onClick={() => handleClick("right")}>
        <RightIcon />
      </Arrow>
    </Container>
  )
}

export default Slider
