import React from 'react'
import Secondbar from '../component/Secondbar'
import { typeList } from '../datas/typelist'
import { carddata } from '../datas/carddata'
import { products, productstwo, services, suppliers } from '../datas/products'
import { Link } from "react-router-dom";
import Footer from '../component/Footer'
import BanarSection from '../component/homelists/BanarSection'

const Home = () => {

  return (

    <>
       <Secondbar/>
       <div className="bg-gray-100 pt-5">
        <BanarSection/>


      <div className=" my-4 border bg-white max-w-350 border-gray-400 rounded-md mx-1  md:mx-15 ">
  <div className="flex justify-between  md:hidden p-3">
       <div className="">
        <h1 className="font-bold">Deal and offers</h1>
        <h1 className="text-gray-400">Hygiene equipment</h1>
       </div>
      <div className="flex gap-1 mt-1">
         <div className="w-12 h-12 rounded-md font-semibold text-center bg-gray-700 text-white"> 04 <span className='font-thin'>Days</span></div>
       <div className="w-12 h-12 rounded-md font-semibold text-center bg-gray-700 text-white"> 13 <span className='font-thin'>Hours</span></div>
       <div className="w-12 h-12 rounded-md font-semibold text-center bg-gray-700 text-white"> 23<br/>  <span className='font-thin'>Min</span></div>
       <div className="w-12 h-12 rounded-md font-semibold text-center bg-gray-700 text-white"> 34 <br/><span className='font-thin'>Sec</span></div>
      </div>
    </div>
  <div className="flex h-55 ">
    <div className="border-r border-gray-300 hidden md:block p-3">
       <h1 className="font-bold">Deal and offers</h1>
       <h1 className="text-gray-400">Hygiene equipment</h1>
      <div className="flex gap-1 mt-1">
          <div className="w-12 h-12 rounded-md font-semibold text-center bg-gray-700 text-white"> 04 <span className='font-thin'>Days</span></div>
       <div className="w-12 h-12 rounded-md font-semibold text-center bg-gray-700 text-white"> 13 <span className='font-thin'>Hours</span></div>
       <div className="w-12 h-12 rounded-md font-semibold text-center bg-gray-700 text-white"> 23<br/>  <span className='font-thin'>Min</span></div>
       <div className="w-12 h-12 rounded-md font-semibold text-center bg-gray-700 text-white"> 34 <br/><span className='font-thin'>Sec</span></div>
      </div>
    </div>
    <div  className=" flex overflow-x-auto">
       {
         carddata.map((item, index) => {
    return (
      
      <Link
        to='/ProductList'
        key={index}
        className="border border-gray-300 w-50 flex flex-col items-center text-center"
      >
       <div className="w-32 h-32 flex items-center justify-center">
           <img
           src={item.img}
           alt={item.name}
           className="w-full h-full object-cover"
         />
        </div>
        <h2 className="mt-3 text-lg font-medium">
          {item.name}
        </h2>

        <span className="mt-2 bg-red-100 text-red-500 px-4 py-1 rounded-full">
          {item.discount}
        </span>
      </Link>
    )
           })
          }
    </div>
      
       </div>
      </div>
      
    <div className="overflow-x-auto">
        
      <div className="max-w-350 bg-white rounded-md border border-gray-400 mx-1 md:mx-15 flex flex-col md:flex-row">
            <h2 className="text-2xl p-3 md:hidden block font-bold leading-tight">
               Home and outdoor
             </h2>
           {/* Left Banner */}
           <div
             className="relative w-57 hidden md:block  border-r border-gray-300 p-6"
             style={{
               backgroundImage:
                 "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQv64glRHl9LmXRfVL_q8yB-FKxTSi8Ek1PhQ&s')",
               backgroundSize: "cover",
               backgroundPosition: "center",
             }}
           >
             <h2 className="text-2xl font-bold leading-tight">
               Home and <br />
               outdoor
             </h2>
     
                <button className="mt-8 bg-white px-8 py-3 rounded-lg shadow font-medium">
                  Source now
                </button>
              </div>
     
              {/* Right Products */}
            <div className="col-span-4 flex md:grid md:grid-cols-4 overflow-x-auto md:w-242 md:overflow-visible">
                {products.map((item, index) => (
                 <div
           key={index}
           className="border-r border-b border-gray-300 py-6 px-5 relative h-40  min-w-45  md:min-w-0"
         >
           <div>
             <h3 className="text-lg">{item.name}</h3>
         
             <p className="text-gray-400">
               From
               <br />
               {item.price}
             </p>
           </div>
         
           <div className="w-16 h-16 md:w-18 md:h-18 lg:w-20 lg:h-20 absolute right-3 bottom-3">
             <img
               src={item.img}
               alt={item.name}
               className="w-full h-full object-contain"
             />
           </div>
         </div>
                    ))}
                  </div>
            
         </div>
         </div>
         
             
        <div className="overflow-x-auto my-7">
        
      <div className="max-w-350 bg-white rounded-md border border-gray-400 mx-1 md:mx-15 flex flex-col md:flex-row">
            <h2 className="text-2xl p-3 md:hidden block font-bold leading-tight">
               Consumer electronic
             </h2>
           {/* Left Banner */}
           <div
             className="relative w-57 hidden md:block  border-r border-gray-300 p-6"
             style={{
               backgroundImage:
                 "url(' https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyT09vetod6DGrpqJBKGnJujZO35q6cYZkFw&s')",
               backgroundSize: "cover",
               backgroundPosition: "center",
             }}
           >
             <h2 className="text-2xl font-bold leading-tight">
               Consumer <br />
               electronic and <br/>
               gadgets
             </h2>
     
                <button className="mt-8 bg-white px-8 py-3 rounded-lg shadow font-medium">
                  Source now
                </button>
              </div>
     
              {/* Right Products */}
            <div className="col-span-4 flex md:grid md:grid-cols-4 overflow-x-auto md:w-242 md:overflow-visible">
                {products.map((item, index) => (
                 <div
           key={index}
           className="border-r border-b border-gray-300 py-6 px-5 relative h-40  min-w-45  md:min-w-0"
         >
           <div>
             <h3 className="text-lg">{item.name}</h3>
         
             <p className="text-gray-400">
               From
               <br />
               {item.price}
             </p>
           </div>
         
           <div className="w-16 h-16 md:w-18 md:h-18 lg:w-20 lg:h-20 absolute right-3 bottom-3">
             <img
               src={item.img}
               alt={item.name}
               className="w-full h-full object-contain"
             />
           </div>
         </div>
                    ))}
                  </div>
            
         </div>
         </div>

      <div className="max-w-350 rounded-md flex justify-between mx-1 md:mx-15 p-8 mb-4 relative overflow-hidden"
         style={{
           backgroundImage:
             "url('https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1200')",
           backgroundSize: "cover",
           backgroundPosition: "center",
         }}>
  {/* Blue Overlay */}
  <div className="absolute inset-0 bg-blue-600/60"></div>

  {/* Content */}
  <div className="relative z-10">
    <div className="">
        <h1 className='text-3xl font-bold text-white'>An easy way to send  <br/>
          request to all suppliers
          </h1>
     <p className="text-white py-1">Lorem ipsum, dolor sit amet consectetur adipisicing elit.<br/>
      Lorem ipsum dolor sit.</p>
      </div>
      </div>
            {/* form section */}
   <div className="max-w-md z-10 hidden md:block bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
      {/* Header Section */}
      <div className="mb-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-1">
          Send quote to suppliers
        </h2>
        <div className="h-1 w-16 bg-blue-500 rounded-full"></div>
      </div>

      {/* Item Field */}
      <div className="mb-3">
        <input 
          type="text"
          placeholder="What item you need?"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all text-gray-700 placeholder-gray-400"
        />
      </div>

      {/* Details Field */}
      <div className="mb-3">
        <textarea 
          rows="3"
          placeholder="Type more details"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all text-gray-700 placeholder-gray-400 resize-none"
        ></textarea>
      </div>

      {/* Quantity Field */}
      <div className="mb-4">
        <div className="relative">
          <input 
            type="number"
            placeholder=" Quantity"
            defaultValue=""
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all text-gray-700 placeholder-gray-400"
          />
          <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 text-sm font-medium pointer-events-none">
            Pcs
          </div>
        </div>
      </div>

      {/* Send Inquiry Button */}
      <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98] shadow-md hover:shadow-lg">
        Send inquiry
      </button>

      {/* Optional: Subtle helper text */}
      <p className="text-xs text-gray-400 text-center mt-4">
        Suppliers will respond to your quote request within 24 hours
      </p>
    </div>
     </div>
     
      
    
    {/* extra services */}

        <div className="py-16 hidden md:block px-4 ">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 mb-4">
            Our Extra Services
          </h2>
          
        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-6 border border-gray-100 hover:border-transparent overflow-hidden"
            >
              {/* Gradient Background on Hover */}
              <div className="absolute inset-0 bg-linear-to-br opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none"></div>
              
              {/* Icon with Gradient Background */}
              <div className={`w-14 h-14 rounded-xl bg-linear-to-br ${service.color} flex items-center justify-center mb-5 text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                {service.icon}
              </div>
              
              {/* Title */}
              <h3 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors duration-200">
                {service.title}
              </h3>
              
              {/* Description */}
              <p className="text-gray-500 text-sm leading-relaxed">
                {service.description}
              </p>
              
              {/* Decorative Line */}
              <div className={`absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r ${service.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`}></div>
            </div>
          ))}
        </div>
      </div>
    </div>
    
   
   {/* uioewyudy */}
   
    <div className=" max-w-350 mx-1 md:mx-15 p-4 mb-3 ">
      {/* Header */}
      <div className="mb-2">
        <h2 className="text-2xl font-bold text-gray-800">Suppliers by region</h2>
        <p className="text-gray-500 text-sm mt-1">{suppliers.length} regions available</p>
      </div>

      {/* Suppliers List */}
      <div className=" grid grid-cols-3 md:grid-cols-5">
        {suppliers.map((supplier, index) => (
          <div
            key={index}
            className=" p-2 md:p-4  flex items-center gap-4 group cursor-pointer"
          >
            {/* Flag Icon */}
            <div className={`w-14 h-14 ${supplier.color} rounded-xl flex items-center justify-center text-xl group-hover:scale-110 transition-transform duration-200`}>
              <img src={supplier.flag} alt="" />
            </div>

            {/* Supplier Details */}
            <div className="flex-1">
              <div className=" gap-2">
                <span className=" text-gray-900">{supplier.region}</span>
              </div>
              <p className="text-gray-600 text-sm mt-1">{supplier.domain}</p>
            </div>

            {/* Arrow Icon */}
            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200">
              <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>
        ))}
      </div>
    </div>
    
   {/* footer   ...... */}
     
     <Footer/>     
    </div>
    </>
   
  )
}

export default Home