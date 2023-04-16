import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-4 px-6">
      <div className="flex justify-between items-center">
        {/* Site Map */}
        <ul className="flex flex-wrap list-none">
          <li className="mr-4 mb-2">
            <a href="/theme" className="hover:text-gray-400">
              Theme
            </a>
          </li>
          <li className="mr-4 mb-2">
            <a href="/privacy-policy" className="hover:text-gray-400">
              Privacy Policy
            </a>
          </li>
          <li className="mr-4 mb-2">
            <a href="/content-copyright" className="hover:text-gray-400">
              Content Copyright
            </a>
          </li>
          <li className="mr-4 mb-2">
            <a href="/content-hyperlinking" className="hover:text-gray-400">
              Content Hyperlinking
            </a>
          </li>
          <li className="mr-4 mb-2">
            <a href="/terms-conditions" className="hover:text-gray-400">
              Terms &amp; Conditions
            </a>
          </li>
          <li className="mr-4 mb-2">
            <a href="/abbreviations" className="hover:text-gray-400">
              Abbreviations
            </a>
          </li>
        </ul>

        {/* Social icons */}
        <div className="flex">
          <a
            href="https://www.facebook.com/"
            className="text-xl mx-3 hover:text-gray-400"
          >
            <FaFacebook />
          </a>
          <a
            href="https://twitter.com/"
            className="text-xl mx-3 hover:text-gray-400"
          >
            <FaTwitter />
          </a>
          <a
            href="https://www.instagram.com/"
            className="text-xl mx-3 hover:text-gray-400"
          >
            <FaInstagram />
          </a>
        </div>
      </div>

      {/* Disclaimer */}
      <p className="text-sm mt-4">
        Disclaimer: This is a fictional website created for educational purposes
        only.
      </p>
    </footer>
  );
}

export default Footer;
