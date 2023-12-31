import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons//ai";

const Navbar = () => {
  const [nav, setNav] = useState(true);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="bg-[#262424] sticky top-0">
      <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white">
        <h1 className="w-full text-3xl font-bold text-[#00df9a] hover:cursor-pointer">
          DATAEYE.
        </h1>

        <ul className="hidden md:flex text-lg hover:cursor-pointer">
          <li className="p-6 hover:bg-[#363333]">Home</li>
          <li className="p-6 hover:bg-[#363333]">Company</li>
          <li className="p-6 hover:bg-[#363333]">Resources</li>
          <li className="p-6 hover:bg-[#363333]">About</li>
          <li className="p-6 hover:bg-[#363333]">Contact</li>
        </ul>

        {/* Mobile Menu */}
        <div onClick={handleNav} className="block md:hidden">
          {!nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>
        <div
          className={
            !nav
              ? "fixed left-0 top-0  w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500 block md:hidden"
              : "fixed left-[-100%]"
          }
        >
          <h1 className="w-full text-3xl font-bold text-[#00df9a] m-4">
            DATAEYE.
          </h1>

          <ul className="p-4 uppercase">
            <li className="p-4 hover:bg-[#363333] border-b border-gray-600">
              Home
            </li>
            <li className="p-4 hover:bg-[#363333] border-b border-gray-600">
              Company
            </li>
            <li className="p-4 hover:bg-[#363333] border-b border-gray-600">
              Resources
            </li>
            <li className="p-4 hover:bg-[#363333] border-b border-gray-600">
              About
            </li>
            <li className="p-4 hover:bg-[#363333]">Contact</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
