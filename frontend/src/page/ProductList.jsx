import React, { useState } from 'react'
import Secondbar from '../component/Secondbar'
import { ChevronRight, Check, Star, Search, ShoppingBag, Menu } from 'lucide-react';
import Listcart from '../component/Listcart';
import { brands, cardList, categories } from '../datas/cardList';
import Footer from '../component/Footer';
import Categori from '../component/Weblist/Categori';
import { Link } from 'react-router-dom';

const ProductList = () => {

   


  
  return (
    <>
     <Secondbar/>
      <div className=" flex md:gap-8  md:px-15 pt-5 w-full bg-gray-100 ">

         {/* left side sidebar */}
        
        <Categori/>

       {/* Right side product list */}
       
        <div className="w-260 mb-4">
          {
            cardList.map((item,index)=>{
              return(
                <Link
                   to='./CardDetails'
                   key={index} 
                   >
                 <Listcart {...item}/>
                 </Link>
                 )
            })
          }
        </div>
       
      </div>

     {/* footer...... */}

     <Footer/>
    </>
  )
}

export default ProductList