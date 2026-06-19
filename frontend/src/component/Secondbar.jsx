import React from 'react'
import { useState } from "react";
import {
  FiMenu,
  FiX,
  FiChevronDown,
} from "react-icons/fi";
const Secondbar = () => {

  const [showMenu, setShowMenu] = useState(false);

  const navLinks = [
    "All category",
    "Hot offers",
    "Gift boxes",
    "Projects",
    "Menu item",
  ];

  return (
    <div className="bg-white mx-15  hidden md:block ">
      <div className="w-full mx-auto px-2 ">
        <div className="h-14 flex items-center justify-between">
          {/* Left Side */}
          <div className="flex items-center gap-8">
            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-2xl"
              onClick={() => setShowMenu(!showMenu)}
            >
              {showMenu ? <FiX /> : <FiMenu />}
            </button>

            {/* Desktop Menu */}
            <ul className="hidden md:flex items-center gap-4 font-medium text-gray-800">
              <li className="flex items-center gap-2 cursor-pointer">
                <FiMenu />
                All category
              </li>

              {navLinks.slice(1).map((item) => (
                <li
                  key={item}
                  className="cursor-pointer hover:text-blue-600 duration-300"
                >
                  {item}
                </li>
              ))}

              <li className="flex items-center gap-1 cursor-pointer">
                Help
                <FiChevronDown />
              </li>
            </ul>
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-4  ">
            <button className="flex items-center gap-2">
              English, USD
              <FiChevronDown />
            </button>

            <button className="flex items-center gap-2">
              Ship to <img src="https://flagcdn.com/w40/dk.png" width={25} alt="" />
              <FiChevronDown />
            </button>
          </div>
        </div>

       
      </div>
      <hr className="border-gray-400" />
    </div>
   
  );
};


export default Secondbar