import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import NoPage from '../pages/NoPage'

const NoPageLayout = () => {
  return (
    <div>
      <Navbar/>
      <NoPage/>
      <Footer/>
    </div>
  )
}

export default NoPageLayout
