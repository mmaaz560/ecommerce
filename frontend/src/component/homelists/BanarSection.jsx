import React from 'react'
import { typeList } from '../../datas/typelist'

const BanarSection = () => {
  return (
    <>
       <section className="max-w-350 border bg-white  border-gray-300 rounded-md p-4 mx-1  md:mx-15">
        <div className="grid grid-cols-1 lg:grid-cols-[250px_1fr_230px] gap-4">
          
          {/* Left Categories */}
          <div className="hidden md:block">
            <ul className="space-y-2">
              {
                  typeList.map((item,index)=>{
                      return(
                          <li
                key={item.id}
                className="px-4 py-1 text-gray-600 hover:bg-blue-100 rounded-md cursor-pointer"
              >
                {item.name}
              </li>
                      )
                  })
          }
          
            </ul>
          </div>
      
          {/* Center Banner */}
         <div className="relative overflow-hidden rounded-md h-70 sm:h-80p md:h-90 lg:h-90">
      
        {/* Image */}
        <img
          src="https://img.freepik.com/premium-photo/laptop-cellphone-headphone-with-cactus-plant-beige-background_23-2147889270.jpg"
          alt="banner"
          className="  w-full h-full object-cover"
        />
      
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/30" />
      
        {/* Content */}
        <div className="absolute inset-0 flex items-center px-4 sm:px-10 md:px-16">
      
          <div className="text-white max-w-md sm:max-w-lg">
      
            <h2 className="text-lg sm:text-2xl md:text-3xl font-light">
              Latest trending
            </h2>
      
            <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold mt-2 leading-tight">
              Electronic items
            </h1>
      
            <button className="mt-6 sm:mt-8 bg-white text-black px-5 sm:px-8 py-2 sm:py-3 rounded-md text-sm sm:text-lg font-medium hover:bg-gray-200 transition">
              Learn more
            </button>
      
          </div>
      
        </div>
       </div>
      
          {/* Right Side Cards */}
          <div className="space-y-2 hidden md:block">
            
            {/* User Card */}
            <div className="bg-blue-100 p-3 rounded-md">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-lg">
                  👤
                </div>
      
                <div>
                  <h3 className="text-lg">Hi, user</h3>
                  <p className="text-lg">let’s get stated</p>
                </div>
              </div>
      
              <button className="w-full bg-blue-600 text-white py-1 rounded-md mt-4">
                Join now
              </button>
      
              <button className="w-full bg-white py-1  rounded-md mt-2 border">
                Log in
              </button>
            </div>
      
            {/* Orange Card */}
            <div className="bg-orange-500 text-white p-3 rounded-md">
              <h3 className="text-lg">
                Get US $10 off
              </h3>
      
              <p className="text-lg">
                with a new supplier
              </p>
            </div>
      
            {/* Cyan Card */}
            <div className="bg-cyan-500 text-white p-3 rounded-md">
              <h3 className="text-lg">
                Send quotes with
              </h3>
      
              <p className="text-lg">
                supplier preferences
              </p>
            </div>
          </div>
        </div>
            </section>
    </>
  )
}

export default BanarSection