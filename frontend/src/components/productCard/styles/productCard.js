import styled from 'styled-components'

export const Title = styled.h1`
  color: black;
  text-align: center;
  &:after {
    content: '';
    display: block;
    max-width: 100%;
    width: 200px;
    border-bottom: 0.2rem solid black;
    margin: 10px auto 0;
  }
`

export const Container = styled.div`
  margin-top: 100px;
`
export const Outer = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
`
export const Inner = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 3px;
  height: 70vh;
  position: relative;
`
export const Title2 = styled.h1`
  color: black;
  margin-bottom: 20px;
`
export const SubTitle = styled.h2``
export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`
export const Text = styled.p`
  color: black;
  text-align: center;
`
