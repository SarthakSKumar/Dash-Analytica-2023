import React, { useState } from "react";
import SearchModal from "./header/SearchModal";
import Notifications from "./header/Notifications";
import Help from "./header/Help";
import UserMenu from "./header/UserMenu";

function Header({ sidebarOpen, setSidebarOpen }) {
  const [searchModalOpen, setSearchModalOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("English");

  return (
    <header className="sticky top-0 bg-white border-b border-slate-200 z-30">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 -mb-px">
          {/* Header: Left side */}
          <div className="flex">
            {/* Hamburger button */}
            <button
              className="text-slate-500 hover:text-slate-600 lg:hidden"
              aria-controls="sidebar"
              aria-expanded={sidebarOpen}
              onClick={(e) => {
                e.stopPropagation();
                setSidebarOpen(!sidebarOpen);
              }}
            >
              <span className="sr-only">Open sidebar</span>
              <svg
                className="w-6 h-6 fill-current"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect x="4" y="5" width="16" height="2" />
                <rect x="4" y="11" width="16" height="2" />
                <rect x="4" y="17" width="16" height="2" />
              </svg>
            </button>

            {/* Language selection dropdown */}
            <div className="relative inline-block">
              <select
                className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                value={selectedLanguage}
                onChange={(e) => setSelectedLanguage(e.target.value)}
              >
                <option value="English">English</option>
                <option value="Hindi">Hindi</option>
                <option value="Kannada">Kannada</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                  <path
                    fillRule="evenodd"
                    d="M5 5a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zM5 9a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zM4 13a1 1 0 100 2h8a1 1 0 100-2H4z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Header: Right side */}
          <div className="flex items-center">
            <button
              className={`w-8 h-8 flex items-center justify-center bg-slate-100 hover:bg-slate-200 transition duration-150 rounded-full ml-3 ${
                searchModalOpen && "bg-slate-200"
              }`}
              onClick={(e) => {
                e.stopPropagation();
                setSearchModalOpen(true);
              }}
              aria-controls="search-modal"
            >
              <span className="sr-only">Search</span>
              <svg
                className="w-4 h-4"
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  className="fill-current text-slate-500"
                  d="M7 14c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7zM7 2C4.243 2 2 4.243 2 7s2.243 5 5 5 5-2.243 5-5-2.243-5-5-5z"
                />
                <path
                  className="fill-current text-slate-400"
                  d="M15.707 14.293L13.314 11.9a8.019 8.019 0 01-1.414 1.414l2.393 2.393a.997.997 0 001.414 0 .999.999 0 000-1.414z"
                />
              </svg>
            </button>
            <SearchModal
              id="search-modal"
              searchId="search"
              modalOpen={searchModalOpen}
              setModalOpen={setSearchModalOpen}
            />
            <Notifications />
            <Help />
            {/*  Divider */}
            <hr className="w-px h-6 bg-slate-200 mx-3" />
            <UserMenu />

            {/* Icons */}
            <div className="flex items-center ml-3">
              {/* Narrator icon */}
              <button
                className="w-8 h-8 flex items-center justify-center bg-slate-100 hover:bg-slate-200 transition duration-150 rounded-full"
                aria-label="Narrator"
              >
                <svg
                  className="w-4 h-4 fill-current text-slate-500"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M10.75 2.124A1 1 0 0112 2v20a1 1 0 01-1.625.781l-6-5A1 1 0 014 16V8a1 1 0 011.375-.937l6-2.939zM5.447 15L11 18.618V5.382L5.447 9.001v5zm13.107-5.981l-2.792-2.792a1 1 0 00-1.414 0L14 9.586l-1.448-1.448a1 1 0 00-1.414 0l-2.792 2.792a1 1 0 000 1.414L10 12.414l-1.448 1.448a1 1 0 000 1.414"></path>
                </svg>
              </button>
              {/* On-screen keyboard icon */}
              <button
                className="w-8 h-8 flex items-center justify-center bg-slate-100 hover:bg-slate-200 transition duration-150 rounded-full ml-3"
                aria-label="On-screen keyboard"
              >
                <svg
                  className="w-4 h-4 fill-current text-slate-500"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M8 3a1 1 0 00-1 1v4H4a1 1 0 100 2h3v4a1 1 0 102 0V10h3a1 1 0 100-2H10V4a1 1 0 00-1-1zM16.707 7.707l-1.414-1.414L19.586 2H14a1 1 0 00-1 1v3.586l3.121-3.122 1.414 1.414L14.707 8l2.707-2.293z" />
                  <path d="M16.707 18.293l-1.414 1.414L14.707 16l-2.707 2.293 1.414 1.414L14 18.414V22a1 1 0 001 1h5.586l-3.121-3.122z" />
                </svg>
              </button>
              {/* Font size increase icon */}
              <button
                className="w-8 h-8 flex items-center justify-center bg-slate-100 hover:bg-slate-200 transition duration-150 rounded-full ml-3"
                aria-label="Increase font size"
              >
                <svg
                  className="w-4 h-4 fill-current text-slate-500"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M17.293 6.293a1 1 0 00-1.414 0L12 10.586 7.121 5.707a1 1 0 00-1.414 1.414L10.586 12l-5.879 4.879a1 1 0 000 1.414 1 1 0 001.414 0L12 13.414l4.879 4.879a1 1 0 001.414 0 1 1 0 000-1.414L13.414 12l4.879-4.879a1 1 0 000-1.414z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
