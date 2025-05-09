import Navbar from "../../components/Navbar/Navbar";
import { Set_hotels, selecthotels } from "../../Redux/Slices/HotelSlice";
import axios from "axios";
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
} from "../../components/ui/pagination";

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Footer from "../../components/Footer/Footer";
import HotelSearch from "../../components/Search/HotelSearch";
import { selectfilteredhotels } from "../../Redux/Slices/SearchSlice";

const Hotel = () => {
  const hotels = useSelector(selecthotels);
  const filteredhotels = useSelector(selectfilteredhotels);
  const cardsperpage = 8;
  const endpagination = hotels.length;
  const [startindex, setstartindex] = useState(0);
  const [endindex, setendindex] = useState(cardsperpage);
  console.log(endindex);
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchdata = async () => {
      try {
        const data = await axios.get(
          "https://tour-arc-backend-production.up.railway.app/hotels"
        );
        dispatch(Set_hotels(data.data));
      } catch (error) {
        console.log(error);
      }
    };
    fetchdata();
  }, [dispatch]);
  return (
    <div className="w-screen h-screen p-0 m-0 overflow-x-hidden ">
      <Navbar></Navbar>
      <HotelSearch></HotelSearch>

      <div className="container mx-auto mt-8 ">
        <div className=" h-auto    ">
          {filteredhotels.slice(startindex, endindex).map((data) => (
            <div className="p-1 lg:p-4 flex justify-between m-2 border  rounded-lg shadow-lg mb-8 w-full ">
              <div className="flex ">
                <img
                  className=" lg:w-[250px] lg:h-[260px] md:w-[180px] md:h-[250px] w-[80px] h-[150px] rounded-s-lg  ms-2 md:me-6 me-1 mt-2"
                  src={data.hotelpic}
                  alt="loading"
                />
                <div className="flex flex-col justify-between">
                  <div className="flex flex-col space-y-1">
                    <div className="font-bold text-sm lg:text-2xl mt-4 ">
                      {data.hotelname}
                    </div>
                    <p className="flex h-[15px]  lg:h-[25px] items-center ">
                      {" "}
                      <CiLocationOn className="me-2"></CiLocationOn>Located in{" "}
                      {data.city}
                    </p>
                    <p className="flex h-[15px] lg:h-[25px] items-center ">
                      <BsCupHot className="me-2" />
                      Breakfast Included
                    </p>
                    <p className="flex  h-[15px] lg:h-[25px] items-center ">
                      <MdOutlinePerson className="me-2" />
                      Room Space of {data.roomspace} Persons
                    </p>
                  </div>
                  <div className="w-full flex  justify-between text-xs lg:text-base">
                    <div>
                      <p className="">Experience Unique Opportunity</p>
                      <p className="">Standard Rooms</p>
                      <p className="">{data.rating} Star Rating</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="  relative flex justify-end flex-col space-y-1 me-4 text-sm lg:text-base">
                <p className=" text-sm lg:text-3xl font-bold text-green-600 flex justify-end">
                  {" "}
                  $143
                </p>
                <p> Include Taxes and Charges</p>
                <p className=" text-green-600 flex h-[15px] lg:h-[25px] items-center text-sm justify-end ">
                  <IoLeafOutline /> Trip Sustainable Level 5
                </p>

                <button className="font-bold text-sm lg:text-2xl text-blue-800 flex justify-end w-full items-center h-[15px] lg:h-[25px] ">
                  See Availability
                  <FaGreaterThan className="mt-1  ms-1 w-[12px] h-[12px] lg:w-[25px] lg:h-[25px]" />{" "}
                </button>
              </div>
            </div>
          ))}
          {filteredhotels.length > 0 ? (
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious
                    className={
                      startindex === 0
                        ? "pointer-events-none opacity-50 "
                        : undefined
                    }
                    onClick={() => {
                      setstartindex(startindex - cardsperpage);
                      setendindex(endindex - cardsperpage);
                    }}
                  />
                </PaginationItem>

                <PaginationItem>
                  <PaginationNext
                    className={
                      endindex === endpagination
                        ? "pointer-events-none opacity-50 "
                        : undefined
                    }
                    onClick={() => {
                      setstartindex(startindex + cardsperpage);
                      setendindex(endindex + cardsperpage);
                    }}
                  />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          ) : (
            <div>
              <p className="text-[24px] font-semibold py-10 flex justify-center">
                No Hotels Found
              </p>
            </div>
          )}
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Hotel;
