import React from 'react'

const Footer = () => {
  return (
    <>
       <footer className="bg-white border-t hidden md:block  border-gray-200">
      {/* Newsletter Section */}
      <div className="max-w-7xl bg-gray-200 mx-auto px-4 py-12">
        <div className="">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-2">
            Subscribe on our newsletter
          </h3>
          <p className="text-gray-500 text-sm max-w-md mx-auto">
            Get daily news on upcoming offers from many suppliers all over the world
          </p>
        </div>

        {/* Email Form */}
        <div className="flex flex-col  sm:flex-row justify-center gap-3 max-w-md mx-auto mb-16">
          <input
            type="email"
            placeholder="Email"
            className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all text-gray-700 placeholder-gray-400"
          />
          <button className="px-6 py-3 bg-gray-900 hover:bg-gray-800 text-white font-semibold rounded-lg transition-all duration-200 shadow-md hover:shadow-lg">
            Subscribe
          </button>
        </div>
       </div>
       </div>
        {/* Footer Links Grid */}
        <div className="bg-white py-8  ms-15">
        <div className="grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-10">
          {/* Brand Column */}
          <div className="col-span-1">
            <h4 className="font-bold text-blue-400 text-xl mb-3">Brand</h4>
            <p className="text-gray-500 text-sm leading-relaxed">
              Best information about the company gives here but now lorem ipsum is
            </p>
          </div>

          {/* About Column */}
          <div>
            <h4 className="font-semibold text-gray-800 mb-3">About</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-500 hover:text-gray-900 text-sm transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-500 hover:text-gray-900 text-sm transition-colors">Find store</a></li>
              <li><a href="#" className="text-gray-500 hover:text-gray-900 text-sm transition-colors">Categories</a></li>
              <li><a href="#" className="text-gray-500 hover:text-gray-900 text-sm transition-colors">Blogs</a></li>
            </ul>
          </div>

          {/* Partnership Column */}
          <div>
            <h4 className="font-semibold text-gray-800 mb-3">Partnership</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-500 hover:text-gray-900 text-sm transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-500 hover:text-gray-900 text-sm transition-colors">Find store</a></li>
              <li><a href="#" className="text-gray-500 hover:text-gray-900 text-sm transition-colors">Categories</a></li>
              <li><a href="#" className="text-gray-500 hover:text-gray-900 text-sm transition-colors">Blogs</a></li>
            </ul>
          </div>

          {/* Information Column */}
          <div>
            <h4 className="font-semibold text-gray-800 mb-3">Information</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-500 hover:text-gray-900 text-sm transition-colors">Help Center</a></li>
              <li><a href="#" className="text-gray-500 hover:text-gray-900 text-sm transition-colors">Money Refund</a></li>
              <li><a href="#" className="text-gray-500 hover:text-gray-900 text-sm transition-colors">Shipping</a></li>
              <li><a href="#" className="text-gray-500 hover:text-gray-900 text-sm transition-colors">Contact us</a></li>
            </ul>
          </div>

          {/* For users Column */}
          <div>
            <h4 className="font-semibold text-gray-800 mb-3">For users</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-500 hover:text-gray-900 text-sm transition-colors">Login</a></li>
              <li><a href="#" className="text-gray-500 hover:text-gray-900 text-sm transition-colors">Register</a></li>
              <li><a href="#" className="text-gray-500 hover:text-gray-900 text-sm transition-colors">Settings</a></li>
              <li><a href="#" className="text-gray-500 hover:text-gray-900 text-sm transition-colors">My Orders</a></li>
            </ul>
          </div>

          {/* Get app Column */}
          <div>
            <h4 className="font-semibold text-gray-800 mb-3">Get app</h4>
            <div className="space-y-2">
              <button className="w-full bg-black text-white px-4 py-2 rounded-lg text-sm flex items-center justify-center gap-2 hover:bg-gray-900 transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17.36 3 13.5 3 10.54c0-4.3 2.79-6.56 5.54-6.56 1.46 0 2.68.98 3.6.98.91 0 2.34-1.21 3.95-1.03.67.03 2.56.27 3.77 2.04-.1.06-2.25 1.31-2.22 3.92.03 3.13 2.74 4.17 2.77 4.18-.02.08-.43 1.48-1.42 2.93zM15 3.5c.54-.65 1.27-1.14 2.12-1.28.19 1.53-.56 3.01-1.52 3.97-.8.8-1.89 1.34-2.92 1.41-.2-1.5.49-3.03 1.42-4.1z"/>
                </svg>
                App Store
              </button>
              <button className="w-full bg-black text-white px-4 py-2 rounded-lg text-sm flex items-center justify-center gap-2 hover:bg-gray-900 transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zM14.5 12.5L5.75 21.25 16.5 13.5h-2zM16.5 10.5L5.75 2.75 14.5 10.5h2zM17.5 12.5l-3 3 2.5 2.5 3.5-3.5-3-2zM17.5 11.5l3-3-3.5-3.5-2.5 2.5 3 3z"/>
                </svg>
                Google Play
              </button>
            </div>
          </div>
        </div>
         </div>
        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row justify-between items-center pt-6 border-t border-gray-200 gap-4">
          <p className="text-gray-400 text-sm">
            © 2023 Ecommerce.
          </p>
          <button className="flex items-center gap-1 text-gray-500 hover:text-gray-900 text-sm transition-colors">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            English
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>
      
    </footer>
    </>
  )
}

export default Footer