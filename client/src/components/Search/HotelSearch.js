import React from 'react';
import landingimage from "../../Assets/landing.jpg";
import { FaCity } from "react-icons/fa";
import { IoMdPeople } from "react-icons/io";
import { RiStarSLine } from "react-icons/ri";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
  } from "../../components/ui/select"
  
const HotelSearch = () => {
  return (
    <div className=" h-[350px] w-screen">
      <div
        className=" h-[340px] "
        style={{

          backgroundImage: `url(${landingimage})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
      
      {/* Text content */}
      <p className="w-[500px] h-[200px] font-bold text-5xl text-white   flex items-end justify-end ms-20 ">
        Discover Your Trip Worldwide !
      </p>
      <div className='w-screen  flex justify-center  mt-28'>
      <div className='w-screen   flex   items-center border-1 justify-center   '>
      <Select >
      <SelectTrigger className="w-[450px] rounded-s-md border-2 border-gray-300  text-black">
        <div className='flex items-center space-x-1'>
            <div><FaCity/></div>
        <SelectValue placeholder="Select a City" />

        </div>
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>North America</SelectLabel>
          <SelectItem value="est">Eastern </SelectItem>
          <SelectItem value="cst">Central </SelectItem>
          <SelectItem value="mst">Mountain </SelectItem>
          <SelectItem value="pst">Pacific </SelectItem>
          <SelectItem value="akst">Alaska </SelectItem>
          <SelectItem value="hst">Hawaii</SelectItem>
        </SelectGroup>
        <SelectGroup>
          <SelectLabel>Europe & Africa</SelectLabel>
          <SelectItem value="gmt">Greenwich </SelectItem>
          <SelectItem value="cet">Central  </SelectItem>
          <SelectItem value="eet">Eastern  </SelectItem>
          <SelectItem value="west">
            Western European Summer Time (WEST)
          </SelectItem>
          <SelectItem value="cat">Central Africa Time (CAT)</SelectItem>
          <SelectItem value="eat">East Africa Time (EAT)</SelectItem>
        </SelectGroup>
        <SelectGroup>
          <SelectLabel>Asia</SelectLabel>
          <SelectItem value="msk">Moscow </SelectItem>
          <SelectItem value="ist">India </SelectItem>
          <SelectItem value="cst_china">China </SelectItem>
          <SelectItem value="jst">Japan </SelectItem>
          <SelectItem value="kst">Korea </SelectItem>
          <SelectItem value="ist_indonesia">
            Indonesia Central 
          </SelectItem>
        </SelectGroup>
        <SelectGroup>
          <SelectLabel>Australia & Pacific</SelectLabel>
          <SelectItem value="awst">
            Australian Western
          </SelectItem>
          <SelectItem value="acst">
            Australian Central
          </SelectItem>
          <SelectItem value="aest">
            Australian Eastern 
          </SelectItem>
          <SelectItem value="nzst">New Zealand </SelectItem>
          <SelectItem value="fjt">Fiji Time </SelectItem>
        </SelectGroup>
        <SelectGroup>
          <SelectLabel>South America</SelectLabel>
          <SelectItem value="art">Argentina Time </SelectItem>
          <SelectItem value="bot">Bolivia Time </SelectItem>
          <SelectItem value="brt">Brasilia Time </SelectItem>
          <SelectItem value="clt">Chile </SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
    <Select>
  <SelectTrigger className="w-[340px] border-2 border-gray-300">
    <div className='flex items-center space-x-1'>
        <div><RiStarSLine/></div>
    <SelectValue placeholder="Hotel Rating" />

    </div>
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="5star">5 Star</SelectItem>
    <SelectItem value="4Star">4 Star</SelectItem>
    <SelectItem value="3Star">3 Star</SelectItem>
  </SelectContent>
</Select>
<Select>
  <SelectTrigger className="w-[340px] border-2  border-gray-300 ">
    <div className='flex items-center space-x-1'>
        <div><IoMdPeople/></div>
    <SelectValue placeholder="Room Space" />

    </div>
  </SelectTrigger>
  <SelectContent >
    <SelectItem  value="8">8 Person Room</SelectItem>
    <SelectItem value="6">6 Person Room</SelectItem>
    <SelectItem value="4">4 Person Room </SelectItem>
    <SelectItem value="2">2 Person Room </SelectItem>
  </SelectContent>
</Select>
<button className='bg-sky-700 rounded-e-md text-white p-[11px] w-[200px] border-2 border-sky-800  px-8 font-medium'>Search</button>
      </div>
      </div>
      </div>

    </div>
  );
};

export default HotelSearch;
