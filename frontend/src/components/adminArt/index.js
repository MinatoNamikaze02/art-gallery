import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom'
import { Container, Item } from './styles/adminArt'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Link} from 'react-router-dom'
function AdminArt() {
  const history = useHistory()
  const [art, setArt] = useState([])
  const [constant, setConstant] = useState(0)
  useEffect(async () => {
    await axios
      .get('http://localhost:3001/api/allArt')
      .then((res) => {
        console.log(res.data)
        setArt(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [constant])

  return (
    <>
      <Container>
        <Link to='/adminDashboard/art/add'><button className='btn btn-primary'>ADD ART</button></Link>
      </Container>
      {art.map((item) => {
        return (
          <Container>
            <Item>
              <h1>{item.Art_name}</h1>
              <p>{item.Art_ID}</p>
              <p>{item.Date_of_creation}</p>
              <button
                onClick={() => {
                  history.push({
                    pathname: '/adminDashboard/editArt',
                    state: {
                        id: item.Art_ID,
                    }
                  })
                }}
                className='btn'
              >
                EDIT
              </button>
              <button
                onClick={async () => {
                  const res = await axios.delete(
                    `http://localhost:3001/api/deleteArt/${item.Art_ID}`
                  )
                  console.log(res)
                  if (res.data.ok === true) {
                    alert('Art Deleted')
                    setConstant(constant + 1)
                  }
                }}
                className='btn'
              >
                DELETE
              </button>
            </Item>
          </Container>
        )
      })}
    </>
  )
}

export default AdminArt
