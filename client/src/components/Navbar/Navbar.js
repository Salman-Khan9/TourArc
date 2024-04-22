import React from 'react'
import logo from "../../Assets/logo.png"
import { RxQuestionMarkCircled } from "react-icons/rx";
import { Link } from 'react-router-dom';
import languageflag from "../../Assets/united-kingdom.png"
import { Input } from '../ui/input';
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
  } from "../../components/ui/popover"
  
const Navbar = () => {
  return (
    <div className='w-screen h-[180px] bg-gray-50'>
        <div className='w-full h-[80px] items-center flex mix-blend-multiply justify-center  '>
            <a href='/'><img  className='h-[50px] w-[140px] ms-6' src={logo} alt='Logo' /></a>
        <Link className='m-4' ><RxQuestionMarkCircled title='About-us' size={34} color='#4c94c2'></RxQuestionMarkCircled></Link>
      <Popover>
  <PopoverTrigger>
  <img title='Language' className='w-[30px] h-[30px]' src={languageflag} alt='English'></img>
  </PopoverTrigger>
  <PopoverContent><p>Language:English</p></PopoverContent>
</Popover>
      <div className='w-[800px] ms-5'><Input type="search" placeholder = "Search" ></Input></div>
        <div className='ms-[30px] space-x-2'>
        <Link to="/login" className='p-[5px] ps-[45px] pe-[45px] border-2 rounded border-sky-500 hover:shadow-xl font-medium hover:font-bold text-sky-700'>Login</Link>
        <Link to="/signup" className='p-[5px] ps-[45px] pe-[45px] border-2 rounded border-sky-500 hover:shadow-xl font-medium hover:font-bold  text-sky-700 '>Register</Link>
        </div>
        
        </div>

      <div className='flex justify-center space-x-3 mt-5'>
        <Link to="/trip"   className='py-1 px-10  bg-white    rounded-3xl border-2 border-gray-200 '>Trip</Link>
        <Link to="/deal" className='py-1 px-10  bg-white    rounded-3xl border-2 border-gray-200 '>%Deal</Link>
        <Link to='/' className='py-1 px-10  bg-white    rounded-3xl border-2 border-gray-200 '>Hotel</Link>
        <Link to="/flight" className='py-1 px-10  bg-white    rounded-3xl border-2 border-gray-200 '>Flight</Link>
        <Link to='/apartment' className='py-1 px-10  bg-white    rounded-3xl border-2 border-gray-200 '>Apartment</Link>
        <Link to='/camper' className='py-1 px-10  bg-white    rounded-3xl border-2 border-gray-200 '>Camper</Link>
      </div>
    </div>
  )
}

export default Navbar