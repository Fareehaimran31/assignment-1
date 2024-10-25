import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div>
      <nav className="bg-purple-400  text-purple-900  h-12 py-2 px-3  flex justify-between items-center">
        <div className="flex items-center space-x-2 mb-4 sm:mb-0">
            <img
            src="/logo.jpg"
            alt="logo"
            className="h-10 w-10 rounded-full"/>
          <h1 className="font-extrabold text-3xl   text-purple-900">
            
            <a href="#!">Fareeha Imran</a>
          </h1>
        </div>
        <div>
          <ul className="flex space-x-10">
            <li>
              <Link href="/" className="hover:text-orange-500">
                Home
              </Link>
            </li>
            <li>
              <Link href="/About" className="hover:text-orange-500">
                About
              </Link>
            </li>
            <li>
              <Link href="/Services" className="hover:text-orange-500">
                Services
              </Link>
            </li>
            <li>
              <Link href="/Skills" className="hover:text-orange-500">
                Skills
              </Link>
            </li>
            <li>
              <Link href="/Contact me" className="hover:text-orange-500">
                Contact me
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
