"use client";

import { useState } from "react";
import Link from "next/link";
import { RiShoppingBagLine } from "react-icons/ri";
import { IoMenu } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";


const Navbar = () => {

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  const loggedOutRoutes = [
    { name: "Home", path: "/" },
    { name: "Explore", path: "/explore" },
    { name: "About Us", path: "/about" },
  ];

  const loggedInRoutes = [
    { name: "Home", path: "/" },
    { name: "Explore", path: "/explore" },
    { name: "Add Item", path: "/items/add" },
    { name: "Manage Items", path: "/items/manage" },
    { name: "About Us", path: "/about" },
  ];

  const activeRoutes = isLoggedIn ? loggedInRoutes : loggedOutRoutes;

  return (
  
    <header className="sticky top-0 z-50 w-full bg-white text-gray-700 shadow-[0px_4px_25px_0px_#0000000D] transition-all">
      <nav className="mx-auto flex h-[70px] container items-center justify-between px-6 md:px-16 lg:px-24">
        
     
        <Link href="/" className="flex items-center gap-2 text-xl font-bold text-primary">
          <RiShoppingBagLine  className="h-6 w-6 text-secondary" />
          <span>360<span className="text-secondary">Products</span></span>
        </Link>

        <ul className="hidden items-center gap-8 md:flex">
          {activeRoutes.map((route, index) => (
            <li key={index}>
              <Link 
                href={route.path} 
                className="font-medium text-gray-600 transition hover:text-secondary"
              >
                {route.name}
              </Link>
            </li>
          ))}
        </ul>

       
        <div className="hidden items-center gap-4 md:flex">
          {isLoggedIn ? (
            <button 
              onClick={() => setIsLoggedIn(false)}
              type="button" 
              className="h-10 w-28 rounded-global border border-gray-300 bg-white text-sm font-medium text-gray-600 transition-all hover:bg-gray-50 active:scale-95"
            >
              Log Out
            </button>
          ) : (
            <Link href="/login">
              <button 
                onClick={() => setIsLoggedIn(true)}
                type="button" 
                className="h-10 w-28 rounded-global bg-primary text-sm font-medium text-white transition-all cursor-pointer hover:opacity-90 active:scale-95"
              >
                Log In
              </button>
            </Link>
          )}
        </div>

        
        <button
          onClick={() => setIsOpen(!isOpen)}
          type="button"
          aria-label="Toggle Menu"
          className="inline-block text-gray-700 transition active:scale-90 md:hidden"
        >
          {isOpen ? <RxCross2 size={28} /> : <IoMenu size={28} />}
        </button>

    
        <div
          className={`absolute left-0 top-[70px] w-full border-b border-gray-100 bg-white p-6 shadow-lg transition-all duration-300 ease-in-out md:hidden ${
            isOpen ? "opacity-100 block" : "opacity-0 hidden"
          }`}
        >
          <ul className="flex flex-col space-y-4">
            {activeRoutes.map((route, index) => (
              <li key={index}>
                <Link
                  href={route.path}
                  onClick={() => setIsOpen(false)}
                  className="block text-base font-medium text-gray-600 transition hover:text-secondary"
                >
                  {route.name}
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-6 border-t border-gray-100 pt-4">
            {isLoggedIn ? (
              <button
                onClick={() => {
                  setIsLoggedIn(false);
                  setIsOpen(false);
                }}
                type="button"
                className="w-full h-11 rounded-global border border-gray-300 bg-white text-sm font-medium text-gray-600 transition-all hover:bg-gray-50"
              >
                Log Out
              </button>
            ) : (
              <Link href="/login" onClick={() => setIsOpen(false)}>
                <button
                  type="button"
                  className="w-full h-11 rounded-global bg-primary text-sm font-medium text-white cursor-pointer transition-all hover:opacity-90"
                >
                  Get Started / Log In
                </button>
              </Link>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;