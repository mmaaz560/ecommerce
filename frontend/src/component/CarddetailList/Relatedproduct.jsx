import React from "react";

const relatedProducts = [
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

export default function RelatedProducts() {
  return (
    <div className="max-w-350 mx-auto md:p-4 ">

      {/* Related Products */}
      <div className="bg-white shadow-2xl rounded-md p-5">
        <h2 className="text-2xl font-semibold mb-5">
          Related products
        </h2>

        <div className="flex items-center  gap-3 overflow-x-auto">
          {relatedProducts.map((item, index) => (
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

      {/* Discount Banner */}
      <div className="mt-5 relative overflow-hidden rounded-md">

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