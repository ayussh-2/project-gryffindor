'use client';
import React, { useState } from 'react';
import Mobilenavbar from './mobilenavbar';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
    <div className="w-full flex justify-center px-4 mt-6">
      <nav className="w-[50%] max-w-6xl hidden md:block bg-white/70 backdrop-blur-lg rounded-full shadow-lg">
        <div className="mx-auto px-6 sm:max-w-full">
          <div className="h-14 flex items-center w-full">
            {/* Desktop Navigation */}
            <div className="hidden md:block min-w-full">
              <div className="flex items-center justify-between">
                {['About us', 'Events', 'Sponsors', 'Contact Us'].map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase().replace(' ', '-')}`}
                    className="text-gray-700 hover:text-indigo-600 transition-colors duration-200 font-medium text-sm"
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>
      </div>
        </div>
      </nav>
    </div>
    <nav className="text-white w-full">
    <div className="max-w-7xl mx-auto pr-4 absolute right-0 sm:pr-0 lg:pr-3 2xl:pr-0 h-20">
    <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 h-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={
                  isMenuOpen
                    ? "M6 18L18 6M6 6l12 12"
                    : "M4 6h16M4 12h16M4 18h16"
                }
              />
            </svg>
          </button>
        </div>
        <Mobilenavbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
    </div>
    </nav>
    </>
  );
};

export default Navbar;