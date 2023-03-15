import React from 'react'
import NavBar from "../components/Navbar"
import Header from "../components/Header"
import MailList from '../components/MailList'
import Footer from '../components/Footer'

function Hotel() {
  return (
    <div>
      <NavBar/>
      <Header/>
      <div className='hotelContainer'></div>
      <MailList/>
      <Footer/>
    </div>
  )
}

export default Hotel
