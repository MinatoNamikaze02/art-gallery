import axios from 'axios'
import React, {useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Container } from './styles/addArt'

function AddArt() {
  const history = useHistory()
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [date, setDate] = useState('')
  const [height, setHeight] = useState('')
  const [width, setWidth] = useState('')
  const [length, setLength] = useState('')
  const [orientation, setOrientation] = useState('')
  const [price, setPrice] = useState('')
  const [front, setFront] = useState('')

  const handleOnSubmit = (e) => {

    e.preventDefault()
    const result = axios
      .post(`http://localhost:3001/api/art/upload`, {
        id : Date.now(),
        name,
        description,
        date,
        price,
        front,
        height,
        width,
        length,
        orientation,
      })
      .then((res) => {
        if (res.data.ok === true) {
          alert('Art Added')
          history.push('/adminDashboard/art')
        }
      })
  }

  return (
    <Container>
      <form onSubmit={handleOnSubmit}>
        <label>Art Name</label>
        <input
          type='text'
          value={name}
          onChange={(e) => {
            setName(e.target.value)
          }}
        />
        <label>Date of Creation</label>
        <input type='text' value={date} onChange={(e) => {
          setDate(e.target.value)
        }} />
        <label>Art Description</label>
        <textarea
          value={description}
          onChange={(e) => {
            setDescription(e.target.value)
          }}
        />
        <label>Price</label>
        <input
          type='text'
          value={price}
          onChange={(e) => {
            setPrice(parseFloat(e.target.value))
          }}
        />
        <label>Front View</label>
        <input
          type='text'
          value={front}
          onChange={(e) => {
            setFront(e.target.value)
          }}
        />
        <label>Height</label>
        <input type='text' value={height} onChange={(e)=>{
          setHeight(e.target.value)
        }}/>
        <label>Width</label>
        <input type='text' value={width}  onChange={(e)=>{
          setWidth(e.target.value)
        }}/>
        <label>Length</label>
        <input type='text' value={length} onChange={(e)=>{
          setLength(e.target.value)
        }}/>
        <label>Orientation</label>
        <input type='text' value={orientation} onChange={(e)=>{
          setOrientation(e.target.value)
        }}/>
        <button type='submit' className='btn btn-primary'>
          Add
        </button>
      </form>
    </Container>
  )
}

export default AddArt
