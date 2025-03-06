"use client";

import React, { useEffect, useState } from 'react';

export default function Products() {

  const product = [{
    id: "1",
    name: "PicDB",
    description: "A simple and secure image storage solution for all your needs.",
    image: "assets/images/picdb-home.png",
    link: "https://picdb.vercel.app",
    features: [{
      icon: "assets/icons/features/1.svg",
      description: "Securely store and organize your images with ease, ensuring quick access whenever you need them."
    }, {
      icon: "assets/icons/features/2.svg",
      description: "Keep your files safe with advanced encryption, giving you peace of mind knowing your data is protected."
    }, {
      icon: "assets/icons/features/3.svg",
      description: "Share and view images effortlessly through download and view links, streamlining collaboration without compromising security."
    }]
  }, ];
  const [currentProduct, setCurrentProduct] = useState(0);

  useEffect(() => {
    const random = Math.floor(Math.random() * product.length);
    setCurrentProduct(random);
  }, []);
  return (
    <div className="relative bg-white py-14 overflow-hidden">
      {/* Background Circles */}
      <div className="absolute top-1/4 left-0 transform -translate-y-1/2 -translate-x-1/4 w-40 h-40 bg-gray-100 rounded-full mix-blend-soft-light animate-pulse" />
      <div className="absolute top-1/4 right-0 transform -translate-y-1/2 translate-x-1/4 w-40 h-40 bg-gray-100 rounded-full mix-blend-soft-light animate-pulse" />

      <div className="container mx-auto max-w-7xl px-4">

        {/* Title */}
        <h1 className="mb-10 text-center text-4xl font-bold text-gray-800">
          Solve your problem with our products
        </h1>

        {/* Feature Blocks */}
        <div className="mb-10 grid grid-cols-1 gap-8 lg:gap-44 md:grid-cols-3 mx-10 lg:mx-20">
          {product[currentProduct].features.map((feature, index) => (
            <Features key={index} {...feature} />
          ))}
        </div>

        <div className="relative">
            <div className="absolute top-1/2 right-8 w-16 h-16 rounded-2xl bg-white shadow-2xl flex items-center justify-center text-gray-800 text-xl font-bold z-20 transform rotate-12">
            ✅
            </div>

            {/* "20" Circle */}
            <div className="absolute bottom-24 left-8 w-16 h-16 rounded-2xl bg-white shadow-2xl flex items-center justify-center text-gray-800 text-xl font-bold z-20 transform -rotate-12">
            {product[currentProduct].id}
            </div>

            {/* Big Image with border */}
            <div className='rounded-3xl shadow-xl border-[20px] lg:border-[50px] bg-sky-400 border-sky-400 pt-2 lg:pt-10 relative z-10'>
              <a draggable={false} href={product[currentProduct].link}>
                <img draggable={false} src="assets/images/picdb-home.png" alt="App Screenshot" className="rounded-3xl relative z-10" />
              </a>
            </div>

            <div className="absolute inset-x-0 bottom-1/5 z-10 bg-gradient-to-t from-white/80 to-transparent" />
            <div className="absolute inset-0 rounded-3xl border-sky-400 z-0"
              style={{ borderWidth: '4px', }}
            />

            {/* prev & next Button */}
            <button onClick={(e) => setCurrentProduct(currentProduct > 0 ? currentProduct-1: product.length-1)} className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-gray-100 shadow-2xl flex items-center justify-center text-gray-800 text-2xl z-20">
              <img draggable={false} className='h-8 w-8 items-center justify-between' src="assets/icons/left_arrow.svg" alt="Left Arrow" />
            </button>
            <button onClick={(e) => setCurrentProduct(currentProduct < product.length-1 ? currentProduct+1: 0)} className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-1/2 w-12 h-12 rounded-full bg-gray-100 shadow-2xl flex items-center justify-center text-gray-800 text-2xl z-20">
              <img draggable={false} className='h-8 w-8 items-center justify-between' src="assets/icons/right_arrow.svg" alt="Left Arrow" />
            </button>
        </div>
      </div>
    </div>
  );
};


const Features = ({
  icon,
  description,
}: any) => {
  return (
    <div className="text-start">
      <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-yellow-100">
        <img draggable={false} className="h-6 w-6 text-yellow-500" src={icon} />
      </div>
      <p className="text-gray-700 text-sm text-justify">
        {description}
      </p>
    </div>
  );
}