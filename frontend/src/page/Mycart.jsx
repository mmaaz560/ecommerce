import { Link } from "react-router-dom";
import React from 'react'
import { FaArrowLeft } from "react-icons/fa";
import Footer from "../component/Footer";
import RelatedProducts from "../component/CarddetailList/Relatedproduct";
import Shortcuts from "../component/Shortcuts";
import { IoIosLock } from "react-icons/io";
import { MdMessage } from "react-icons/md";
import { FaTruckMoving } from "react-icons/fa";

const Mycart = () => {
  const products = [
    {
      id: 1,
      image: "https://via.placeholder.com/80",
      title: "T-shirts with multiple colors, for men and lady",
      seller: "Artel Market",
      price: 78.99,
      qty: 9,
    },
    {
      id: 2,
      image: "https://via.placeholder.com/80",
      title: "T-shirts with multiple colors, for men and lady",
      seller: "Best factory LLC",
      price: 39.0,
      qty: 3,
    },
    {
      id: 3,
      image: "https://via.placeholder.com/80",
      title: "T-shirts with multiple colors, for men and lady",
      seller: "Artel Market",
      price: 170.5,
      qty: 1,
    },
  ];

  return (
    <>
    <div className="  mx-auto   bg-gray-100 min-h-screen">
      <h1 className="text-3xl px-1 md:px-15  font-bold mb-6">
        My cart (3)
      </h1>

      <div className="max-w-350 px-1 md:px-15  grid lg:grid-cols-4 gap-6">

        {/* Left Section */}
        <div className="lg:col-span-3 bg-white shadow-lg  rounded-md py-2 px-4 ">

          {products.map((item) => (
            <div className="border-b border-b-gray-200">
            <div
              key={item.id}
              className="flex justify-between   py-5"
            >
              <div className="flex gap-4">
                <img
                  src={item.image}
                  alt=""
                  className="w-20 h-20 border border-gray-300 rounded object-cover"
                />

                <div>
                  <h3 className="font-semibold">
                    {item.title}
                  </h3>

                  <p className="text-gray-500 text-sm">
                    Size: medium, Color: blue, Material: Plastic
                  </p>

                  <p className="text-gray-500 text-sm">
                    Seller: {item.seller}
                  </p>

                  <div className=" gap-2 hidden md:flex mt-2">
                    <button className="px-3 py-1 text-red-500 border rounded text-sm">
                      Remove
                    </button>

                    <button className="px-3 py-1 text-blue-500 border rounded text-sm">
                      Save for later
                    </button>
                  </div>
                </div>
              </div>

              <div className="text-right">
                <h3 className="font-semibold hidden md:block text-lg">
                  ${item.price}
                </h3>

                <select className="border hidden md:block rounded px-3 py-1 mt-3">
                  <option>Qty: {item.qty}</option>
                </select>
              </div>
              </div>
              <div className="flex justify-between md:hidden mb-2 items-center">
                <div className="flex">
                  <div className="border rounded-s-md  border-gray-400  border-e-0 w-6 h-6 text-center ">-</div>
                   <div className="border w-10 h-6  border-gray-400 text-center ">{item.qty}</div>
                   <div className="border rounded-e-md border-gray-400  border-s-0 w-6 h-6 text-center ">+</div>
                </div>
                <h3 className="font-semibold  text-lg">
                  ${item.price}
                </h3>
              </div>
            </div>
          ))}

          <div className="flex justify-between my-2">
  <Link
  to="/ProductList/CardDetails"
  className="bg-blue-600 text-white px-5 py-2 rounded flex items-center gap-2"
>
  <FaArrowLeft />
  Back
</Link>

            <button className="text-blue-600 border px-4 py-2 rounded">
              Remove all
            </button>
          </div>
        </div>

        {/* Right Section */}
        <div className="space-y-4">

          <div className="bg-white hidden md:block p-4 rounded shadow">
            <h3 className="text-gray-600 mb-3">
              Have a coupon?
            </h3>
              <div className="flex">
                <input type="text" placeholder='Add coupon'
                className='border py-2 ps-2 w-[80%]' />
                <button className='border w-[20%] md:w-max text-blue-600 p-2'>Apply</button>
              </div>
           
          </div>

          <div className="bg-white p-4 rounded shadow">
            <div className="space-y-2 text-gray-600">
              <div className="flex justify-between">
                <span>Subtotal:</span>
                <span>$1403.97</span>
              </div>

              <div className="flex justify-between text-red-500">
                <span>Discount:</span>
                <span>-$60.00</span>
              </div>

              <div className="flex justify-between text-green-500">
                <span>Tax:</span>
                <span>+$14.00</span>
              </div>
            </div>

            <hr className="my-4" />

            <div className="flex justify-between font-bold text-2xl">
              <span>Total:</span>
              <span>$1357.97</span>
            </div>

            <button className="w-full bg-green-500 text-white py-3 rounded mt-5 font-semibold">
              Checkout
            </button>

            <div className="flex justify-center gap-3 mt-4">
              <img src="https://img.icons8.com/color/48/mastercard-logo.png" className="w-8" />
              <img src="https://img.icons8.com/color/48/paypal.png" className="w-8" />
              <img src="https://img.icons8.com/color/48/visa.png" className="w-8" />
              <img src="https://img.icons8.com/ios-filled/50/apple-pay.png" className="w-8" />
            </div>
          </div>

        </div>
      </div>

       <div className="md:flex items-center my-5 hidden  px-1 md:px-15  gap-5">
            <div className="flex items-center gap-3">
              <IoIosLock className='w-13 p-3 h-13 rounded-full text-gray-500 bg-gray-300 '/>
              <div className="">
                <h1 className="text-sm font-semibold">Secure payment</h1>
                <p className=" text-gray-400">Have you ever finally just</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <MdMessage className='w-13 p-3 h-13 rounded-full text-gray-500 bg-gray-300 '/>
              <div className="">
                <h1 className="text-sm font-semibold">Customer support</h1>
                <p className=" text-gray-400">Have you ever finally just</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <FaTruckMoving className='w-13 p-3 h-13 rounded-full text-gray-500 bg-gray-300 '/>
              <div className="">
                <h1 className="text-sm font-semibold">Free delivery</h1>
                <p className=" text-gray-400">Have you ever finally just</p>
              </div>
            </div>
          </div>
        <div className="px-1 md:px-10 ">
         <Shortcuts/>
        </div>
    </div>
    <Footer/>
 
      
    </>
  )
}

export default Mycart