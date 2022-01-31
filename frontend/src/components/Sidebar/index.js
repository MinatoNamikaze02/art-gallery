import React from 'react'

import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarLink, SideBtnWrap, SidebarRoute, SidebarMenu } from './styles/sidebar'

export default function Sidebar({isOpen, toggle}) {
  return (
    <SidebarContainer isOpen = {isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to='about' onClick={toggle}>About</SidebarLink>
          <SidebarLink to='about' onClick={toggle}>Discover</SidebarLink>
          <SidebarLink to='about' onClick={toggle}>Services</SidebarLink>
          <SidebarLink to='about' onClick={toggle}>Contact</SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
          <SidebarRoute to="/signin">Sign In</SidebarRoute>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  )
}