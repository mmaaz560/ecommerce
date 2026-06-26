import React, { useState } from 'react'
import Secondbar from '../component/Secondbar'
import { ChevronRight, Check, Star, Search, ShoppingBag, Menu } from 'lucide-react';
import Listcart from '../component/Listcart';
import { brands, cardList, categories } from '../datas/cardList';
import Footer from '../component/Footer';
import Categori from '../component/Weblist/Categori';
import { Link } from 'react-router-dom';
import RelatedProducts from '../component/CarddetailList/Relatedproduct';

const ProductList = () => {
const extraproducts = [
  {
    name: "Xiaomi Redmi 8 Original",
    price: "$32.00-$40.00",
    img: "https://cdn-icons-png.flaticon.com/512/254/254638.png",
  },
  {
    name: "Xiaomi Redmi 8 Original",
    price: "$32.00-$40.00",
    img: "https://cdn-icons-png.flaticon.com/512/2965/2965567.png",
  },
  {
    name: "Xiaomi Redmi 8 Original",
    price: "$32.00-$40.00",
    img: "https://cdn-icons-png.flaticon.com/512/4341/4341139.png",
  },
  {
    name: "Xiaomi Redmi 8 Original",
    price: "$32.00-$40.00",
    img: "https://cdn-icons-png.flaticon.com/512/863/863684.png",
  },
  {
    name: "Xiaomi Redmi 8 Original",
    price: "$32.00-$40.00",
    img: "https://cdn-icons-png.flaticon.com/512/1046/1046857.png",
  },
  {
    name: "Xiaomi Redmi 8 Original",
    price: "$32.00-$40.00",
    img: "https://cdn-icons-png.flaticon.com/512/3082/3082037.png",
  },
];


  
  return (
    <>
     <Secondbar/>
     <div className="bg-gray-100">
      <div className=" flex md:gap-8  md:px-15 pt-5 w-full  ">

         {/* left side sidebar */}
        
        <Categori/>

       {/* Right side product list */}
       
        <div className="w-260 mb-4">
          {
            cardList.map((item,index)=>{
              return(
                <Link
                   to={`./CardDetails/${item.id}`}
                   key={index} 
                   >
                 <Listcart {...item}/>
                 </Link>
                 )
            })
          }
        </div>
       
      </div>
       <div className="bg-white shadow-2xl  mx-2 md:hidden block rounded-md p-5">
        <h2 className="text-2xl font-semibold mb-5">
          Related products
        </h2>

        <div className="flex items-center   gap-3 overflow-x-auto">
          {extraproducts.map((item, index) => (
            <div key={index}>
              <div className="bg-gray-100 rounded-md p-4 h-35 w-35 flex items-center justify-center">
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-28 h-28 object-contain"
                />
              </div>

              <h3 className="text-gray-700 mt-3 leading-6">
                {item.name}
              </h3>

              <p className="text-gray-400 mt-1">
                {item.price}
              </p>
            </div>
          ))}
        </div>
      </div>
      </div>    
     {/* footer...... */}

     <Footer/>
    </>
  )
}

export default ProductList