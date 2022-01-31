import axios from 'axios'
import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Container } from './styles/addArtist'

function AddArt() {
  const history = useHistory()
  const [Fname, setFName] = useState('')
  const [Lname, setLName] = useState('')
  const [description, setDescription] = useState('')
  const [date, setDate] = useState('')
  const [address1, setAddress1] = useState('')
  const [address2, setAddress2] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [zipCode, setZipCode] = useState('')
  const [style, setStyle] = useState('')
  
  const [photo, setPhoto] = useState('')

  const handleOnSubmit = (e) => {
    e.preventDefault()
    const result = axios
      .post(`http://localhost:3001/api/artist/upload`, {
        id: Math.floor(Date.now() / 5),
        Fname,
        Lname,
        description,
        date,
        photo,
        address1,
        address2,
        email,
        password,
        zipCode,
        style,
      })
      .then((res) => {
        if (res.data.ok === true) {
          alert('Artist Added')
          history.push('/adminDashboard/artist')
        }
      })
  }

  return (
    <Container>
      <form onSubmit={handleOnSubmit}>
        <label>Artist firstName</label>
        <input
          type='text'
          value={Fname}
          onChange={(e) => {
            setFName(e.target.value)
          }}
        />
        <label>Artist lastName</label>
        <input
          type='text'
          value={Lname}
          onChange={(e) => {
            setLName(e.target.value)
          }}
        />
        <label>Birth Date</label>
        <input
          type='text'
          value={date}
          onChange={(e) => {
            setDate(e.target.value)
          }}
        />
        <label>About</label>
        <textarea
          value={description}
          onChange={(e) => {
            setDescription(e.target.value)
          }}
        />
        <label>Photo</label>
        <input
          type='text'
          value={photo}
          onChange={(e) => {
            setPhoto(e.target.value)
          }}
        />
        <label>Address 1</label>
        <input
          type='text'
          value={address1}
          onChange={(e) => {
            setAddress1(e.target.value)
          }}
        />
        <label>Address 2</label>
        <input
          type='text'
          value={address2}
          onChange={(e) => {
            setAddress2(e.target.value)
          }}
        />
        <label>Zip Code</label>
        <input
          type='text'
          value={zipCode}
          onChange={(e) => {
            setZipCode(e.target.value)
          }}
        />
        <label>Style</label>
        <input
          type='text'
          value={style}
          onChange={(e) => {
            setStyle(e.target.value)
          }}
        />
        <label>email</label>
        <input
          type='text'
          value={email}
          onChange={(e) => {
            setEmail(e.target.value)
          }}
        />
        <label>password</label>
        <input
          type='text'
          value={password}
          onChange={(e) => {
            setPassword(e.target.value)
          }}
        />
        <button type='submit' className='btn btn-primary'>
          Add
        </button>
      </form>
    </Container>
  )
}

export default AddArt
