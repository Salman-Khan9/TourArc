import HotelSearch from '../../components/Search/HotelSearch'
import Footer from '../../components/Footer/Footer'
import Navbar from '../../components/Navbar/Navbar'
import React from 'react'
import Specialoffers from '../../components/SpecialOffers/Specialoffers'
import ExploreStays from '../../components/ExploreStays/ExploreStays'
import HighestReviewed from '../../components/HighestReviewd/HighestReviewed'

const Home = () => {
  return (
    <div className='w-screen h-screen p-0 m-0 overflow-x-hidden    '>
      <Navbar/>
      <HotelSearch/>
      <Specialoffers/>
      <ExploreStays/>
      <HighestReviewed/>
     <Footer/>
    </div>
  )
}

export default Home