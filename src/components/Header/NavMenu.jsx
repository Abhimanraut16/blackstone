'use client'
import React, { useState, useEffect, useRef } from "react";
import { MdMenu } from "react-icons/md";
import { AiFillCloseCircle } from "react-icons/ai";
import Image from "next/image";
import logo from "../../access/logo-dark.png";
import Link from "next/link";
import BuyProduct from "../BuyProduct/BuyProduct";

const NavBar = [
  { id: 1, title: "Home", link: "/" },
  { id: 2, title: "About", link: "/about" },
  { id: 3, title: "Blog", link: "#" },
  { id: 4, title: "Contact", link: "/contact-us" },
];

function NavMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  // Toggle menu
  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  // Close menu
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        closeMenu();
      }
    };
    if (isMenuOpen) {
      window.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      window.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  const [showModel, setShowModel] = useState(false)

  return (
    <>
      <div className="bg-brandDark text-white py-3 font-varela">
        <nav className="container flex justify-between items-center">
          {/* Logo */}
          <div>
            <Link href="/">
              <Image src={logo} width={200} height={200} alt="Company Logo" className="mt-2" />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <ul className="flex items-center gap-4">
              {NavBar.map((item) => (
                <li key={item.id}>
                  <Link href={item.link} className="inline-block text-sm py-2 px-3 hover:text-lemon uppercase">
                    {item.title}
                  </Link>
                </li>
              ))}

              <div>
                <div onClick={() =>
                  setShowModel(true)
                } className="ml-20  border-2 border-lemon text-white px-6 py-2 rounded-md hover:bg-lemon hover:text-black font-medium shadow-md transform transition hover:scale-105  focus:ring-4 focus:ring-blue-300 focus:outline-non ">
                  Order Now
                </div>
              </div>

            </ul>
          </div>

          {/* Hamburger Menu for Mobile */}
          <button onClick={toggleMenu} className="md:hidden" aria-label="Toggle Menu">
            <MdMenu className="absolute top-4 right-4 text-white text-4xl " />
          </button>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div
              ref={menuRef}
              className="fixed inset-0  bg-brandDark h-72 bg-opacity-95 z-50 flex flex-col items-center justify-center border-b-2"
            >
              {/* Close Button */}
              <button
                onClick={closeMenu}
                className="absolute top-4 right-4 text-white text-4xl "
                aria-label="Close Menu"
              >
                <AiFillCloseCircle />
              </button>

              {/* Navigation Links */}
              <ul className="flex flex-col items-center gap-6 text-center">
                {NavBar.map((item) => (
                  <li key={item.id}>
                    <Link
                      href={item.link}
                      className="text-lg text-white hover:text-lemon uppercase"
                      onClick={closeMenu} // Close menu on link click
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
                <Link href="/Order">
                  <div
                    onClick={closeMenu} // Close menu on "Order Now" click
                    className="mt-4 border-2 border-lemon text-white px-6 py-2 rounded-md hover:bg-lemon hover:text-black"
                  >
                    Order Now
                  </div>
                </Link>
              </ul>
            </div>
          )}
        </nav>
      </div>
      <BuyProduct isVisible={showModel} onClose={() => setShowModel(false)} />
    </>
  );
}

export default NavMenu;
