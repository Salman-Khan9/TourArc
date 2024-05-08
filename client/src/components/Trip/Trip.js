import React from 'react'
import planeimage from '../../Assets/plane.jpg'
import { Link } from 'react-router-dom'
import map from '../../Assets/map.jpg'
const Trip = () => {
  return (
    <div className='w-screen h-[2000px]   bg-gray-50'>
      <div className='flex justify-center'>
      <div className='w-[1350px] h-[100px]  items-center bg-gray-50'>
            <div className='space-y-6'>
        <p className='font-bold text-sky-700 text-2xl'>Which Exciting Place Is Your Next Adventure Taking You?</p>
        <p className='font-medium text-sky-700 text-sm'>Discover exclusive Genius rewards wherever your journey takes you!</p>
        </div>
    </div></div> 

          <div className='bg-sky-950   w-screen h-[440px]    '>
        <div
        className="w-screen h-[440px] opacity-60   "
        style={{
        
          backgroundImage: `url(${planeimage})`,
        backgroundPositionY:'25%',
          backgroundSize: "cover",
        }}
      >      
      </div>
      <div className='w-[450px] h-[400px]  relative bottom-[400px] text-white  flex flex-col justify-center ms-20 space-y-4     '> 
      <p className="font-bold text-5xl  " >
      Make Your Travel Whishlist, We'll Do The Rest
      </p>
      <p className='font-bold text-lg ms-2 '>Special offers to suit your plan</p>
      </div>

    </div>
    <div className='w-screen h-[100px] flex justify-center mt-10 '>
    <div className='w-[1350px] flex justify-between me-10  '>
      <div className='space-y-4'>
      <p className='font-bold text-3xl '>Let's Travel Together</p>
    <p className=' text-lg'>Discover The Latest Offers And News And Start Planning Your Next Trip With Us.</p>
      </div>
      <Link to="/flight" className='w-[150px] h-[40px] border-2 rounded-md mt-6 border-sky-600 text-sky-700 font-bold flex justify-center items-center '>See All</Link>
    </div>
    </div>
    <div className='  w-screen h-[500px] bg-black    '>
    <div
        className="w-screen h-[500px] opacity-80  "
        style={{
        
          backgroundImage: `url(${map})`,
          backgroundPositionY:"65%",
          backgroundSize: "cover",
        }}
      >      
      </div>
      </div>
    </div>
   
  )
}

export default Trip