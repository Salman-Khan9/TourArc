import Trip from '../../components/Trip/Trip'
import Navbar from '../../components/Navbar/Navbar'
import React from 'react'
import Footer from '../../components/Footer/Footer'

const TripPage = () => {
  return (
    <div className='w-screen h-screen p-0 m-0 overflow-x-hidden    '>
        <Navbar></Navbar>
        <Trip></Trip>
        <Footer></Footer>
    </div>
  )
}

export default TripPage