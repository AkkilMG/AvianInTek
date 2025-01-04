"use client"

import React, { useState } from 'react';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <header className="py-6 px-8 transprant absolute top-0 left-0 right-0 z-50 text-white">
            <nav className="flex items-center justify-between">
                <div className="flex items-center ml-12">
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center md:justify-start lg:justify-center mx-auto md:mx-0">
                        <img draggable={false} src="assets/logo/logo.png" alt="logo" className="w-12 h-12" />
                    </div>
                    <a href="#" className="logo-gradient text-3xl font-bold ml-1">AvianInTek</a>
                    <ul className="hidden md:flex space-x-12 ml-24 text-semibold">
                        <li><a href="#" className="hover:text-purple-300 transition duration-300">Home</a></li>
                        <li><a href="#" className="hover:text-purple-300 transition duration-300 md:text-gray-500 xl:text-white">Insights</a></li>
                        <li><a href="#" className="hover:text-purple-300 transition duration-300 md:text-gray-500 xl:text-white">Products</a></li>
                        <li><a href="#" className="hover:text-purple-300 transition duration-300 md:text-gray-500 xl:text-white">FAQ</a></li>
                    </ul>
                </div>
                <button onClick={() => setMenuOpen(!menuOpen)} className="sm:hidden flex items-center text-xl p-2 focus:outline-none">
                ☰
                </button>
                <ul className={`${menuOpen ? "flex" : "hidden"} flex-col sm:flex-row sm:space-x-12 sm:ml-24 items-center mt-4 sm:mt-0 bg-gray-800 sm:bg-transparent sm:static absolute right-4 left-4 sm:right-auto sm:left-auto sm:top-auto top-16 py-4 sm:py-0 rounded-lg sm:rounded-none`}>
                    <li>
                        <a href="#home" className="block sm:inline hover:text-purple-300 transition duration-300 px-4 sm:px-0 py-2 sm:py-0">Home</a>
                    </li>
                    <li> <a href="#insights" className="block sm:inline hover:text-purple-300 transition duration-300 px-4 sm:px-0 py-2 sm:py-0">Insights</a>
                    </li>
                    <li> 
                        <a href="#features" className="block sm:inline hover:text-purple-300 transition duration-300 px-4 sm:px-0 py-2 sm:py-0">Features</a>
                    </li>
                    <li> 
                        <a href="#products" className="block sm:inline hover:text-purple-300 transition duration-300 px-4 sm:px-0 py-2 sm:py-0">Products</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;