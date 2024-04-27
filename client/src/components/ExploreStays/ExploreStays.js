import axios from 'axios'
import React, { useEffect, useState } from 'react'
import moment from "moment"
import { Link } from 'react-router-dom'
const ExploreStays = () => {
  const [data, setdata] = useState([])
 const [startdate, setstartdate] = useState("")
 const [enddate, setenddate] = useState("")
 

 useEffect(() => {
  
  function availabledate() {
    const start = moment(Date.now()).format('ddd D MMM ')
    const end = moment(Date.now() + 7*24*60*60*1000).format('ddd D MMM')
    setstartdate(start )
    setenddate(end )
    
   }
   availabledate()
 }, [])
 
 

  useEffect(() => {
    const fetchdata = async()=>{
      try {
        const data = await axios.get("http://localhost:5000/TDestinations")
        setdata(data.data)
      } catch (error) {
        console.log(error)
      }
    }
    fetchdata()
  }, [])
  
  return (
    <div className='w-screen h-[1300px] flex justify-center'>
      <div className='w-[1300px] h-[800px] space-y-2 '>
      <p className='text-3xl font-bold '>Explore Stays In Trending Destinations</p> 
      <p className='text-lg font-medium  '>Find Hot Stays!</p> 
      <div className='flex flex-wrap  '>
        {data.map((subdata)=>(
          <Link to="/*">
          <div className='border border-gray-300 m-2 p-2 rounded-lg shadow-lg w-[300px] h-[370px] hover:w-[310px] hover:h-[380px] transition-all' >
             <img className='w-full h-[220px] rounded-lg ' alt='Explore' src={subdata.picuri}></img>
             <p className='text-2xl font-bold '>{subdata.name}</p>
             <p className='text-lg font-bold text-gray-500 opacity-50'>SIDE</p>
             <p className='text-sm font-medium '>{startdate} - {enddate}</p>
             <p className='w-[280px] mt-2 text-sm mb-2'>A tour of the city and its surroundings led by a professional guide ...</p>
             

          </div>
          </Link>
        ))}
      </div>

      </div>
        </div>
         
  )
}

export default ExploreStays