"use client";

import { useState } from "react";
import { FaSearch, FaBell } from "react-icons/fa";

export default function TopBar() {
  const [searchQuery, setSearchQuery] = useState("");
  const [showSearchMobile, setShowSearchMobile] = useState(false);

  return (
    <div className="w-full flex justify-between items-center px-4 py-2 bg-gray-200 shadow-sm">
      {/* Left spacer for layout balance */}
      <div className="w-10 md:w-16"></div>

      {/* Desktop Search + Notification */}
      <div className="hidden md:flex items-center gap-3 px-3 py-2 bg-white rounded-full shadow-inner border border-gray-300">
        {/* Search Input */}
        <div className="relative w-40 md:w-60">
          <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search"
            className="w-full pl-10 pr-3 py-1.5 text-sm text-black bg-transparent rounded-full focus:outline-none"
          />
        </div>

        {/* Notification Icon */}
        <button className="p-2 bg-white rounded-full hover:bg-gray-100 transition">
          <FaBell className="text-lg text-gray-700" />
        </button>
      </div>

      {/* Mobile Search */}
      <div className="md:hidden flex items-center gap-3">
        {showSearchMobile ? (
          <div className="relative w-48">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search..."
              className="w-full p-2 pl-10 text-sm text-black bg-gray-100 rounded-2xl border border-gray-300 focus:outline-none"
            />
            <FaSearch
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 cursor-pointer"
              onClick={() => setShowSearchMobile(false)}
            />
          </div>
        ) : (
          <>
            <FaSearch
              className="text-xl text-gray-700 cursor-pointer"
              onClick={() => setShowSearchMobile(true)}
            />
            <FaBell className="text-xl text-gray-700" />
          </>
        )}
      </div>
    </div>
  );
}
