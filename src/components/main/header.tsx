"use client"

import React, { useState } from 'react';

const Header = () => {
  const [mobileNavVisible, setMobileNavVisible] = useState(false);

  return (
    <header className="py-6 px-8 transprant absolute top-0 left-0 right-0 z-50">
        <nav className="flex items-center justify-between">
            <div className="flex items-center ml-12">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center">
                    {/* <svg width="24" height="24" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18 6H30V18H18V6Z" fill="#ffffff"/>
                        <path d="M6 30H18V42H6V30Z" fill="#ffffff"/>
                        <path d="M30 30H42V42H30V30Z" fill="#ffffff"/>
                    </svg> */}
                    <img src="assets/logo/logo.png" alt="logo" className="w-12 h-12" />
                </div>
                <a href="#" className="logo-gradient text-3xl font-bold ml-1">AvianInTek</a>
                <ul className="flex space-x-12 ml-24">
                    <li><a href="#" className="hover:text-purple-300 transition duration-300">Home</a></li>
                    <li><a href="#" className="hover:text-purple-300 transition duration-300">Features</a></li>
                    <li><a href="#" className="hover:text-purple-300 transition duration-300">Pricing</a></li>
                    <li><a href="#" className="hover:text-purple-300 transition duration-300">FAQ</a></li>
                </ul>
            </div>
        </nav>
    </header>
  );
};

export default Header;