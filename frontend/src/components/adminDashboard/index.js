import React from 'react'
import {Container, Row, Item} from './styles/adminDash'
import {Link} from 'react-router-dom'
function AdminDashboard() {
    return (
        <Container>
            <Row>
                <Item>
                    <Link to='/adminDashboard/art'>Manage Art-Stocks</Link>
                </Item>
                <Item>
                    <Link to='/adminDashboard/artist'>Manage Artist Profiles</Link>
                </Item>
            </Row>
        </Container>
    )
}

export default AdminDashboard
