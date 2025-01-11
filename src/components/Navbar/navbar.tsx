'use client';
import React, { useState } from 'react';
import { useAuth } from '../../contexts/auth-context'; // Adjust the path as needed
import Link from 'next/link';
import Mobilenavbar from './mobilenavbar'; // Adjust the path as needed

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, logout } = useAuth(); // Fetch user info and logout function from auth context

  return (
    <>
      <nav className="w-[55%] hidden md:block backdrop-blur-xl bg-black/40 font-Cattedrale fixed top-3 z-50 rounded-full shadow-lg">
        <div className="mx-auto px-12 sm:max-w-full">
          <div className="h-14 flex items-center w-full">
            <div className="hidden md:block min-w-full">
              <div className="flex items-center justify-between w-full">
                {['Home', 'About us', 'Events', 'Sponsors', 'FAQs', 'Profile'].map((item, index) => (
                  <Link
                    key={index}
                    href={
                      item === 'Home'
                        ? '/'
                        : item === 'Profile'
                          ? '/profile'
                          : `#${item.toLowerCase().replace(' ', '-')}`
                    }
                    className="text-white hover:text-[#CBFFFF] transition-colors tracking-wide duration-200 font-medium text-lg"
                  >
                    {item}
                  </Link>


                ))}
              </div>
            </div>
          </div>
        </div>
      </nav>
      <div className="max-w-7xl mt-4 mx-auto pr-4 absolute right-0 sm:pr-0 lg:pr-3 2xl:pr-0 h-20">
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

    </>
  );
};

export default Navbar;
