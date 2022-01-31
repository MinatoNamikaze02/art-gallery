import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { MainNav, Announcements, Footer } from '..'
import './styles/styles.css'
import axios from 'axios'
import { Container, Wrapper, Top, Title, TopButton, F } from './styles/cart'
import '../../App.css'
import { date } from 'yup/lib/locale'


function Cart() {
  const history = useHistory()
  const [keys, setKeys] = useState([])
  const [finalTotal, setFinalTotal] = useState(0)
  const [data, setData] = useState([])
  const [constData, setConstData] = useState(0)
  const [quantity, setQuantity] = useState([])
  const [total, setTotal] = useState(0)
  useEffect(() => {
    let values = []
    let keys = Object.keys(localStorage)
    let i = keys.length
    while (i--) {
      if(keys[i]==='id') {
        console.log("here")
        continue
      }
      values.push(JSON.parse(localStorage.getItem(keys[i])))
      console.log(values)
    }
    setData(values)
    setKeys(keys)
    let total = 0 
    values.forEach(item => {
        total += item.Price
        }
    )
    setTotal(Math.floor(total))
    setFinalTotal(total + 4 + 5)
},[constData])

const handleClick = (e) => {
    e.preventDefault()
    localStorage.clear()
    const res = axios.post('http://localhost:3001/api/checkout', {
      id: (Date.now()/2),
      customerID: localStorage.getItem('id'),
      order_date: '13/1/2022',
      last_date: '13/2/2022',
      subTotal: total,
      shipping: 5,
      tax: 4,
      total: finalTotal,

    }).then(res => {
      if(res.data.ok===true){
        alert('Order Placed')
        history.push('/checkout')
      }
    })
   
}


  return (
    <Container>
      <MainNav />
      <Announcements />
      <Wrapper>
        <Title>YOUR BAG</Title>
        <Top>
          <TopButton onClick={()=>{
              history.push('/user/customer')
          }}>Continue Shopping</TopButton>
          <TopButton onClick={()=>{
              history.push('/checkout')
          }}>Checkout Now</TopButton>
        </Top>
        <div className='wrap cf'>
          <div className='cart'>
            <ul className='cartWrap'>
              {data.map((item) => {
                return (
                  <li className='items odd'>
                    <div className='infoWrap'>
                      <div className='cartSection'>
                        <img
                          src={item.Front_view}
                          alt
                          className='itemImg'
                        />
                        <p className='itemNumber'>{item.Art_ID}</p>
                        <h3>{item.Art_name}</h3>
                          {' '}
                          <input
                            onChange={(e) => {setQuantity(e.target.value)}}
                            type='text'
                            className='qty'
                            placeholder={1}
                          />{' '}
                      </div>
                      <div className='prodTotal cartSection'>
                        <p>{item.Price}$</p>
                      </div>
                      <div className='cartSection removeWrap'>
                        <button onClick={(e) => {
                          localStorage.removeItem(item.Art_name)
                          setConstData(constData+1)
                        }} className='remove'>
                          x
                        </button>
                      </div>
                    </div>
                  </li>
                )
              })}
            </ul>
          </div>
          <div className='subtotal cf'>
            <ul>
              <li className='totalRow'>
                <span className='label'>Subtotal</span>
                <span className='value'>${total}</span>
              </li>
              <li className='totalRow'>
                <span className='label'>Shipping</span>
                <span className='value'>$5.00</span>
              </li>
              <li className='totalRow'>
                <span className='label'>Tax</span>
                <span className='value'>$4.00</span>
              </li>
              <li className='totalRow final'>
                <span className='label'>Total</span>
                <span className='value'>${total + 4 + 5}</span>
              </li>
              <li className='totalRow'>
                <button onClick={handleClick} className='btn'>Checkout</button>
              </li>
            </ul>
          </div>
        </div>
      </Wrapper>
      <div className='footer'>
        <Footer />
      </div>
    </Container>
  )
}

export default Cart
