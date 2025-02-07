import React from "react";
import { Link } from "react-router";

function MainNav() {
  return (
    <nav className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-700 bg-opacity-90 backdrop-blur-lg shadow-2xl text-white flex justify-between items-center font-semibold px-10 py-3 rounded-xl border border-white/10">
      
      {/* เมนูหลัก */}
      <div className="hidden md:flex gap-8 text-lg">
        <Link to="/" className="relative group">
          Home
          <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
        </Link>
        <Link to="/about" className="relative group">
          About
          <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
        </Link>
      </div>

      {/* ปุ่ม Register & Login */}
      <div className="flex gap-4">
        <Link
          to="/register"
          className="bg-white text-indigo-700 px-6 py-2 rounded-lg shadow-lg hover:shadow-2xl hover:bg-gray-200 transition-all duration-300 transform hover:-translate-y-1"
        >
          Register
        </Link>
        <Link
          to="/login"
          className="border border-white px-6 py-2 rounded-lg hover:bg-white hover:text-indigo-700 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
        >
          Login
        </Link>
      </div>
    </nav>
  );
}

export default MainNav;
