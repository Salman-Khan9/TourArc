import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Specialoffers = () => {
  const [imagesuri, setimagesuri] = useState([]);
  useEffect(() => {
    const uri = async () => {
      try {
        const imguri = await axios.get("https://tour-arc.vercel.app/getoffer");
        setimagesuri(imguri.data);
      } catch (error) {
        console.log(error);
      }
    };
    uri();
  }, []);

  return (
    <div className="w-screen h-[700px] flex justify-center  mt-10">
      <div className="w-[1300px] h-[800px] ">
        <p className="font-bold text-4xl">Special Deals</p>
        <div className="flex flex-wrap items-center mt-10">
          {imagesuri.map((uri) => (
            <div>
              <Link>
                <img
                  className="w-[400px] h-[250px] rounded-md hover:w-[420px]  hover:h-[290px] me-2 transition-all "
                  src={uri.picuri}
                  alt="discover"
                />
                <p className="flex w-[160px] items-center relative bottom-10 left-5 bg-black opacity-80 rounded p-1 text-white text-lg font-medium  ">
                  Discover Deals{" "}
                  <FaArrowRightLong className="ms-2" color="white" size={20} />
                </p>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Specialoffers;
