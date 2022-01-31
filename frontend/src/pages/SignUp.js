import React, { useState } from 'react'
import '../App.css'
import { Navbar, Sidebar, SignUp } from '../components'
export default function Signup() {
  const [scroll, setScroll] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => {
    setIsOpen(!isOpen)
  }
  const changeBackground = () => {
    if (window.scrollY > 0) {
      setScroll(true)
    } else {
      setScroll(false)
    }
  }
  window.addEventListener('scroll', changeBackground)
  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} name="Login" className={scroll ? 'active': ''} name="Login" page ="Sign Up"/>
      <SignUp />
    </>
  )
}
