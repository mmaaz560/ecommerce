import React, { useState } from 'react'
import { brands, categories, feature, rating } from '../../datas/cardList'
import { Check } from 'lucide-react';

const Categori = () => {
    const [brandStates, setBrandStates] = useState(brands);
  
    const toggleBrand = (index) => {
      const updated = [...brandStates];
      updated[index].checked = !updated[index].checked;
      setBrandStates(updated);
    };
     const [minPrice, setMinPrice] = useState(0);
    const [maxPrice, setMaxPrice] = useState(999999);
    const [condition, setCondition] = useState('Any');
  
    const handleApply = () => {
      console.log('Price range:', { min: minPrice, max: maxPrice });
      console.log('Condition:', condition);
    };
  return (
    <>
      <div className="min-h-screen hidden md:block w-40 md:w-50 lg:w-60  font-sans">
      {/* Main Container */}
      <div className="max-w-6xl mx-auto ps-6">
        
        {/* Category Section Header */}
        <div className="mb-6 border-t border-gray-400">
          <h1 className="text-lg md:text-xl font-semibold text-gray-900 ">Category</h1>
        </div>

        {/* Categories Row - Flex horizontal layout */}
        <div className=" mb-4 pb-2 border-b border-gray-400">
          {categories.map((cat, idx) => (
            <div
              key={idx} 
              className="flex items-center  cursor-pointer group hover:bg-gray-50 p-2  gap-2  text-lg ">
              {cat.name}
            </div>
          ))}
        </div>

        {/* Brands Section */}
        <div className="mb-4 border-b pb-4 border-gray-300">
          <div className="flex items-center justify-between mb-5">
            <h2 className="text-lg md:text-xl font-semibold text-gray-900">Brands</h2>
          </div>
          
          {/* Brands List - Checkbox style exactly as shown */}
          <div className="space-y-3">
            {brandStates.map((brand, idx) => (
              <label
                key={idx}
                className="flex items-center gap-2 cursor-pointer group hover:bg-gray-50 px-2 text-lg "
              >
                 <div className="relative">
                  <input
                    type="checkbox"
                    checked={brand.checked}
                    onChange={() => toggleBrand(idx)}
                    className="w-5 h-5 rounded-lg border-2 border-gray-300 text-gray-900 focus:ring-2 focus:ring-gray-400 focus:ring-offset-0 cursor-pointer"
                  />
                  {brand.checked && (
                    <Check size={12} className="absolute top-1 left-1 text-white pointer-events-none" />
                  )}
                </div>
               {brand.name}
              </label>
            ))}
          </div>
        </div>

        {/* features section*/}
         <div className=" border-b pb-4 border-gray-300">
          <div className="flex items-center justify-between mb-5">
            <h2 className="text-lg md:text-xl font-semibold text-gray-900">Features</h2>
          </div>
          
          {/* Brands List - Checkbox style exactly as shown */}
          <div className="space-y-3">
            {feature.map((brand, idx) => (
              <label
                key={idx}
                className="flex items-center gap-2 cursor-pointer group hover:bg-gray-50 px-2 text-lg "
              >
                 <div className="relative">
                  <input
                    type="checkbox"
                    checked={brand.checked}
                    onChange={() => toggleBrand(idx)}
                    className="w-5 h-5 rounded-lg border-2 border-gray-300 text-gray-900 focus:ring-2 focus:ring-gray-400 focus:ring-offset-0 cursor-pointer"
                  />
                  {brand.checked && (
                    <Check size={12} className="absolute top-1 left-1 text-white pointer-events-none" />
                  )}
                </div>
               {brand.name}
              </label>
            ))}
          </div>
        </div>
         
    <div className=" flex items-center justify-center p-4">
      {/* Filter Card Container */}
      <div className=" w-full ">
        
        {/* Price Range Section */}
        <div className="">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Price range</h3>
          
          {/* Min / Max Input Row */}
          <div className="flex gap-3 mb-4">
            <div className="flex-1">
              <label className="block text-xs text-gray-500 mb-1">Min</label>
              <input
                type="number"
                value={minPrice}
                onChange={(e) => setMinPrice(Number(e.target.value))}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent text-gray-900"
                placeholder="0"
              />
            </div>
            <div className="flex-1">
              <label className="block text-xs text-gray-500 mb-1">Max</label>
              <input
                type="number"
                value={maxPrice}
                onChange={(e) => setMaxPrice(Number(e.target.value))}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent text-gray-900"
                placeholder="999999"
              />
            </div>
          </div>

          {/* Apply Button */}
          <button
            onClick={handleApply}
            className="w-full py-2.5 bg-gray-900 text-white rounded-lg font-medium hover:bg-gray-800 transition-colors duration-200"
          >
            Apply
          </button>
        </div>

        {/* Divider */}
        <div className="h-px bg-gray-200 my-6"></div>

        {/* Condition Section */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Condition</h3>
          
          <div className="space-y-3">
            {/* Any */}
            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="radio"
                name="condition"
                value="Any"
                checked={condition === 'Any'}
                onChange={(e) => setCondition(e.target.value)}
                className="w-4 h-4 text-gray-900 focus:ring-gray-400 focus:ring-offset-0 border-gray-300"
              />
              <span className="text-gray-700">Any</span>
            </label>

            {/* Refurbished */}
            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="radio"
                name="condition"
                value="Refurbished"
                checked={condition === 'Refurbished'}
                onChange={(e) => setCondition(e.target.value)}
                className="w-4 h-4 text-gray-900 focus:ring-gray-400 focus:ring-offset-0 border-gray-300"
              />
              <span className="text-gray-700">Refurbished</span>
            </label>

            {/* Brand new */}
            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="radio"
                name="condition"
                value="Brand new"
                checked={condition === 'Brand new'}
                onChange={(e) => setCondition(e.target.value)}
                className="w-4 h-4 text-gray-900 focus:ring-gray-400 focus:ring-offset-0 border-gray-300"
              />
              <span className="text-gray-700">Brand new</span>
            </label>

            {/* Old items */}
            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="radio"
                name="condition"
                value="Old items"
                checked={condition === 'Old items'}
                onChange={(e) => setCondition(e.target.value)}
                className="w-4 h-4 text-gray-900 focus:ring-gray-400 focus:ring-offset-0 border-gray-300"
              />
              <span className="text-gray-700">Old items</span>
            </label>
          </div>
        </div>
      </div>

     
      
    </div>
     <div className="mb-4 border-b pb-4 border-gray-300">
          <div className="flex items-center justify-between mb-5">
            <h2 className="text-lg md:text-xl font-semibold text-gray-900">Brands</h2>
          </div>
          
          {/* Ratings -  */}
          <div className="space-y-3">
            {rating.map((brand, idx) => (
              <label
                key={idx}
                className="flex items-center gap-2  cursor-pointer group hover:bg-gray-50 px-2 text-2xl text-yellow-300"
              >
                 <div className="relative">
                  <input
                    type="checkbox"
                    checked={brand.checked}
                    onChange={() => toggleBrand(idx)}
                    className="w-5 h-5 rounded-lg border-2 border-gray-300 text-gray-900 focus:ring-2 focus:ring-gray-400 focus:ring-offset-0 cursor-pointer"
                  />
                  {brand.checked && (
                    <Check size={12} className="absolute top-1 left-1 text-white pointer-events-none" />
                  )}
                </div>
               {brand.star}
              </label>
            ))}
          </div>
        </div>
       </div>
       </div>
    </>
  )
}

export default Categori