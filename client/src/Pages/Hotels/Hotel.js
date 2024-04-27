import Navbar from '../../components/Navbar/Navbar'
import { Set_hotels, selecthotels } from '../../Redux/Slices/HotelSlice'
import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Footer from '../../components/Footer/Footer'
import HotelSearch from '../../components/Search/HotelSearch'

const Hotel = () => {
    const dispatch = useDispatch()
    const hotels = useSelector(selecthotels)
    useEffect(() => {
      const fetchdata =async ()=>{
        try {
            
            const data = await axios.get("http://localhost:5000/hotels")
            console.log(data.data)
           dispatch(Set_hotels(data.data))
        } catch (error) {
            console.log(error)
        }
      }
      fetchdata()
    }, [])
    console.log(hotels)
  return (
    <div className='w-screen h-screen p-0 m-0 overflow-x-hidden '>
        <Navbar></Navbar>
        <HotelSearch></HotelSearch>
        {hotels.map((data)=>(
        <div>{data.hotelname}</div>
    ))}
        <Footer></Footer>
    
    </div>
  )
}

export default Hotel