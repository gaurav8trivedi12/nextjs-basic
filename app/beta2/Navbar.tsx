import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const OldNavbar = () => {
  return (
    <nav className="bg-white xxx-shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-6 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <Link href="/" aria-label="Home">
              <Image
                className="h-8 w-auto sm:h-10 cursor-pointer"
                src="/reviud.png"
                alt="logo"
                width={100}
                height={24}
                priority
              />
            </Link>
          </div>
          <div className="md:flex items-center justify-end md:flex-1 lg:w-0">
            <Link href="#how-it-works" className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900 px-4 py-2 cursor-pointer">
              How it works?
            </Link>
            <Link href="#pricing" className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900 px-4 py-2 cursor-pointer">
              Pricing
            </Link>
            <Link href="#about-us" className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900 px-4 py-2 cursor-pointer">
              About Us
            </Link>
            <Link href="#contact-us" className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900 px-4 py-2 cursor-pointer">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

const Navbar = () => {
  return (
    <nav className="navbar bg-base-100 shadow-xl">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7" />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
            <li><a>Pricing</a></li>
            <li><a>Portfolio</a></li>
            <li><a>About</a></li>
          </ul>
        </div>
      </div>
      <div className="navbar-center">
        <p className="text-2xl font-bold">rivYou</p>
      </div>
      <div className="navbar-end pr-8">
        <button className="btn btn-link text-neutral">
          About Us
        </button>
      </div>
    </nav>
  );
}

export default Navbar;