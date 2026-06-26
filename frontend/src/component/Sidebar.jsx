import React from "react";
import {
  FiX,
  FiUser,
  FiHome,
  FiList,
  FiHeart,
  FiShoppingBag,
  FiGlobe,
  FiHeadphones,
  FiGrid,
} from "react-icons/fi";
import { useGlobal } from "../Context/context";

const Sidebar = () => {
  const { showsidebar, setshowsidebar } = useGlobal();

  return (
    <>
     <div
      onClick={() => setshowsidebar(false)}
      className={`fixed inset-0 bg-black/30 transition-opacity duration-300 z-40
        ${
          showsidebar
            ? "opacity-100 visible"
            : "opacity-0 invisible"
        }`}
    ></div>
    <div
       className="fixed top-0 left-0 w-64 h-screen bg-white shadow-lg z-50
   "
 
      onClick={() => setshowsidebar(false)}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`w-64 h-screen bg-[#f7f7f7] shadow-md transition-transform duration-300 ${
          showsidebar ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Top section */}
        <div className="relative bg-[#f1f3f5] px-4 pt-4 pb-5 border-b border-gray-200">
          <FiX
            onClick={() => setshowsidebar(false)}
            className="absolute top-4 right-4 text-gray-400 text-[20px] cursor-pointer"
          />

          <div className="w-14 h-14 rounded-full bg-gray-200 flex items-center justify-center mb-4">
            <FiUser className="text-gray-400 text-[28px]" />
          </div>

          <p className="text-[15px] text-[#2f2f2f]">
            Sign in | Register
          </p>
        </div>

        {/* Menu */}
        <div className="px-3 py-2">
          <div className="space-y-1 py-2">
            <div className="flex items-center gap-4 px-3 py-3 cursor-pointer hover:bg-gray-200 rounded-lg">
              <FiHome className="text-slate-400 text-[19px]" />
              <span>Home</span>
            </div>

            <div className="flex items-center gap-4 px-3 py-3 cursor-pointer hover:bg-gray-200 rounded-lg">
              <FiList className="text-slate-400 text-[19px]" />
              <span>Categories</span>
            </div>

            <div className="flex items-center gap-4 px-3 py-3 cursor-pointer hover:bg-gray-200 rounded-lg">
              <FiHeart className="text-slate-400 text-[19px]" />
              <span>Favorites</span>
            </div>

            <div className="flex items-center gap-4 px-3 py-3 cursor-pointer hover:bg-gray-200 rounded-lg">
              <FiShoppingBag className="text-slate-400 text-[19px]" />
              <span>My Orders</span>
            </div>
          </div>

          <div className="border-t border-gray-300 my-3"></div>

          <div className="space-y-1 py-2">
            <div className="flex items-center gap-4 px-3 py-3 cursor-pointer hover:bg-gray-200 rounded-lg">
              <FiGlobe className="text-slate-400 text-[19px]" />
              <span>English | USD</span>
            </div>

            <div className="flex items-center gap-4 px-3 py-3 cursor-pointer hover:bg-gray-200 rounded-lg">
              <FiHeadphones className="text-slate-400 text-[19px]" />
              <span>Contact us</span>
            </div>

            <div className="flex items-center gap-4 px-3 py-3 cursor-pointer hover:bg-gray-200 rounded-lg">
              <FiGrid className="text-slate-400 text-[19px]" />
              <span>About</span>
            </div>
          </div>

          <div className="border-t border-gray-300 my-3"></div>

          <div className="px-6 pt-4 space-y-4 text-[15px] text-[#3a3a3a]">
            <p className="cursor-pointer hover:text-blue-600">
              User agreement
            </p>

            <p className="cursor-pointer hover:text-blue-600">
              Partnership
            </p>

            <p className="cursor-pointer hover:text-blue-600">
              Privacy policy
            </p>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Sidebar;