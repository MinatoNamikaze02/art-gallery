import styled from 'styled-components'
import { IoMdAdd } from 'react-icons/io'
import { IoMdRemove } from 'react-icons/io'
export const Container = styled.div``
export const Wrapper = styled.div`
  padding: 20px;
`

export const Top = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
`
export const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: none;
  background: #a9a9a9;
  color: #000;
  opacity: 0.5;
  &:hover {
    opacity: 1;
  }
`
export const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
`
export const TopTexts = styled.div``

export const Button = styled.button``

export const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
`

export const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`

export const Summary = styled.div`
  flex: 1;
`

export const Info = styled.div`
  flex: 3;
`
export const Product = styled.div`
  display: flex;
  justify-content: space-between;
`
export const ProductDetails = styled.div`
  flex: 2;
  display: flex;
`

export const ProductName = styled.span``
export const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
export const ProductQuantity = styled.span`
  font-size: 24px;
  margin: 5px;
`

export const PriceDetails = styled.div`
  flex: 2;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const ProductImage = styled.img`
  width: 200px;
`
export const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
`
export const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
`
export const Add = styled(IoMdAdd)``
export const Remove = styled(IoMdRemove)``
