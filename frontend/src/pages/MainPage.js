import React, { useState } from 'react'
import '../App.css'
import {
  MainNav,
  Announcements,
  Slider,
  Categories,
  Footer,
  Events
} from '../components'

function MainPage() {
  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => {
    setIsOpen(!isOpen)
  }
  return (
    <div>
      <Announcements />
      <MainNav />
      <Slider />
      <Categories />
      <Events />
      <div className='footer'>
        <Footer />
      </div>
    </div>
  )
}

export default MainPage
