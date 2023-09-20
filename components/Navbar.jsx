"use client";
import Link from "next/link";
import React, { useState } from "react";
import NavLink from "./NavLink";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import MenuOverlay from "./MenuOverlay";
import ThemeButton from "./ThemeButton";

const navLinks = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "About",
    path: "#about",
  },
  {
    title: "Projects",
    path: "#projects",
  },
  {
    title: "Contact",
    path: "#contact",
  },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav className="fixed px-4 border-b bg-white dark:border-zinc-700 top-0 left-0 right-0 z-100  dark:bg-zinc-800">
      <div className="flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-4 py-2">
        <Link
          href={"/"}
          className="text-2xl md:text-5xl dark:text-white font-semibold"
        >
          Jun <span className="text-teal-500">Park</span>
        </Link>

        {/* Mobile Menu */}
        <div className="md:hidden flex gap-6">
          <ThemeButton />
          {!navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(true)}
              className="flex items-center p-2 dark:text-slate-200 dark:hover:text-opacity-70 hover:text-opacity-70 "
            >
              <AiOutlineMenu className="h-4 w-4" />
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(false)}
              className="flex items-center p-2 dark:text-slate-200 dark:hover:text-opacity-70 hover:text-opacity-70 "
            >
              <AiOutlineClose className="h-4 w-4" />
            </button>
          )}
        </div>

        <div className=" hidden md:block md:w-auto">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0 ">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink href={link.path} title={link.title} />
              </li>
            ))}
            <ThemeButton />
          </ul>
        </div>
      </div>
      {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
    </nav>
  );
};

export default Navbar;
