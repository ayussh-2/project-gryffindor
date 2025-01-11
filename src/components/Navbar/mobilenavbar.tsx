import Link from "next/link";
import React from "react";

const Mobilenavbar = ({
  isMenuOpen,
  setIsMenuOpen,
}: {
  isMenuOpen: boolean;
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const closeNavbar = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <div
        className={`fixed top-0 left-0 z-40 w-3/5 md:hidden h-screen  bg-black text-white transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col items-center justify-between h-full p-4">
          {/* Menu Links */}
          <ul className="flex flex-col items-center font-Cattedrale tracking-wider gap-4 font-bold mt-10">
            {["About us", "Events", "Sponsors", "FAQs", "Contact Us"].map(
              (section, index) => (
                <li key={index}>
                  <Link
                    href={`#${section.toLowerCase().replace(" ", "-")}`}
                    className="block px-4 py-2 mt-2 text-sm text-white transition duration-300 hover:text-[#FF0000] font-bunk cursor-pointer"
                  >
                    {section}
                  </Link>
                </li>
              )
            )}
          </ul>
        </div>
      </div>
      {isMenuOpen && (
        <div
          className="fixed inset-0 z-30 bg-black bg-opacity-50"
          onClick={closeNavbar}
        />
      )}
    </>
  );
};

export default Mobilenavbar;
