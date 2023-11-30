"use client";
import Image from "next/image";
import hamburger from "../assets/landing/landing/hamburger.svg";
import cross from "../assets/landing/landing/cross.png";

import logo from "../assets/landing/landing/logo.png";
import { useState } from "react";
const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div className="p-3 w-full shadow px-4 md:py-3 md:px-10 md:m-auto flex items-center justify-between">
      <div className="flex items-center md:gap-2 font-bold">
        <Image alt="" height={40} width={40} src={logo} />
        <span className="hidden md:block text-lg md:text-3xl -ml-2">erocodee.</span>
      </div>

      {/* Hamburger icon for small screens */}
      <div className="md:hidden">
        <button onClick={toggleMenu}>
          {isMenuOpen? <Image src={cross} alt="Menu" width={10} />:<Image src={hamburger} alt="Menu" />}
        </button>
      </div>
      
      <div className="md:flex gap-3 md:text-xl list-none hidden ">
            <a href=""> <li className=" hover:underline transition-transform transition-300">Home</li></a>
            <a href=""><li>Team</li></a>
            <a href=""><li>Contact</li></a>
            <a href=""><li>Careers</li></a>
        </div>

      {/* Navigation options */}
      <div
        className={`md:flex gap-3 absolute top-14 bg-white text-lg shadow rounded font-semibold text-gray-600 px-4 py-2 right-10 list-none ${
          isMenuOpen ? "block" : "hidden"
        } md:hidden`}
      >
        <li>
          <a href="">Home</a>
        </li>
        <li>
          <a href="">Team</a>
        </li>
        <li>
          <a href="">Contact</a>
        </li>
        <li>
          <a href="">Careers</a>
        </li>
        <li>
          <button className="md:hidden text-primary underline p-1">
            Sign In
          </button>
        </li>
      </div>

      {/* Sign In button for larger screens */}
      <button className="md:block hidden border border-primary rounded text-primary py-1 px-3">
        Sign In
      </button>
    </div>
  );
};

export default Navbar;
