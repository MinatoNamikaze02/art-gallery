import React from 'react'
import { MainNav, Payment, Footer, Announcements } from '../components'
import '../App.css'

function PaymentPage() {
  return (
    <>
      <MainNav />
      <Announcements />
      <Payment />
      <div className='footer'>
        <Footer />
      </div>
    </>
  )
}

export default PaymentPage
