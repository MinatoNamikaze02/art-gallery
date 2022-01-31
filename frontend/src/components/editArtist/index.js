import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useLocation, useHistory } from 'react-router-dom'
import { Container } from './styles/editArtist'

function EditArtist() {
  const history = useHistory()
  const location = useLocation()
  const [constant , setConstant] = useState(0)
  const [art , setArt] = useState([])
  const [address1, setAddress1] = useState('')
  const [address2, setAddress2] = useState('')
  const [zipCode, setZipCode] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [style, setStyle] = useState('')
  const [birthDate, setBirthDate] = useState('')
  const [aboutDescription, setAboutDescription] = useState('')
  const [photo, setPhoto] = useState('')
  const [Fname, setFName] = useState('')
  const [Lname, setLName] = useState('')
  useEffect(async () => {
    let id = ''

    if (location.state) {
      id = location.state.id
    }
    console.log(id)
    const result = await axios.get(`http://localhost:3001/api/getArtist/${id}`)
    setArt(result.data)
    console.log(art)
  }, [constant])

  const handleOnSubmit = (e) => {
    e.preventDefault()
    const result = axios
      .put(`http://localhost:3001/api/updateArtist/${art.Artist_ID}`, {
        Fname,
        Lname,
        address1,
        address2,
        zipCode,
        email,
        password,
        style,
        birthDate,
        aboutDescription,
        photo,
      })
      .then((res) => {
        if (res.data.ok === true) {
          alert('Artist Updated')
          setConstant(constant + 1)
          history.push('/adminDashboard/artist')
        }
      })
  }

  return (
    <Container>
      <form onSubmit={handleOnSubmit}>
        <label>Artist First Name</label>
        <input
          type='text'
          placeholder={art.Artist_First_name}
          onChange={(e) => {
            setFName(e.target.value)
          }}
        />
         <label>Artist Last Name</label>
        <input
          type='text'
          placeholder={art.Artist_Last_name}
          onChange={(e) => {
            setLName(e.target.value)
          }}
        />
        <label>Artist ID</label>
        <input type='text' value={art.Artist_ID} disabled={true} />
        <label>Date of Birth</label>
        <input type='text' placeholder={art.Birth_date} onChange={(e) => {
            setBirthDate(e.target.value)
        }} />
        <label>Photo</label>
        <input type='text' placeholder={art.Photo} onChange={(e) => {
            setPhoto(e.target.value)
        }} />
        <label>Art Description</label>
        <textarea
          placeholder={art.About_description}
          onChange={(e) => {
            setAboutDescription(e.target.value)
          }}
        />
        <label>Style</label>
        <input
          type='text'
          placeholder={art.Style}
          onChange={(e) => {
            setStyle(e.target.value)
          }}
        />
        <label>Address1</label>
        <input type='text' placeholder={art.Artist_Address_line_1}  onChange={(e) => {
            setAddress1(e.target.value)
          }} />
        <label>Address2</label>
        <input type='text' placeholder={art.Artist_Address_line_2} onChange={(e) => {
            setAddress2(e.target.value)
          }} />
        <label>Zip code</label>
        <input type='text' placeholder={art.Artist_zip_code}  onChange={(e) => {
            setZipCode(e.target.value)
          }}/>
        <label>Email</label>
        <input type='text' placeholder={art.Artist_email} onChange={(e) => {
            setEmail(e.target.value)
          }} />
        <label>Password</label>
        <input type='text' placeholder={art.Artist_password}  onChange={(e) => {
            setPassword(e.target.value)
          }}/>
        <button type='submit' className='btn btn-primary'>
          Edit
        </button>
      </form>
    </Container>
  )
}

export default EditArtist
