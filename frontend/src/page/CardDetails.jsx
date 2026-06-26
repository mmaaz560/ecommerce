import React from 'react'
import Secondbar from '../component/Secondbar'
     import {
  FaStar,
  FaRegHeart,
  FaGlobe,
  FaShieldAlt,
} from "react-icons/fa";
import Discription from '../component/CarddetailList/Discriptions'
import RelatedProducts from '../component/CarddetailList/Relatedproduct';
import Footer from '../component/Footer';
import { useParams } from 'react-router-dom';
import { cardList } from '../datas/cardList';

const CardDetails = () => {
   const {id} = useParams()
   const singleproduct = cardList.find((item)=> item.id === Number(id))
   const {img,name,discription,Rs,rate} = singleproduct;
  return (
    <>
     <Secondbar/>

    <div className="bg-gray-100 px-1 md:px-15 pb-5">
    <div className="max-w-350  mx-auto md:p-4">
      <div className="shadow-lg rounded-md p-4 bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

          {/* LEFT */}          
          <div className="lg:col-span-4">
            <div className="shadow-md border border-gray-100 rounded-md p-4">
              <img
                src={img}
                alt=""
                className="w-full h-87 object-contain"
              />
            </div>

            <div className="flex gap-2 mt-4">
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <div
                  key={item}
                  className="w-16 h-16 border rounded-md p-1 cursor-pointer"
                >
                  <img
                    src={img}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* CENTER */}
          <div className="lg:col-span-5">
            <p className="text-green-600 font-medium mb-2">
              ✓ In stock
            </p>

            <h1 className="text-3xl font-semibold leading-tight">
              {name}
            </h1>

            <div className="flex items-center gap-3 mt-3 text-sm">
              <div className="flex text-orange-400">
                {/* {[1, 2, 3, 4, 5].map((item) => (
                  <FaStar key={item} />
                ))} */} {rate}
              </div>

              <span className="text-orange-500 font-semibold">
                9.3
              </span>

              <span className="text-gray-500">
                32 reviews
              </span>

              <span className="text-gray-500">
                154 sold
              </span>
            </div>

            {/* PRICE BOXES */}
            <div className="grid grid-cols-3 mt-2 bg-orange-100 rounded-md ">
              <div className="px-4 py-3 border-r-2 border-r-gray-300 ">
                <h3 className="text-red-500 text-2xl font-bold">
                  $98.00
                </h3>
                <p className="text-sm text-gray-500">
                  50-100 pcs
                </p>
              </div>

              <div className="px-4 py-3 border-r-2 border-r-gray-300">
                <h3 className="text-2xl font-bold">
                  $90.00
                </h3>
                <p className="text-sm text-gray-500">
                  100-700 pcs
                </p>
              </div>

              <div className="px-4 py-3 ">
                <h3 className="text-2xl font-bold">
                  $78.00
                </h3>
                <p className="text-sm text-gray-500">
                  700+ pcs
                </p>
              </div>
            </div>

            {/* SPECS */}
            <div className="mt-3 space-y-2 text-gray-600">

              <div className="flex border-b border-b-gray-300 pb-3">
                <span className="w-32 text-gray-500 font-semibold">Price:</span>
                <span>{Rs}</span>
              </div>

              <div className="flex ">
                <span className="w-32 text-gray-500 font-semibold">Type:</span>
                <span>Classic shoes</span>
              </div>

              <div className="flex  ">
                <span className="w-32 text-gray-500 font-semibold">Material:</span>
                <span>Plastic material</span>
              </div>

              <div className="flex border-b border-b-gray-300 pb-3">
                <span className="w-32 text-gray-500 font-semibold">Design:</span>
                <span>Modern nice</span>
              </div>

              <div className="flex ">
                <span className="w-32 text-gray-500 font-semibold">
                  Customization:
                </span>
                <span>
                  Customized logo and design custom
                  packages
                </span>
              </div>

              <div className="flex ">
                <span className="w-32 text-gray-500 font-semibold">Protection:</span>
                <span>Refund Policy</span>
              </div>

              <div className="flex border-b border-b-gray-300 pb-3">
                <span className="w-32 text-gray-500 font-semibold">Warranty:</span>
                <span>2 years full warranty</span>
              </div>

            </div>
          </div>

          {/* RIGHT */}
          <div className="lg:col-span-3">
            <div className=" border-2 border-gray-300 rounded-md p-4">

              <div className="flex items-center gap-3 pb-4 border-b">
                <div className="w-12 h-12 rounded bg-cyan-100 flex items-center justify-center text-xl font-bold text-cyan-700">
                  R
                </div>

                <div>
                  <p className="text-gray-500 text-sm">
                    Supplier
                  </p>
                  <h3 className="font-medium">
                    Guanjoi Trading LLC
                  </h3>
                </div>
              </div>

              <div className="space-y-4 mt-4 flex md:block justify-center items-center text-gray-600">

                <p>🇩🇪 Germany, <span className='opacity-0 md:opacity-100'>Berlin</span></p>

                <div className="flex items-center  gap-2">
                  <FaShieldAlt />
                  <span>Verified <span className='opacity-0 md:opacity-100'>Seller</span></span>
                </div>

                <div className="flex items-center gap-2">
                  <FaGlobe />
                  <span>Worldwide <span className='opacity-0 md:opacity-100'>shipping</span></span>
                </div>

              </div>

              <button className="w-full bg-blue-600 text-white py-3 rounded-md mt-6 hover:bg-blue-700">
                Send inquiry
              </button>

              <button className="w-full border py-3 rounded-md mt-3 text-blue-600">
                Seller's profile
              </button>
            </div>

            <button className="flex items-center gap-2 mx-auto mt-6 text-blue-600">
              <FaRegHeart />
              Save for later
            </button>
          </div>

        </div>
      </div>
    </div>
     <Discription/>
     <RelatedProducts/>
    </div>
    <Footer/>
    </>
  )
}

export default CardDetails