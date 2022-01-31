import React from 'react'
import { FaBars } from 'react-icons/fa'
import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavMenu,
  NavItem,
  NavLinks,
  MobileIcon,
  NavBtn,
  NavBtnLink,
} from './styles/Navbar'

export default function Navbar({ toggle, info, page, ...restProps }) {

  return (
    <>
      <Nav {...restProps} info={info} page={page}>
        <NavbarContainer>
          <NavLogo to='/'>Le Louvre</NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to='about'>About</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='discover'>Discover</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='contact'>Contact</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='services'>Services</NavLinks>
            </NavItem>
          </NavMenu>
          <NavBtn>
            {page=='admin' || page=='login' ? <NavBtnLink to={restProps.name == 'Login' ? '/signin' : '/signup'}>
              SignUp
            </NavBtnLink>:
            (
              page=='dashboard' ? <NavBtnLink to='/'>
                Logout
              </NavBtnLink>
              : <NavBtnLink to='/signin'>Login</NavBtnLink>
            )
            }
            {page!='admin' && <NavBtnLink to='/signin/admin'>Admin</NavBtnLink>}
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  )
}
