import React, { useState } from 'react'
import '../App.css'
import {
  Navbar,
  Sidebar,
  HeaderSection,
  InfoSection,
  Services,
  Footer,
} from '../components'
import {
  aboutSection1,
  aboutSection2,
  aboutSection3,
  aboutSection4,
} from '../components/InfoSection/data/data'
import image1 from '../images/art_1.svg'
import image2 from '../images/art_2.svg'
import image3 from '../images/art_3.svg'
import image4 from '../images/art_4.svg'

function Home() {
  const [isOpen, setIsOpen] = useState(false)
  const [scroll, setScroll] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }
  const changeBackground = () => {
    if(window.scrollY > 120) { 
      setScroll(true)
    }else{
      setScroll(false)
    }
  }
  window.addEventListener('scroll', changeBackground)

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} className={scroll ? 'active': ''} name="Login"/>
      <HeaderSection />
      <InfoSection aboutSection={aboutSection1} img={image1} />
      <InfoSection aboutSection={aboutSection2} img={image2} />
      <InfoSection aboutSection={aboutSection3} img={image3} />
      <InfoSection aboutSection={aboutSection4} img={image4} />
      <Services />
      <div className="footer">
      <Footer />
      </div>
      
    </>
  )
}

export default Home
