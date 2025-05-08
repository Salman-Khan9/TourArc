import React, { useEffect, useState } from "react";
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
} from "../../components/ui/select";
import { useDispatch, useSelector } from "react-redux";
import { set_Search } from "../../Redux/Slices/SearchSlice";
import { selecthotels } from "../../Redux/Slices/HotelSlice";
import { Link } from "react-router-dom";

const HotelSearch = () => {
  const dispatch = useDispatch();
  const hotels = useSelector(selecthotels);
  const [city, setcity] = useState("");
  const [rating, setrating] = useState("");
  const [roomspace, setroomspace] = useState("");

  const handleCityChange = (value) => {
    setcity(value);
  };
  const handleRatingChange = (value) => {
    setrating(value);
  };
  const handleRoomSpaceChange = (value) => {
    setroomspace(value);
  };

  useEffect(() => {
    dispatch(set_Search({ hotels, city, rating, roomspace }));
  }, [dispatch, hotels, rating, roomspace, city]);

  const onsubmit = () => {
    dispatch(set_Search({ hotels, city, roomspace, rating }));
  };

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
        <p className=" font-bold text-[34px] lg:text-5xl text-blue-300 pt-10 ps-5 lg:ps-10 lg:pt-16 ">
          Discover Your Trip
          <br /> Worldwide !
        </p>
        <div className="w-screen  flex justify-center mt-40 lg:mt-32">
          <div className="w-screen   flex   items-center border-1 justify-center   ">
            <Select onValueChange={handleCityChange}>
              <SelectTrigger className="w-max gap-0 text-xs md:text-base p-1 lg:px-6 md:py-6 md:gap-10 rounded-s-md border-2 border-gray-300  text-black">
                <div className="flex items-center space-x-1">
                  <div>
                    <FaCity />
                  </div>
                  <SelectValue placeholder="Select a City" />
                </div>
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Cities</SelectLabel>
                  <SelectItem value="Peshawar">Peshawar </SelectItem>
                  <SelectItem value="Lahore">Lahore </SelectItem>
                  <SelectItem value="Karachi">Karachi </SelectItem>
                  <SelectItem value="Islamabad">Islamabad </SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
            <Select onValueChange={handleRatingChange}>
              <SelectTrigger className="w-max gap-0 text-xs md:text-base p-1 lg:px-6 md:py-6 md:gap-10 border-2 border-gray-300">
                <div className="flex items-center space-x-1">
                  <div>
                    <RiStarSLine />
                  </div>
                  <SelectValue placeholder="Hotel Rating" />
                </div>
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="5">5 Star</SelectItem>
                <SelectItem value="4">4 Star</SelectItem>
              </SelectContent>
            </Select>
            <Select onValueChange={handleRoomSpaceChange}>
              <SelectTrigger className="w-max gap-0 text-xs md:text-base p-1 lg:px-6 md:py-6 md:gap-10 border-2  border-gray-300 ">
                <div className="flex items-center space-x-1">
                  <div>
                    <IoMdPeople />
                  </div>
                  <SelectValue placeholder="Room Space" />
                </div>
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="8">8 Person Room</SelectItem>
                <SelectItem value="6">6 Person Room</SelectItem>
                <SelectItem value="4">4 Person Room </SelectItem>
                <SelectItem value="2">2 Person Room </SelectItem>
                <SelectItem value="1">1 Person Room </SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelSearch;
