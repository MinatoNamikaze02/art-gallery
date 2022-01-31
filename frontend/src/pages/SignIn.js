import React, { useState } from 'react'
import { Navbar, SignIn, Sidebar } from '../components'

export default function Signin() {
  const [scroll, setScroll] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => {
    setIsOpen(!isOpen)
  }
  const changeBackground = () => {
    if (window.scrollY > 120) {
      setScroll(true)
    } else {
      setScroll(false)
    }
  }
  window.addEventListener('scroll', changeBackground)
  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} name='Sign Up' page = "login"/>
      <SignIn />
    </>
  )
}
