'use client'
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import LogoImage from "../images/mrdevaitc-logo.png";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="bg-transparent absolute top-0 left-0 z-10 w-full">
      <div className="container mx-auto px-4 md:px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div>
          <Image
            src={LogoImage}
            alt="Mr Deva Logo"
            width={150}
            height={150}
            className="w-full h-auto"
          />
        </div>

        {/* Hamburger Menu for Mobile */}
        <button
          className="text-white md:hidden focus:outline-none relative z-30"
          onClick={toggleMenu}
        >
          {menuOpen ? (
            // Cross Icon
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              width="24"
              height="24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            // Hamburger Icon
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              width="24"
              height="24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          )}
        </button>

        {/* Navigation Links (Hidden on Mobile, Visible on Desktop) */}
        <nav className="hidden md:flex">
          <ul className="flex space-x-8">
            <li><Link href="#" className="text-white hover:text-gray-600">Home</Link></li>
            <li><Link href="#" className="text-white hover:text-gray-600">About</Link></li>
            <li><Link href="#" className="text-white hover:text-gray-600">Contact</Link></li>
            <li><Link href="#" className="bg-[#0000FF] px-4 py-2 text-white hover:text-gray-600">Shop Now!</Link></li>
          </ul>
        </nav>
      </div>

      {/* Fullscreen Mobile Menu (Slide in from Right) */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-[#050A30] text-white transform ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out z-20 md:hidden`}
      >
        <ul className="flex flex-col items-center justify-center h-full space-y-8">
          <li><Link href="#" className="text-white" onClick={toggleMenu}>Home</Link></li>
          <li><Link href="#" className="text-white" onClick={toggleMenu}>About</Link></li>
          <li><Link href="#" className="text-white" onClick={toggleMenu}>Contact</Link></li>
          <li><Link href="#" className="text-white bg-[#0000FF] px-6 py-2 rounded-full" onClick={toggleMenu}>Shop Now!</Link></li>
        </ul>
      </div>

      {/* Backdrop when Menu is Open */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-10 md:hidden"
          onClick={toggleMenu}
        ></div>
      )}
    </header>
  );
}
