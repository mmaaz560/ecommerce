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

const Sidebar = () => {
  return (
    <div className="fixed inset-0 z-50 bg-black/20">
      <div
  className={`w-63.75 h-screen bg-[#f7f7f7] shadow-md transition-all duration-300 
     ${ onClose ? "translate-x-0" : "-translate-x-full" }`}
>
        
        {/* Top section */}
        <div className="relative bg-[#f1f3f5] px-4 pt-4 pb-5 border-b border-gray-200">
          <FiX onClick={onClose} className="absolute top-4 right-4 text-gray-400 text-[18px]" />

          <div className="w-14 h-14 rounded-full bg-gray-200 flex items-center justify-center mb-4">
            <FiUser className="text-gray-400 text-[28px]" />
          </div>

          <p className="text-[15px] text-[#2f2f2f]">Sign in | Register</p>
          
        </div>

        {/* Menu section */}
        <div className="px-3 py-2">
          <div className="space-y-1 py-2">
            <div className="flex items-center gap-4 px-3 py-3 text-[15px] text-[#333]">
              <FiHome className="text-slate-400 text-[19px]" />
              <span>Home</span>
            </div>

            <div className="flex items-center gap-4 px-3 py-3 text-[15px] text-[#333]">
              <FiList className="text-slate-400 text-[19px]" />
              <span>Categories</span>
            </div>

            <div className="flex items-center gap-4 px-3 py-3 text-[15px] text-[#333]">
              <FiHeart className="text-slate-400 text-[19px]" />
              <span>Favorites</span>
            </div>

            <div className="flex items-center gap-4 px-3 py-3 text-[15px] text-[#333]">
              <FiShoppingBag className="text-slate-400 text-[19px]" />
              <span>My orders</span>
            </div>
          </div>

          <div className="border-t border-gray-200 my-3"></div>

          <div className="space-y-1 py-2">
            <div className="flex items-center gap-4 px-3 py-3 text-[15px] text-[#333]">
              <FiGlobe className="text-slate-400 text-[19px]" />
              <span>English | USD</span>
            </div>

            <div className="flex items-center gap-4 px-3 py-3 text-[15px] text-[#333]">
              <FiHeadphones className="text-slate-400 text-[19px]" />
              <span>Contact us</span>
            </div>

            <div className="flex items-center gap-4 px-3 py-3 text-[15px] text-[#333]">
              <FiGrid className="text-slate-400 text-[19px]" />
              <span>About</span>
            </div>
          </div>

          <div className="border-t border-gray-200 my-3"></div>

          <div className="px-12 pt-5 space-y-6 text-[15px] text-[#3a3a3a]">
            <p>User agreement</p>
            <p>Partnership</p>
            <p>Privacy policy</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;