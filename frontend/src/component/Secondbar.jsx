import React from 'react'
import { useState } from "react";
import {
  FiMenu,
  FiX,
  FiChevronDown,
} from "react-icons/fi";
import { Link } from 'react-router-dom';
const Secondbar = () => {

  const [showMenu, setShowMenu] = useState(false);

  const navLinks = [
    "All category",
    "Hot offers",
    "Gift boxes",
    "Projects",
    "Menu item",
  ];
  const categories = [
  "All category",
  "Gadgets",
  "Clothes",
  "Accessories",
  "Shoes",
  "Beauty",
  "Furniture",
  "Sports",
  "Books",
  "Electronics",
];

  return (
    <div className="bg-white md:mx-15 mx-2   ">
      <div className="w-full mx-auto px-2 hidden md:block ">
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
                <Link
                 to='/ProductList'>
                All category
                </Link>
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
      <div className="block md:hidden">
        
          <div className="w-full overflow-x-auto scrollbar-hide">
      <div className="flex gap-3  px-2 py-2">
       
            
            <ul className=" md:hidden flex items-center gap-4 font-medium ">

             <li className="px-6 py-3 bg-gray-100 w-35 rounded-xl text-blue-600 
            font-medium hover:bg-blue-600 hover:text-white transition-all duration-300"
          >
               
                <Link
                 to='/ProductList'>
                All category
                </Link>
              </li>
            
         
         
           {categories.slice(1).map((item) => (
                <li
                  key={item}
                  className="px-6 py-3 bg-gray-100 rounded-xl text-blue-600 
            font-medium hover:bg-blue-600 hover:text-white transition-all duration-300"
          
                >
                  {item}
                </li>
              ))}

          </ul>
         

      </div>
    </div>
      </div>
      <hr className="border-gray-400" />
    </div>
   
  );
};


export default Secondbar