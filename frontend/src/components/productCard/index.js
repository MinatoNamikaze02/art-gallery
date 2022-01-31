import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './styles/productcard.css'

function ProductCard({ item, ...restProps }) {
  const [data, setData] = useState([])
  const [cartVal, setCartVal] = useState(0)
  const [constant, setConstant] = useState(0)



  useEffect(async () => {
    const result = await axios.get(
      'http://localhost:3001/api/products/' + item.id,
      {
        title: item.title,
      }
    )
    setData(result.data)
  }, [constant])

  const listItems = data.map((item) => (
    <div className='card' key={item.id}>
      <h2>{item.Art_name}</h2>
      <div className='card_img'>
        <img src={item.Front_view} />
      </div>
      <div className='card_header'>
        <h2>{item.Art_name}</h2>
        <p>{item.Art_description}</p>
        <p className='price'>
          {item.Price}
          <span>$</span>
        </p>
        <div className='btn' onClick={() => {
          localStorage.setItem(item.Art_name, JSON.stringify(item))
        }}>Add to cart</div>
      </div>
    </div>
  ))
  return <div className='main_content'>{listItems}</div>
}

export default ProductCard
