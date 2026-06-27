import { useState } from 'react';
import  Sidebar  from './Sidebar';
import {
  FiUser,
  FiMessageSquare,
  FiHeart,
  FiShoppingCart,
  FiMenu,
} from "react-icons/fi";
import { Link } from "react-router-dom";
import { useGlobal } from '../Context/context.jsx';


const Navbar = () => {
    const {setshowsidebar , setshowlogin} = useGlobal()
  return (
    <>
    <nav className="fixed w-full z-666 bg-gray-100 border-b border-gray-300 py-3">
      
      {/* First Row */}
      <div className="flex items-center mx-1 md:mx-15 justify-between">
        {/* Left Side */}
        <div className="flex items-center gap-3">
          {/* Mobile Menu Icon */}
          
          <FiMenu onClick={() => {
  console.log("Menu Clicked");
  setshowsidebar(true);
}}   className="text-2xl md:hidden cursor-pointer" />
          

          <div className="bg-blue-500 p-3 hidden md:block rounded-xl">
            <FiShoppingCart className="text-white  text-xl" />
          </div>

          <h1 className="text-2xl md:text-4xl font-bold text-blue-300">
            Brand
          </h1>
        </div>

        {/* Desktop Icons */}
        <div className="hidden md:flex gap-5 items-center">
          <div className="flex flex-col items-center text-gray-500 cursor-pointer">
            <FiUser onClick={()=>setshowlogin(true)} className="text-xl" />
            <span className="text-sm text-gray-400">Profile</span>
          </div>

          <div className="flex flex-col items-center text-gray-500 cursor-pointer">
            <FiMessageSquare className="text-xl" />
            <span className="text-sm text-gray-400">Message</span>
          </div>

          <div className="flex flex-col items-center text-gray-500 cursor-pointer">
            <FiHeart className="text-xl" />
            <span className="text-sm text-gray-400">Orders</span>
          </div>

          <div className="flex flex-col items-center text-gray-500 cursor-pointer">
           <Link
           to='/Mycart'>
            <FiShoppingCart className="text-xl" />
           </Link>
            <span className="text-sm text-gray-400">My Cart</span>
          </div>
        </div>

        {/* Mobile Icons */}
        <div className="flex md:hidden gap-4">
          <FiUser onClick={()=>setshowlogin(true)} className="text-2xl text-gray-600 cursor-pointer" />
          <Link to='/Mycart'>
          <FiShoppingCart className="text-2xl text-gray-600 cursor-pointer" />
          </Link>
        </div>
      </div>

      {/* Search Bar - Second Row on Mobile */}
      <div className="mt-3 lg:mt-0 lg:absolute lg:left-1/2 lg:-translate-x-1/2 lg:top-3 lg:w-[45%]">
        <div className="flex w-full border-2 border-blue-500 rounded-lg overflow-hidden">
          <input
            type="text"
            placeholder="Search"
            className="flex-1 px-3 py-2 outline-none"
          />

          <select className="hidden sm:block px-3 border-l border-gray-300 outline-none">
            <option>All category</option>
            <option>Electronics</option>
            <option>Fashion</option>
            <option>Mobile</option>
          </select>

          <button className="bg-blue-600 text-white px-4 hover:bg-blue-700 duration-300">
            Search
          </button>
        </div>
      </div>
    </nav>
    

    </>
  );
};

export default Navbar;