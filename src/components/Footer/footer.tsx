import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-gray-700 py-4 text-center">
      <nav className="space-x-4 text-sm flex-wrap sm:space-x-4 sm:flex sm:justify-center sm:space-y-0 space-y-2">
        <a
          href="/privacy-policy"
          className="text-gray-400 hover:text-white hover:underline"
        >
          Privacy Policy
        </a>
        <span className="text-gray-600">|</span>
        <a
          href="/refund-policy"
          className="text-gray-400 hover:text-white hover:underline"
        >
          Refund Policy
        </a>
        <span className="text-gray-600">|</span>
        <a
          href="/terms-and-conditions"
          className="text-gray-400 hover:text-white hover:underline"
        >
          Terms and Conditions
        </a>
      </nav>
      <p className="text-gray-500 mt-4 text-xs sm:text-sm">
        © 2025 Nitrutsav. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
