import { FaCheck } from "react-icons/fa";

export default function ProductDescription() {
  const suggestions = [
    {
      name: "Men Blazers Sets Elegant Formal",
      price: "$7.00 - $99.50",
      img: "https://cdn-icons-png.flaticon.com/512/892/892458.png",
    },
    {
      name: "Men Shirt Sleeve Polo Contrast",
      price: "$7.00 - $99.50",
      img: "https://cdn-icons-png.flaticon.com/512/892/892458.png",
    },
    {
      name: "Apple Watch Series Space Gray",
      price: "$7.00 - $99.50",
      img: "https://cdn-icons-png.flaticon.com/512/3082/3082037.png",
    },
    {
      name: "Basketball Crew Socks Long Stuff",
      price: "$7.00 - $99.50",
      img: "https://cdn-icons-png.flaticon.com/512/4252/4252365.png",
    },
    {
      name: "New Summer Men's T-Shirts",
      price: "$7.00 - $99.50",
      img: "https://cdn-icons-png.flaticon.com/512/3082/3082037.png",
    },
  ];

  return (
    <div className="max-w-350 mx-auto md:p-4 mt-2">
      <div className="grid grid-cols-1 lg:grid-cols-10 gap-3">

        {/* LEFT SECTION */}
        <div className="lg:col-span-7  rounded-md bg-white">

          {/* Tabs */}
          <div className="flex border-b overflow-x-scroll">
            <button className="px-6 py-4 text-blue-600 border-b-2 border-blue-600 font-medium">
              Description
            </button>

            <button className="px-6 py-4 text-gray-500">
              Reviews
            </button>

            <button className="px-6 py-4 text-gray-500">
              Shipping
            </button>

            <button className="px-6 py-4 text-gray-500">
              About seller
            </button>
          </div>

          <div className="p-6">

            {/* Description */}
            <p className="text-gray-600 leading-7">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>

            <p className="text-gray-600 leading-7 ">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit amet,
              consectetur adipisicing elit.
            </p>

            {/* Table */}
            <div className="mt-6 overflow-hidden border border-gray-300 max-w-xl">
              <table className="w-full">
                <tbody>
                  <tr className="border-b border-b-gray-300">
                    <td className="bg-gray-200 p-3 w-44">Model</td>
                    <td className="p-3">#8786867</td>
                  </tr>

                  <tr className="border-b border-b-gray-300">
                    <td className="bg-gray-200 p-3">Style</td>
                    <td className="p-3">Classic style</td>
                  </tr>

                  <tr className="border-b border-b-gray-300">
                    <td className="bg-gray-200 p-3">Certificate</td>
                    <td className="p-3">ISO-898921212</td>
                  </tr>

                  <tr className="border-b border-b-gray-300">
                    <td className="bg-gray-200 p-3">Size</td>
                    <td className="p-3">34mm x 450mm x 19mm</td>
                  </tr>

                  <tr>
                    <td className="bg-gray-200 p-3">Memory</td>
                    <td className="p-3">36GB RAM</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Features */}
            <div className="mt-8 space-y-4">

              <div className="flex items-center gap-3 text-gray-600">
                <FaCheck className="text-gray-500 text-sm" />
                <span>Some great feature name here</span>
              </div>

              <div className="flex items-center gap-3 text-gray-600">
                <FaCheck className="text-gray-500 text-sm" />
                <span>Lorem ipsum dolor sit amet, consectetur</span>
              </div>

              <div className="flex items-center gap-3 text-gray-600">
                <FaCheck className="text-gray-500 text-sm" />
                <span>Duis aute irure dolor in reprehenderit</span>
              </div>

              <div className="flex items-center gap-3 text-gray-600">
                <FaCheck className="text-gray-500 text-sm" />
                <span>Some great feature name here</span>
              </div>

            </div>
          </div>
        </div>

        {/* RIGHT SIDEBAR */}
        <div className="lg:col-span-3 hidden md:block  rounded-md bg-white p-4">

          <h3 className="font-semibold text-lg mb-4">
            You may like
          </h3>

          <div className="space-y-4">
            {suggestions.map((item, index) => (
              <div
                key={index}
                className="flex gap-3"
              >
                <div className="w-18 h-18 border border-gray-300 rounded-md p-2 shrink-0">
                  <img
                    src={item.img}
                    alt=""
                    className="w-full h-full object-contain"
                  />
                </div>

                <div>
                  <h4 className="text-sm text-gray-700 leading-5">
                    {item.name}
                  </h4>

                  <p className="text-gray-400 mt-1">
                    {item.price}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}