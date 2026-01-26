import React from "react";
import { Eye, X } from "lucide-react"; // for the eye and clear icons

function Login() {
  return (
    <div className="h-screen w-full flex items-center justify-center bg-pink-50">
      <div className="flex max-w-6xl  w-full bg-white rounded-3xl shadow-2xl overflow-hidden">
        {/* Left Side - Image */}
        <div className="w-1/2 relative bg-gray-200 border-gray-700 rounded-3xl">
          
          {/* Reviews overlay */}
          <div className="absolute bottom-5 left-5 bg-black/50 rounded-xl px-4 py-2 flex items-center gap-2">
            <div className="flex -space-x-2">
              <img className="w-8 h-8 rounded-full border-2 border-white" src="/user1.jpg" alt="User1"/>
              <img className="w-8 h-8 rounded-full border-2 border-white" src="/user2.jpg" alt="User2"/>
              <img className="w-8 h-8 rounded-full border-2 border-white" src="/user3.jpg" alt="User3"/>
              <img className="w-8 h-8 rounded-full border-2 border-white" src="/user4.jpg" alt="User4"/>
            </div>
            <span className="text-white text-sm ml-2">
              ★★★★★ 5.0 from 350+ reviews
            </span>
          </div>
        </div>

        {/* Right Side - Form */}
        <div className="w-1/2 p-16 flex flex-col bg-pink-50 justify-center">
          {/* Top Icon */}
          <div className="flex justify-center mb-4">
            <div className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center">
              <span className="text-white text-2xl font-bold">⟳</span> {/* Replace with your real icon if needed */}
            </div>
          </div>

          <h1 className="text-4xl font-semibold text-center mb-2">Welcome back</h1>
          <p className="text-gray-500 text-center mb-8">Please enter your details</p>

          <form className="flex flex-col gap-6">
            {/* Email */}
            <div className="flex flex-col gap-2">
              <label className="text-lg font-medium text-gray-700">Email</label>
              <div className="relative">
                <input
                  type="email"
                  placeholder="eva.holland@example.com"
                  className="w-full border-b border-gray-300 py-4 pr-10 text-lg focus:outline-none focus:border-black rounded-sm"
                />
                <button type="button" className="absolute right-0 top-1/2 -translate-y-1/2 p-2 text-gray-400 hover:text-gray-700">
                  <X size={18} />
                </button>
              </div>
            </div>

            {/* Password */}
            <div className="flex flex-col gap-2">
              <label className="text-lg font-medium text-gray-700">Password</label>
              <div className="relative">
                <input
                  type="password"
                  placeholder="Enter your password"
                  className="w-full border-b border-gray-300 py-4 pr-10 text-lg focus:outline-none focus:border-black rounded-sm"
                />
                <button type="button" className="absolute right-0 top-1/2 -translate-y-1/2 p-2 text-gray-400 hover:text-gray-700">
                  <Eye size={18} />
                </button>
              </div>
            </div>

            {/* Remember / Forgot */}
            <div className="flex items-center justify-between mt-2">
              <label className="flex items-center gap-2 text-gray-700 font-medium">
                <input
                  type="checkbox"
                  className="w-5 h-5 rounded-md border border-gray-400 checked:bg-blue-500 appearance-none cursor-pointer"
                />
                Remember me
              </label>
              <a href="#" className="text-gray-800 font-medium">Forgot password?</a>
            </div>

            {/* Buttons */}
            <button
              type="submit"
              className="w-full h-16 bg-black text-white text-lg font-medium rounded-2xl hover:bg-gray-800"
            >
              Sign in
            </button>

            <button
              type="button"
              className="w-full h-16 border border-gray-300 rounded-2xl text-gray-800 text-lg font-medium flex items-center justify-center gap-3 hover:bg-gray-100"
            >
              {/* Google Icon */}
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512" className="w-6 h-6">
                <path fill="#EA4335" d="M488 261.8c0-17.7-1.5-34.8-4.3-51.4H249v97.3h135.5c-5.9 31.8-23.3 58.9-49.7 77.2v64.1h80.2c46.9-43.2 73.9-107 73.9-186.2z"/>
                <path fill="#34A853" d="M249 508c67.2 0 123.6-22.3 164.8-60.3l-80.2-64.1c-22.2 15-50.7 23.7-84.6 23.7-64.9 0-119.9-43.7-139.7-102.1H28.1v64.5C69 454.8 153 508 249 508z"/>
                <path fill="#4A90E2" d="M109.3 308.3c-5.2-15.2-8.2-31.3-8.2-48s3-32.8 8.2-48V147.8H28.1C10.5 182.1 0 222.3 0 264s10.5 81.9 28.1 116.2l81.2-71.9z"/>
                <path fill="#FBBC05" d="M249 100.5c35.9 0 68.1 12.3 93.6 36.6l70.2-70.2C372.2 31 314.8 0 249 0 153 0 69 53.2 28.1 147.8l81.2 71.9c19.8-58.4 74.8-102.1 139.7-102.1z"/>
              </svg>
              Sign in with Google
            </button>

            <p className="text-center text-gray-500 mt-4 text-lg">
              Don’t have an account? <a href="#" className="font-bold text-black">Sign Up</a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;