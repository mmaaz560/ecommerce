import React from 'react'
import { Star, ChevronRight, Truck } from 'lucide-react';
const Listcart = ({img,name,Rs,rate,discription}) => {
  return (
    <>
   


    <div className="  flex items-center justify-center p-1">
      {/* Main Product Card Container */}
     <div className=" w-full bg-white rounded-xl shadow-md overflow-hidden">
  <div className="flex  md:flex-row ">

    {/* Image */}
    <div className="md:w-1/3 flex items-center justify-center p-3">
      <img
        src={img}
        alt={name}
        className="w-70 h-60 object-cover"
      />
    </div>

    {/* Content */}
    <div className="md:w-2/3 p-4">
      <h2 className=" md:text-lg font-semibold md:font-bold mb-2">{name}</h2>

      <p className="text-lg font-semibold mb-2">{Rs}</p>

      <div className="flex items-center gap-1 mb-2">
        {[...Array(rate)].map((_, i) => (
          <Star
            key={i}
            size={16}
            className="fill-yellow-400 text-yellow-400"
          />
        ))}
      </div>

      <p className="text-sm text-gray-600 line-clamp-2 mb-3">
        {discription}
      </p>

      <button className="px-4 py-2  text-blue-800 rounded-lg text-sm">
        View details
      </button>
    </div>

  </div>
</div>
    </div>
 
    </>
  )
}

export default Listcart