import Navbar from '../../components/Navbar/Navbar'
import { Set_hotels, selecthotels } from '../../Redux/Slices/HotelSlice'
import axios from 'axios'
import { CiLocationOn } from "react-icons/ci";
import { BsCupHot } from "react-icons/bs";
import { MdOutlinePerson } from "react-icons/md";
import { IoLeafOutline } from "react-icons/io5";
import { FaGreaterThan } from "react-icons/fa6";

import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from "../../components/ui/pagination"

import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Footer from '../../components/Footer/Footer'
import HotelSearch from '../../components/Search/HotelSearch'
import { selectfilteredhotels } from '../../Redux/Slices/SearchSlice';

const Hotel = () => {
  const hotels = useSelector(selecthotels)
  console.log(hotels)
 const filteredhotels = useSelector(selectfilteredhotels)
  const cardsperpage = 8
  const endpagination = hotels.length
  const [startindex, setstartindex] = useState(0)
  const [endindex, setendindex] = useState(cardsperpage)
  console.log(endindex)
    const dispatch = useDispatch()
    useEffect(() => {
      const fetchdata =async ()=>{
        try {
            
            const data = await axios.get("http://localhost:5000/hotels")
           dispatch(Set_hotels(data.data))
        } catch (error) {
            console.log(error)
        }
      }
      fetchdata()
    }, [dispatch])
  return (
    <div className='w-screen h-screen p-0 m-0 overflow-x-hidden '>
        <Navbar></Navbar>
        <HotelSearch></HotelSearch>
        
        <div className='w-screen h-[2800px] flex justify-center mt-8'>
          
        <div className = 'w-[1300px] h-auto flex flex-wrap   '>
        {filteredhotels.slice(startindex,endindex).map((data)=>(
          <div className='w-[1300px] h-[280px] flex m-2 border border-gray-00  rounded-lg shadow-lg mb-8 ' >
            
            <img className='w-[250px] h-[260px] rounded-s-lg  ms-2 me-6 mt-2' src={data.hotelpic} alt='loading'/>
             <div className='space-y-10'>
            <div className='flex flex-col'>
            <div className='font-bold text-2xl mt-4 '>{data.hotelname}</div>
            <p className='flex h-[25px] items-center '> <CiLocationOn className='me-2'></CiLocationOn>Located in {data.city}</p>
            <p className='flex h-[25px] items-center '><BsCupHot className='me-2'/>Breakfast Included</p>
            <p className='flex h-[25px] items-center '><MdOutlinePerson className='me-2'/>Room Space of {data.roomspace} Persons</p>
        </div>
        <div className='w-[1000px] flex  justify-between'>
        

        <div>
          <p className='w-[300px]'>Experience Unique Opportunity</p>
          <p className='w-[300px]'>Standard Rooms</p>
          <p className='w-[300px]'>{data.rating} Star Rating</p>
          </div>
          <div className='  relative bottom-[30px] space-y-1 me-4' >
          <p className='text-3xl font-bold text-green-600 flex justify-center'> $143</p>
          <p> Include Taxes and Charges</p>
          <p className=' text-green-600 flex h-[25px] items-center text-sm justify-center '><IoLeafOutline/> Trip Sustainable Level 5</p>

         <button className='font-bold text-2xl text-blue-800 flex items-center h-[25px] '>See Availability<FaGreaterThan className='ms-2 mt-2' size={22}/>  </button>
        
          </div>
          
        </div>
        </div>
        </div>

    ))}
    <Pagination>
  <PaginationContent>
    <PaginationItem>
      <PaginationPrevious
      className={startindex ===0? "pointer-events-none opacity-50 ":undefined}
      onClick={()=>{
        setstartindex(startindex - cardsperpage)
        setendindex(endindex -  cardsperpage)
      }} />
    </PaginationItem>

    <PaginationItem>
      <PaginationNext
      className={
        endindex === endpagination?"pointer-events-none opacity-50 ": undefined
      }
      onClick={()=>{
       setstartindex(startindex + cardsperpage)
       setendindex(endindex + cardsperpage)
      }} />
    </PaginationItem>
  </PaginationContent>
</Pagination>
    </div>
    

    </div>
        <Footer></Footer>
    
    </div>
  )
}

export default Hotel