"use client";
import React, { useState } from "react";

import Link from "next/link";

import { useAuth } from "../../contexts/auth-context";
import Mobilenavbar from "./mobilenavbar";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { user } = useAuth();

    return (
        <>
            <nav
                className="w-[55%] hidden md:block backdrop-blur-xl bg-black/40 font-Cattedrale fixed top-7 rounded-full shadow-lg"
                style={{
                    zIndex: 9999999,
                }}
            >
                <div className="mx-auto px-12 sm:max-w-full">
                    <div className="h-14 flex items-center w-full">
                        <div className="hidden md:block min-w-full">
                            <div className="flex items-center justify-between w-full">
                                {[
                                    "Home",
                                    "About us",
                                    "Events",
                                    "Sponsors",
                                    "FAQs",
                                ].map((item, index) => (
                                    <Link
                                        key={index}
                                        href={
                                            item === "Home"
                                                ? "/"
                                                : `#${item
                                                      .toLowerCase()
                                                      .replace(" ", "-")}`
                                        }
                                        className="text-white hover:text-[#CBFFFF] transition-colors tracking-wide duration-200 font-medium text-lg"
                                    >
                                        {item}
                                    </Link>
                                ))}
                                <Link
                                    href={user ? "/profile" : "/login"}
                                    className="text-white hover:text-[#CBFFFF] transition-colors tracking-wide duration-200 font-medium text-lg"
                                >
                                    {user ? "Profile" : "Login"}
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
            <section className="relative flex justify-between items-center w-full px-4 py-4 md:px-12 md:py-6">
                <div className="absolute z-[1000] right-5 mt-10">
                    <div className="md:hidden">
                        <button
                            onClick={() => {
                                setIsMenuOpen(!isMenuOpen);
                            }}
                            className="text-white  "
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-12 h-10"
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
                    <Mobilenavbar
                        isMenuOpen={isMenuOpen}
                        setIsMenuOpen={setIsMenuOpen}
                    />
                </div>

                <Mobilenavbar
                    isMenuOpen={isMenuOpen}
                    setIsMenuOpen={setIsMenuOpen}
                />
            </section>
        </>
    );
};

export default Navbar;
