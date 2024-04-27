import React from 'react';
import { BsRCircle } from 'react-icons/bs';
import { CgMail } from 'react-icons/cg';
import { FaLocationDot } from 'react-icons/fa6';
import { IoMdCall } from 'react-icons/io';
import footerImage from '../../Assets/footer3.jpg';

const Footer = () => {
  return (
    <div className='bg-slate-50 '>
      {/* Background image section */}
      <div className='h-80 md:h-96 lg:h-120 flex justify-center items-center'
        style={{
          backgroundImage: `url(${footerImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className='text-center text-white'>
          <p className='font-bold text-4xl mt-4 md:mt-10 '>Get Inspiration For Your Next Trip</p>
          <p className='text-xl mt-2 md:mt-4'>Read About Wonderful Adventures We Love Most</p>
        </div>
      </div>

      {/* Main content section */}
      <div className='py-8 px-4 md:py-12 md:px-8 lg:px-40    '>
        {/* Go Further With The Tour Arc App section */}
        <div className=''>
          <p className='text-xl font-bold text-sky-700'>Go Further With The Tour Arc App</p>
          <p className='mt-1'>Enjoy Savings On Chosen Hotels And Flights When You Book Through The TourArc Website.</p>
          <p className='mt-1'>Additionally, Earn One Key Cash For Every Booking Made Through The App.</p>
          <p className='mt-1 lg:pb-4'>Secured By XYZ GTP</p>
        </div>
        <hr ></hr>
        {/* Footer sections */}
        <div className='flex justify-center space-x-10 md:space-x-12 lg:space-x-24  mt-8 md:mt-12'>
          {/* About Us */}
          <div className='text-left lg:space-y-1 md:space-y-1 '>
            <p className='font-bold text-lg'>About Us</p>
            <p className='mt-2 text-base'>Our Story</p>
            <p className='text-base'>Work With Us</p>
            <p className='text-base'>Press & Media</p>
            <p className='text-base'>Privacy & Security</p>
          </div>

          {/* We Offer */}
          <div className='text-left lg:space-y-1'>
            <p className='font-bold text-lg'>We Offer</p>
            <p className='mt-2 text-base'>Trip Sponsorship</p>
            <p className='text-base'>Last Minute Flights</p>
            <p className='text-base'>Best Deals</p>
            <p className='text-base'>AI Driven Search</p>
          </div>

          {/* Headquarters */}
          <div className='text-left lg:space-y-1'>
            <p className='font-bold text-lg'>Headquarters</p>
            <p className='mt-2 text-base'>England</p>
            <p className='text-base'>France</p>
            <p className='text-base'>Canada</p>
            <p className='text-base'>Iceland</p>
          </div>

          {/* Travel Blogs */}
          <div className='text-left lg:space-y-1'>
            <p className='font-bold text-lg'>Travel Blogs</p>
            <p className='mt-2 text-base'>Bali Travel Guide</p>
            <p className='text-base'>Sri Travel Guide</p>
            <p className='text-base'>Peru Travel Guide</p>
            <p className='text-base'>Swiss Travel Guide</p>
          </div>

          {/* Activities */}
          <div className='text-left lg:space-y-1'>
            <p className='font-bold text-lg'>Activities</p>
            <p className='mt-2 text-base'>Tour Leading</p>
            <p className='text-base'>Cruising & Sailing</p>
            <p className='text-base'>Camping</p>
            <p className='text-base'>Kayaking</p>
          </div>

          {/* Service */}
          <div className='text-left lg:space-y-1'>
            <p className='font-bold text-lg'>Service</p>
            <p className='mt-2 text-base'>Report Error</p>
            <p className='text-base'>Ask Online</p>
            <p className='text-base'>Travel Insurance</p>
          </div>
        </div>

       
      </div>
        {/* Bottom section */}
        <div className='flex justify-center items-center bg-gray-200 w-screen h-[50px] space-x-4 '>
          <div className='flex items-center space-x-1'>
            <BsRCircle color='#4c94c2'  className='text-black' />
            <p className='text-black'>Copyright TourArc</p>
          </div>
          <div className='flex items-center space-x-1'>
            <CgMail color='#4c94c2' className='text-black' />
            <p className='text-black'>fsdsalman12.sk@gmail.com</p>
          </div>
          <p className='text-black'>TourArc: Seamless Journeys, Unrivalled Travel! Wisdom!</p>
          <div className='flex items-center space-x-1'>
            <FaLocationDot color='#4c94c2'  className='text-black' />
            <p className='text-black'>ABC Country XYZ City</p>
          </div>
          <div className='flex items-center space-x-1'>
            <IoMdCall color='#4c94c2' className='text-black' />
            <p className='text-black'>+92-02939283</p>
          </div>
        </div>
    </div>
  );
};

export default Footer;
