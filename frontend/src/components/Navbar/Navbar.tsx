// src/components/Navbar.tsx
import React, { useState } from "react";
import { IoHomeOutline, IoBookOutline } from "react-icons/io5";
import { MdOutlinePersonPin } from "react-icons/md";
import { BsSuitcaseLg } from "react-icons/bs";
import { FaRegFile, FaLaptopCode, FaMoon } from "react-icons/fa";
import { FiTool, FiPhone } from "react-icons/fi";
import { GrArticle } from "react-icons/gr";
import { IoMdSunny } from "react-icons/io";
import { AiOutlineClose } from "react-icons/ai";
import NavbarItem from "../NavbarItem/NavbarItem";
import { Item } from "../../types/Item";
import { MobileNavbarItem } from "../MobileNavbarItem/MobileNavbarItem";

const menuItems: Item[] = [
  { href: "#home", icon: <IoHomeOutline size={20} />, label: "Home" },
  { href: "#about", icon: <MdOutlinePersonPin size={20} />, label: "About" },
  { href: "#experience", icon: <BsSuitcaseLg size={20} />, label: "Experience" },
  { href: "#projects", icon: <FaRegFile size={20} />, label: "Projects" },
  { href: "#skills", icon: <FiTool size={20} />, label: "Skills" },
  { href: "#articles", icon: <GrArticle size={20} />, label: "Articles" },
  { href: "#challenges", icon: <FaLaptopCode size={20} />, label: "LeetCode" },
  { href: "#books", icon: <IoBookOutline size={20} />, label: "Books" },
];

const Navbar: React.FC = () => {
  const [navbarOpen, setNavbarOpen] = useState<boolean>(false);
  const [light, setLight] = useState<boolean>(true);

  return (
    <nav className="w-full">
      <div className="hidden md:flex fixed top-4 left-1/2 transform -translate-x-1/2 bg-white bg-opacity-80 backdrop-blur-md rounded-full px-6 py-3 shadow-lg max-w-max items-center justify-center space-x-16 transition-all duration-300 hover:shadow-xl hover:bg-opacity-90 z-50">
        {menuItems.map((item, index) => (
          <NavbarItem key={index} item={item} />
        ))}
      </div>

      <div className="absolute left-4 top-4 md:hidden ml-4 mt-2">
        <button
          onClick={() => setNavbarOpen(!navbarOpen)}
          className="text-gray-800 focus:outline-none"
          aria-label="Toggle mobile menu"
        >
          {navbarOpen ? (
            <AiOutlineClose className="h-6 w-6" />
          ) : (
            <svg
              className="h-7 w-7"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      <div className="fixed right-4 top-5">
        <button
          onClick={() => setLight(!light)}
          className={`flex items-center justify-center mr-4 w-10 h-10 rounded-full transition duration-300 ${
            light ? "bg-yellow-400 hover:bg-yellow-500" : "bg-gray-700 hover:bg-gray-600"
          }`}
        >
          {light ? (
            <IoMdSunny className="text-white" size={20} />
          ) : (
            <FaMoon className="text-white" size={18} />
          )}
        </button>
      </div>

      {navbarOpen && (
        <div className="md:hidden fixed inset-0 bg-white z-40 flex flex-col items-center pt-20">
          {menuItems.map((item, index) => (
            <MobileNavbarItem key={index} item={item} setNavbarOpen={setNavbarOpen} />
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
