import React from 'react'
import footerimage from "../../Assets/footer3.jpg"
const Footer = () => {
  return (
   <div className='h-full bg-red-200   '>
    <div
    className="w-screen h-[350px] flex justify-center items-center"
    style={{
      backgroundImage: `url(${footerimage})`,
      backgroundSize: 'cover', 
      backgroundPosition: 'center', 
    }}
  >
    <div className=" h-full w-full">
    <div>
        <p className='font-bold text-4xl text-white mt-[70px] ms-[40px]  '>Get Inspiration For Your Next Trip</p>
        <p className='font-medium text-xl  text-white ms-[42px]'>Read About Wonderful Andventures We Love Most</p>
    </div>
    <div className='flex justify-end'>
        <p className=' text-4xl font-bold  text-white mt-10 me-[25px]'>Difficult Roads Lead To Beautiful Destination</p>
    </div>
    </div>
    
  </div>
  <div>
    <p>Go Further With The Tour Arc App</p>
  </div>
  <div className='flex justify-center space-x-20 '>
    <div>
     <p>About Us</p>
     <p>Our Story</p>
     <p>Work With Us</p>
     <p>Press & Media</p>
     <p>Privacy & Security</p>
    </div>
    <div>
        <p>We Offer</p>
        <p>Trip Sponsorship</p>
        <p>Last Minute Flights</p>
        <p>Best Deals</p>
        <p>Ai Driven Search</p>
    </div><div>
        <p>Headquarters</p>
        <p>England</p>
        <p>France</p>
        <p>Canada</p>
        <p>Iceland</p>
    </div><div>
        <p>Travel Blogs</p>
        <p>Bali Travil Guide</p>
        <p>Sri Travel Guide</p>
        <p>Peru Travil Guide</p>
        <p>Swiss Travil Guide</p>
    </div><div>
        <p>Activities</p>
        <p>Tour Leading</p>
        <p>Cruising & Sailing</p>
        <p>Camping</p>
        <p>Kayaking</p>
        
    </div><div>
        <p>Service</p>
        <p>Report Error</p>
        <p>Ask Online</p>
        <p>Travel Insurance</p>
    </div>
  </div>
  </div>
  )
}

export default Footer