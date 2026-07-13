"use client";

import { useState } from "react";
import Link from "next/link";
import { RiShoppingBagLine } from "react-icons/ri";
import { IoMenu } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import { authClient } from "@/lib/auth-client";
import { BiLogOut } from "react-icons/bi";
import { MdDashboardCustomize } from "react-icons/md"; // React Icons দিয়ে প্রতিস্থাপন
import { Avatar } from "@heroui/react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const { data: session } = authClient.useSession();
  const user = session?.user;

  const role = (session?.user as { role?: string } | undefined)?.role;

  const handleLogOut = async (): Promise<void> => {
    await authClient.signOut();
    setIsOpen(false);
  };

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

  const activeRoutes = user ? loggedInRoutes : loggedOutRoutes;

  const userFallbackLetter = user?.name?.trim()
    ? user.name.trim().charAt(0).toUpperCase()
    : "U";

  return (
    <header className="sticky top-0 z-50 w-full bg-white text-gray-700 shadow-[0px_4px_25px_0px_#0000000D] transition-all">
      <nav className="mx-auto flex h-[70px] max-w-7xl items-center justify-between px-6 md:px-16 lg:px-24">
        
     
        <Link
          href="/"
          className="flex items-center gap-2 text-xl font-bold text-primary"
        >
          <RiShoppingBagLine className="h-6 w-6 text-secondary" />
          <span>
            360<span className="text-secondary">Products</span>
          </span>
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
          {user ? (
            <div className="relative group flex gap-2">
              <button 
                type="button"
                className="flex items-center gap-3 p-1 rounded-full hover:bg-neutral-bg transition-colors border border-gray-100 cursor-pointer focus:outline-none"
              >
                <Avatar>
                  <Avatar.Image alt={user?.name || "User"} src={user?.image as string} />
                  <Avatar.Fallback>{userFallbackLetter}</Avatar.Fallback>
                </Avatar>
              </button>

        
              <div className="absolute right-0 top-12 w-48 bg-white border border-gray-100 text-gray-700 shadow-xl hidden group-hover:flex flex-col py-2 z-50 rounded-global">
                <Link
                  href={`/dashboard/${role || "user"}`}
                  className="px-4 py-2.5 text-sm flex items-center gap-3 transition-colors font-medium text-gray-600 hover:text-primary hover:bg-neutral-bg"
                >
                  <MdDashboardCustomize className="w-4 h-4 text-secondary" /> Dashboard
                </Link>
                <div className="border-t border-gray-100 my-1"></div>
                <button
                  onClick={handleLogOut}
                  className="px-4 py-2.5 text-sm text-red-500 font-semibold flex items-center gap-3 transition-colors text-left hover:bg-red-50 w-full cursor-pointer focus:outline-none"
                >
                  <BiLogOut className="w-4 h-4" /> Log Out
                </button>
              </div>
            </div>
          ) : (
            <Link href="/login">
              <button
                type="button"
                className="h-10 w-28 rounded-global bg-primary text-sm font-medium text-white transition-all cursor-pointer hover:opacity-90 active:scale-95"
              >
                Log In
              </button>
            </Link>
          )}
        </div>

        
        <div className="flex items-center gap-4 md:hidden">
          {user && (
            <Avatar size="sm" className="border border-gray-200">
              <Avatar.Image alt={user?.name || "User"} src={user?.image as string} />
              <Avatar.Fallback>{userFallbackLetter}</Avatar.Fallback>
            </Avatar>
          )}
          <button
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            aria-label="Toggle Menu"
            className="text-gray-700 transition active:scale-90 focus:outline-none cursor-pointer"
          >
            {isOpen ? <RxCross2 size={26} /> : <IoMenu size={26} />}
          </button>
        </div>

        
        <div
          className={`absolute left-0 top-[70px] w-full border-b border-gray-100 bg-white p-6 shadow-lg transition-all duration-300 ease-in-out md:hidden z-50 ${
            isOpen ? "opacity-100 block" : "opacity-0 hidden"
          }`}
        >
          
          {user && (
            <div className="mb-4 flex items-center gap-3 border-b border-gray-100 pb-4">
              <Avatar size="md">
                <Avatar.Image alt={user?.name || "User"} src={user?.image as string} />
                <Avatar.Fallback>{userFallbackLetter}</Avatar.Fallback>
              </Avatar>
              <div>
                <p className="text-sm font-bold text-gray-800">{user?.name}</p>
                <p className="text-xs text-gray-400 capitalize">Role: {role || "User"}</p>
              </div>
            </div>
          )}

          <ul className="flex flex-col space-y-3">
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
            
        
            {user && (
              <li>
                <Link
                  href={`/dashboard/${role || "user"}`}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-2 text-base font-medium text-secondary transition hover:text-primary"
                >
                  <MdDashboardCustomize className="w-5 h-5" /> <span>Dashboard</span>
                </Link>
              </li>
            )}
          </ul>

          <div className="mt-6 border-t border-gray-100 pt-4">
            {user ? (
              <button
                onClick={handleLogOut}
                type="button"
                className="w-full h-11 rounded-global border border-red-200 bg-red-50 text-sm font-semibold text-red-500 flex items-center justify-center gap-2 transition-all hover:bg-red-100"
              >
                <BiLogOut className="text-base" />
                <span>Log Out</span>
              </button>
            ) : (
              <Link href="/login" onClick={() => setIsOpen(false)}>
                <button
                  type="button"
                  className="w-full h-11 rounded-global bg-primary text-sm font-medium text-white cursor-pointer transition-all hover:opacity-90 active:scale-95"
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