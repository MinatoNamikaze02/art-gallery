import React from 'react'
import { useHistory } from 'react-router-dom'
import { Container, Wrapper, Left, Center, Right, Lang, SearchContainer, MenuItem, CartIcon, SearchIcon, Input, Logo } from './styles/mainNavbar'

export default function MainNav() {
    const history = useHistory()
    const handleLogOutClick = (e) => {
        e.preventDefault()
        alert('Are you sure you want to log out?')
        setTimeout(() => {
            history.push('/')
        }, 2000)
    }
    const cartClick = (e) => {
        e.preventDefault()
        history.push('/cart')
    }
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Lang>
                        EN
                    </Lang>
                    <SearchContainer>
                        <Input/>
                        <SearchIcon />
                    </SearchContainer>
                </Left>
                <Center>
                    <Logo>Le Louvre</Logo>
                </Center>
                <Right>
                    <MenuItem>Profile</MenuItem>
                    <MenuItem onClick={handleLogOutClick}>Log Out</MenuItem>
                    <CartIcon onClick={cartClick}/>
                </Right>
            </Wrapper>
        </Container>
    )
}
