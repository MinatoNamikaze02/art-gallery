import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Container, Item } from './styles/adminArtist'
import {Link, useHistory} from 'react-router-dom'
function AdminArtist() {
  const history = useHistory()
  const [artists, setArtists] = useState([])
  const [constant, setConstant] = useState(0)
  useEffect(async () => {
    const res = await axios.get('http://localhost:3001/api/allArtists')
    console.log(res.data)
    setArtists(res.data)
  }, [constant])

  return (
    <>
      <Container>
        <Link to='/adminDashboard/artist/add'>
          <button className='btn btn-primary'>ADD NEW</button>
        </Link>
      </Container>
      {artists.map((item) => {
        return (
          <Container>
            <Item>
              <h1>{item.Artist_First_name}{" "}{item.Artist_Last_name}</h1>
              <p><b>ID:</b>{item.Artist_ID}</p>
              <p><b>Birth Date:</b>{item.Birth_date.substring(0,10)}</p>
              <p><b>Description:</b>{item.About_description}</p>
              <p><b>Style:</b>{" "}{item.Style}</p>
              <button
                onClick={() => {
                  history.push({
                    pathname: '/adminDashboard/artist/update',
                    state: {
                      id: item.Artist_ID,
                    },
                  })
                }}
                className='btn'
              >
                EDIT
              </button>
              <button
                onClick={async () => {
                  const res = await axios.delete(
                    `http://localhost:3001/api/artist/delete/${item.Artist_ID}`
                  )
                  console.log(res)
                  if (res.data.ok === true) {
                    alert('Art Deleted')
                    setConstant(constant + 1)
                  }else{
                      alert(
                        'Cannot delete artist with art. Please delete the art first'
                      )
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

export default AdminArtist
