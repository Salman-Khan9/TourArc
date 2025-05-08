import axios from "axios";
import React, { useEffect, useState } from "react";

const HighestReviewed = () => {
  const [data, setdata] = useState([]);
  useEffect(() => {
    const fetchdata = async () => {
      try {
        const data = await axios.get("https://tour-arc.vercel.app/PastOffers");
        setdata(data.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchdata();
  }, []);

  return (
    <div className="w-screen h-auto flex justify-center">
      <div className=" w-[1300px] h-[620px]">
        <p className="font-bold text-3xl">
          Compare The Highest Reviewed Past Offers
        </p>
        <p className="text-lg">Browse By Type</p>
        <div className="flex flex-wrap  ">
          {data.map((subdata) => (
            <div className="w-[300px] h-[250px] hover:h-[270px] hover:w-[320px] p-2 border border-gray-300 shadow-lg me-2 mt-3 transition-all rounded-md">
              <img
                className="h-[200px] w-[300px] rounded-md"
                src={subdata.picuri}
              />
              <p className="font-bold text-lg m-2">{subdata.offername}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HighestReviewed;
