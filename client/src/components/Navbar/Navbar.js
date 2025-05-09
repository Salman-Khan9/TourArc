import React from "react";
import logo from "../../Assets/logo.png";
import { RxQuestionMarkCircled } from "react-icons/rx";
import { Link } from "react-router-dom";
import languageflag from "../../Assets/united-kingdom.png";
import { Input } from "../ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "../../components/ui/popover";
import { useSelector } from "react-redux";
import { selectToken } from "../../Redux/Slices/userSlice";

const Navbar = () => {
  const token = useSelector(selectToken);

  return (
    <div className="w-screen h-[180px] bg-gray-50">
      <div className="w-full h-[80px] items-center flex justify-between  mix-blend-multiply md:justify-evenly  ">
        <div className="flex items-center  gap-1 w-full">
          <a href="/">
            <img
              className=" lg:h-[50px] h-[30px] w-[100px] lg:w-[140px] ms-6"
              src={logo}
              alt="Logo"
            />
          </a>

          <Link className="m-4 hidden lg:flex">
            <RxQuestionMarkCircled
              title="About-us"
              size={34}
              color="#4c94c2"
            ></RxQuestionMarkCircled>
          </Link>
          <div className="lg:flex hidden">
            <Popover>
              <PopoverTrigger>
                <img
                  title="Language"
                  className="w-[30px] h-[30px]"
                  src={languageflag}
                  alt="English"
                ></img>
              </PopoverTrigger>
              <PopoverContent>
                <p>Language:English</p>
              </PopoverContent>
            </Popover>
          </div>

          <div className="w-full ms-5 lg:flex hidden">
            <Input type="search" placeholder="Search"></Input>
          </div>
        </div>
        {!token && (
          <div className="ms-[30px] space-x-2">
            <Link
              to="/login"
              className=" lg:px-[45px] lg:py-2 px-5 py-1 border-2 rounded border-sky-500 hover:shadow-xl font-medium hover:font-bold text-sky-700"
            >
              Login
            </Link>
            <Link
              to="/signup"
              className="lg:py-2 lg:px-[45px] px-5 py-1 border-2 rounded border-sky-500 hover:shadow-xl font-medium hover:font-bold  text-sky-700 "
            >
              Register
            </Link>
          </div>
        )}
      </div>

      <div className="flex justify-center space-x-3 mt-5">
        <Link
          to="/trip"
          className="py-1 px-4 md:px-10  bg-white rounded-3xl border-2 border-gray-200  hover:bg-sky-600 hover:py-2 hover:px-12 transition-all "
        >
          Trip
        </Link>
        <Link
          to="/Deals"
          className="py-1 px-4 md:px-10  bg-white rounded-3xl border-2 border-gray-200 hover:bg-sky-600 hover:py-2 hover:px-12 transition-all  "
        >
          %Deals
        </Link>
        <Link
          to="/"
          className="py-1 px-4 md:px-10  bg-white rounded-3xl border-2 border-gray-200  hover:bg-sky-600 hover:py-2 hover:px-12 transition-all "
        >
          Hotel
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
