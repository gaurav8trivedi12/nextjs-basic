import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
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

export default Navbar;