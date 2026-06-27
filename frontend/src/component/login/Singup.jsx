import React, { useState } from 'react';
import { useGlobal } from '../../Context/context';

const SingupForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    
    // Name validation
    if (!name) newErrors.name = 'Full name is required';
    else if (name.length < 2) newErrors.name = 'Name must be at least 2 characters';
    else if (!/^[a-zA-Z\s]+$/.test(name)) newErrors.name = 'Name can only contain letters and spaces';
    
    // Email validation
    if (!email) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(email)) newErrors.email = 'Email is invalid';
    
    // Password validation
    if (!password) newErrors.password = 'Password is required';
    else if (password.length < 6) newErrors.password = 'Password must be at least 6 characters';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      // In a real app, you would call an API here
      console.log('Signup successful', { name, email, password });
      alert('Signup successful! (demo)');
    }
  };
  const {showsignup , setshowlogin , setshowsignup} = useGlobal()
  return (
    <div className={`fixed ${showsignup ? "block " : "hidden"} lg:top-17 md:top-28 sm:top-29 top-30 flex justify-end right-5 w-full min-h-screen z-666`}>
      <div className="w-full max-w-md h-125 bg-white backdrop-blur-sm rounded-xl shadow-xl shadow-blue-200/50 p-8 border border-white/60 transition-all duration-300 hover:shadow-2xl">
        <div className="text-center mb-4">
          <div className="flex items-center justify-center gap-2 text-3xl font-bold text-slate-800">
            <span className="text-blue-600 text-4xl">⏺</span>
            <span>Sign Up</span>
          </div>
          <p className="text-slate-500 text-sm mt-1 border-b border-blue-100 pb-2">
            Create a new account!
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-3">
          {/* Name Input */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1.5">
              Full Name
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-slate-400">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                </svg>
              </span>
              <input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className={`w-full pl-10 pr-4 py-2 rounded-xl border ${errors.name ? 'border-red-400 bg-red-50' : 'border-slate-200 bg-slate-50/80'} focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 placeholder:text-slate-400`}
                placeholder="John Doe"
                autoComplete="name"
              />
            </div>
            {errors.name && (
              <p className="mt-1.5 text-sm text-red-500 flex items-center gap-1">
                <span>⚠️</span> {errors.name}
              </p>
            )}
          </div>

          {/* Email Input */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1.5">
              Email address
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-slate-400">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
              </span>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={`w-full pl-10 pr-4 py-2 rounded-xl border ${errors.email ? 'border-red-400 bg-red-50' : 'border-slate-200 bg-slate-50/80'} focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 placeholder:text-slate-400`}
                placeholder="you@example.com"
                autoComplete="email"
              />
            </div>
            {errors.email && (
              <p className="mt-1.5 text-sm text-red-500 flex items-center gap-1">
                <span>⚠️</span> {errors.email}
              </p>
            )}
          </div>

          {/* Password Input */}
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-slate-700 mb-1.5">
              Password
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-slate-400">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                </svg>
              </span>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={`w-full pl-10 pr-4 py-2 rounded-xl border ${errors.password ? 'border-red-400 bg-red-50' : 'border-slate-200 bg-slate-50/80'} focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 placeholder:text-slate-400`}
                placeholder="••••••••"
                autoComplete="new-password"
              />
            </div>
            {errors.password && (
              <p className="mt-1.5 text-sm text-red-500 flex items-center gap-1">
                <span>⚠️</span> {errors.password}
              </p>
            )}
          </div>

          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2 text-slate-600 cursor-pointer">
              <input type="checkbox" className="w-4 h-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500" />
              Remember me
            </label>
            <a href="#" className="text-blue-600 hover:text-blue-800 font-medium hover:underline transition-colors">
              Forgot password?
            </a>
          </div>

          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl shadow-md shadow-blue-200/70 hover:shadow-lg hover:shadow-blue-300/50 transition-all duration-200 flex items-center justify-center gap-2 text-lg"
          >
            <span>Sign up</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>

          <p className="text-center text-slate-500 text-sm mt-3 pt-2 border-t border-slate-200/70">
            Already have an account?{' '}
                     <span
  onClick={() => {
    setshowlogin(true);
    setshowsignup(false);
  }}
  className="text-blue-600 font-medium hover:text-blue-800 hover:underline cursor-pointer"
>
  Sing in
</span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SingupForm;