import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import 'bootstrap/dist/css/bootstrap.min.css'
import { ProductAmountContainer } from '../cart/styles/cart'
import axios from 'axios'

const Title = styled.h1`
  text-align: center;
  padding-bottom: 60px;
  &:after {
    content: '';
    display: block;
    width: 100px;
    height: 3px;
    border: 1px solid #000;
    background-color: #000;
    margin: 0 auto;
  }
`

const Event = () => {
  const [data, setData] = useState([])
  const [constant, setConstant] = useState([])
  useEffect(() => {
    const result = axios.get('http://localhost:3001/api/events').then((res) => {
      setData(res.data)
    })
  }, [constant])

  return (
    <React.Fragment>
      <div style={{ backgroundColor: '#EFEFEF', padding: '120px 0 200px 0' }}>
        <Title>Events</Title>
        <div className='container'>
          <div className='row'>
            {data.map((item) => {
              return (
                <div className='col-sm'>
                  <div class='card'>
                    <img
                      className='card-img-top'
                      src={item.Image}
                      alt='...'
                    />
                    <div className='card-body'>
                      <h5 className='card-title'><b>{item.Event_name}</b></h5>
                      <p className='card-text'>
                        {item.description}
                      </p>
                      <h6 className='card-text'><b>Start Date:</b>{item.Event_start_date.substring(0,10)}</h6>
                      <h6 className='card-text'><b>End Date:</b>{item.Event_end_date.substring(0,10)}</h6>
                    </div>
                  </div>
                </div>
              )
            })}
            {/*
            <div className="col-sm">
            <div class="card">
                <img class="card-img-top" src="https://images.pexels.com/photos/2121661/pexels-photo-2121661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="..." height={"100%"} />
                <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <h6 class="card-text">Host Artist:</h6>
                <h6 class="card-text">Start Date:</h6>
                <h6 class="card-text">End Date:</h6>
                </div>
            </div>
            </div>
            <div className="col-sm">
            <div class="card">
                <img class="card-img-top" src="https://images.pexels.com/photos/2121666/pexels-photo-2121666.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="..." width={"50px"}/>
                <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <h6 class="card-text">Host Artist:</h6>
                <h6 class="card-text">Start Date:</h6>
                <h6 class="card-text">End Date:</h6>
                </div>
            </div>
            </div>
            */}
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Event
