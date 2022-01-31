import React from 'react'

import {AdminDash, Footer, MainNav, Navbar} from '../components'

import '../App.css'

function AdminDashboard() {
    return (
        <div className='dashboard'>
        <Navbar page="dashboard"/>
           <AdminDash /> 
        </div>
    )
}

export default AdminDashboard
