"use client";

import React, { useState } from "react";
import Image from "next/image";
import { assets } from "@/assets/assets";


export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

 

  // To prevent hydration errors, only render toggle button after mounting on client
  



  const handleMenuClick = (id) => {
    const section = document.querySelector(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setMenuOpen(false);
  };

  const navItems = [
    { id: "top", label: "Home" },
    { id: "about", label: "About" },
   
    { id: "work", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <nav className="navbar w-full fixed top-0 z-50">
      <div className="relative w-full h-20">
        <Image
          src={assets.header_bg_color}
          alt="Navbar Background"
          fill
          className="object-cover"
          priority
        />

        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-between px-4 md:px-8 lg:px-12 xl:px-[8%]">
          {/* Logo */}
          <a href="#top" className="shrink-0">
            <Image
              src={assets.logo}
              alt="Logo"
              width={50}
              height={40}
              className="object-contain cursor-pointer"
            />
          </a>

          {/* Desktop Nav */}
          <ul className="hidden md:flex gap-6 lg:gap-10 text-[15px] lg:text-[16px] font-medium rounded-2xl">
            {navItems.map((item) => (
              <li
                key={item.id}
                className="cursor-pointer"
                onClick={() => handleMenuClick(`#${item.id}`)}
              >
                <span className="hover:scale-110 transition-transform">{item.label}</span>
              </li>
            ))}
          </ul>

          {/* Icons & Buttons */}
          <div className="flex items-center gap-3 sm:gap-4">
           

            <a
              href="#contact"
              className="hidden sm:flex items-center gap-2 text-[14px] lg:text-[15px] hover:scale-105 transition"
            >
              <Image
                src={assets.arrow_icon}
                alt="Arrow Icon"
                width={16}
                height={16}
              />
              Contact
            </a>
            <button
              onClick={() => setMenuOpen(true)}
              className="block md:hidden"
            >
              <Image
                className="w-6"
                src={assets.menu_black}
                alt="Menu Icon"
              />
            </button>
          </div>

          {/* Mobile Menu */}
          <ul
            className={`fixed top-0 right-0 w-64 h-full bg-white dark:bg-black text-black dark:text-white shadow-lg transition-transform duration-300 ease-in-out md:hidden flex flex-col px-6 py-4 z-[999] ${
              menuOpen ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <li className="flex justify-end mb-6 list-none">
              <button onClick={() => setMenuOpen(false)}>
                <Image
                  src={assets.close_black}
                  alt="Close Icon"
                  width={28}
                  height={28}
                  className="cursor-pointer"
                />
              </button>
            </li>

            {navItems.map((item) => (
              <li
                key={item.id}
                className="py-3 px-2 text-[17px] font-medium hover:text-blue-500 transition-all cursor-pointer"
                onClick={() => handleMenuClick(`#${item.id}`)}
              >
                {item.label}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};
