import React from "react";
import { FiShoppingCart } from "react-icons/fi";

const Products = [
  {
    name: "Xiaomi Redmi 8 Original",
    price: "$40.00",
    img: "https://cdn-icons-png.flaticon.com/512/254/254638.png",
  },
  {
    name: "Xiaomi Redmi 8 Original",
    price: "$48.00",
    img: "https://cdn-icons-png.flaticon.com/512/2965/2965567.png",
  },
  {
    name: "Xiaomi Redmi 8 Original",
    price: "$45.00",
    img: "https://cdn-icons-png.flaticon.com/512/4341/4341139.png",
  },
  {
    name: "Xiaomi Redmi 8 Original",
    price: "$76.00",
    img: "https://cdn-icons-png.flaticon.com/512/863/863684.png",
  },
  {
    name: "Xiaomi Redmi 8 Original",
    price: "$34.00",
    img: "https://cdn-icons-png.flaticon.com/512/1046/1046857.png",
  },
  {
    name: "Xiaomi Redmi 8 Original",
    price: "$83.00",
    img: "https://cdn-icons-png.flaticon.com/512/3082/3082037.png",
  },
];

export default function Shortcuts() {
  return (
    <div className="max-w-350 mx-auto py-4 md:p-4 ">

      {/* Related Products */}
      <div className="bg-white shadow-2xl rounded-md p-5">
        <h2 className="text-2xl font-semibold mb-5">
          Save for later
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-2">
  {Products.map((item, index) => (
    <div key={index} className="p-4">
        <div className="flex md:block gap-3">
      <div className="bg-gray-100 rounded-md  h-35 w-35 flex items-center justify-center">
        <img
          src={item.img}
          alt={item.name}
          className="w-28 h-28 object-contain"
        />
      </div>
       <div className="">
        
      <h3 className="text-gray-700 mt-3 leading-6">
        {item.name}
      </h3>

      <p className="font-semibold mt-1">
        {item.price}
      </p>

      <button className="border border-gray-400 p-1 mt-1 rounded">
        <div className="flex text-blue-600 items-center gap-1">
          <FiShoppingCart className="hidden md:block"/>
          <h1>Move to cart</h1>
        </div>
      </button>
      <button className="border md:hidden  border-gray-400 p-1 mt-1
      ms-4 rounded">
        <div className="flex text-red-600 items-center gap-1">
          <h1>Remove</h1>
        </div>
      </button>
       </div>
      </div>
    </div>
  ))}
</div>
      </div>

      {/* Discount Banner */}
      <div className="mt-5 relative hidden md:block overflow-hidden rounded-md">

        <div className="bg-blue-600 flex flex-col md:flex-row items-center justify-between px-8 py-8">

          {/* Left Content */}
          <div className="text-white z-10">
            <h2 className="text-3xl font-semibold">
              Super discount on more than 100 USD
            </h2>

            <p className="text-blue-100 mt-2">
              Have you ever finally just write dummy info
            </p>
          </div>

          {/* Button */}
          <button className="bg-orange-400 hover:bg-orange-500 text-white px-8 py-3 rounded-md font-medium z-10 mt-4 md:mt-0">
            Shop now
          </button>

          {/* Decorative Shape */}
          <div className="hidden md:block absolute right-60 top-0 w-60 h-full bg-blue-500 skew-x-[-20deg]" />
        </div>

      </div>

    </div>
  );
}