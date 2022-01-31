import React from 'react'
import '../../App.css'
import { useHistory } from 'react-router-dom'

import {
  Container1,
  Container,
  Image,
  Info,
  Title,
  Button,
  Title2,
} from './styles/categories'

import { categories, categories2 } from '../../constants/categories'
const Categories = () => {
  const history = useHistory()

  return (
    <div className='footer1'>
      <Title2>Discover the world through original artworks</Title2>

      <Container1>
        {categories.map((item) => (
          <Container key={item.id}>
            <Image src={item.img} />
            <Info>
              <Title>{item.title}</Title>
              <Button onClick={() => {
                console.log(item)
                history.push({
                  pathname: '/products',
                  state: {
                    item,
                  },
                })
              }}>SHOP NOW</Button>
            </Info>
          </Container>
        ))}
      </Container1>
      <Container1>
      {categories2.map((item) => (
          <Container key={item.id}>
            <Image src={item.img} />
            <Info>
              <Title>{item.title}</Title>
              <Button onClick={() =>{
                console.log(item)
                history.push({
                  pathname: '/products',
                  state: {
                    item,
                  },
                })
              }}>SHOP NOW</Button>
            </Info>
          </Container>
        ))}
      </Container1>
    </div>
  )
}

export default Categories
