import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { Container } from './styles/editArt'

function EditArt() {
  const location = useLocation()
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [price, setPrice] = useState(0)
  const [front, setFront] = useState('')
  const [art, setArt] = useState({})
  const [constant, setConstant] = useState(0)
  useEffect(async () => {
    let id = ''

    if (location.state) {
      id = location.state.id
    }
    console.log(id)
    const result = await axios.get(`http://localhost:3001/api/getArt/${id}`)
    setArt(result.data)
  }, [constant])

  const handleOnSubmit = (e) => {
    e.preventDefault()
    const result = axios
      .put(`http://localhost:3001/api/updateArt/${art.Art_ID}`, {
        name,
        price,
        description,
        front,
      })
      .then((res) => {
        if (res.data.ok === true) {
          alert('Art Updated')
          setConstant(constant + 1)
        }
      })
  }

  return (
    <Container>
      <form onSubmit={handleOnSubmit}>
        <label>Art Name</label>
        <input
          type='text'
          placeholder={art.Art_name}
          onChange={(e) => {
            setName(e.target.value)
          }}
        />
        <label>Art ID</label>
        <input type='text' value={art.Art_ID} disabled={true} />
        <label>Date of Creation</label>
        <input type='text' value={art.Date_of_creation} disabled={true} />
        <label>Art Description</label>
        <textarea
          placeholder={art.Art_description}
          onChange={(e) => {
            setDescription(e.target.value)
          }}
        />
        <label>Price</label>
        <input
          type='text'
          placeholder={art.Price}
          onChange={(e) => {
            setPrice(parseFloat(e.target.value))
          }}
        />
        <label>Front View</label>
        <input
          type='text'
          placeholder={art.Front_view}
          onChange={(e) => {
            setFront(e.target.value)
          }}
        />
        <label>Height</label>
        <input type='text' value={art.Height} disabled={true} />
        <label>Width</label>
        <input type='text' value={art.Width} disabled={true} />
        <label>Length</label>
        <input type='text' value={art.Length} disabled={true} />
        <label>Orientation</label>
        <input type='text' value={art.Orientation} disabled={true} />
        <button type='submit' className='btn btn-primary'>
          Edit
        </button>
      </form>
    </Container>
  )
}

export default EditArt
