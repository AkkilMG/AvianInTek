"use client";
import { useEffect, useState } from "react";

const Hero = ({ team }: any) => {
    const picdb = "https://picdb.avianintek.com";
    const [mention, setMention] = useState(0);
    // const [hand, setHand] = useState("assets/images/tablet-in-hand.png");
    useEffect(() => {
        const randomMention = Math.floor(Math.random() * team.length);
        setMention(randomMention);
    }, []);

    // useEffect(() => {
    //     const updateHandImage = () => {
    //         if (window.innerWidth > 768) {
    //             setHand("assets/images/mobile-in-hand.png");
    //         } else {
    //             setHand("assets/images/tablet-in-hand.png");
    //         }
    //     };

    //     updateHandImage();
    //     window.addEventListener("resize", updateHandImage);

    //     return () => window.removeEventListener("resize", updateHandImage); // Cleanup
    // }, []);


    return (
        <section id="home" className="relative bg-black text-white h-screen overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 pt-32 md:pt-32 lg:pt-32 grid md:grid-cols-2 items-center gap-12 relative z-10">
                <div className="text-left">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
                        Easy way to get <br /> products which make life easier...
                    </h1>
                    <p className="text-lg md:text-xl text-gray-300 mb-8">
                        We are a small team of developers trying to make life easier for people by providing them with the best products.
                    </p>
                    <div className="flex flex-row md:flex-row gap-4 justify-start">
                        <a draggable={false} href={picdb} className="bg-white text-black px-5 py-3 rounded-lg font-medium shadow-md hover:shadow-lg">
                            <span className="block text-sm">Free Image Storage</span>
                            <span className="text-lg font-bold flex items-center">
                                <img draggable={false} src="https://picdb.avianintek.com/assets/logo/PicDB.png" className="h-5 w-5 mr-2" />
                                PicDB
                            </span>
                        </a>
                    </div>
                    <div className="text-center md:text-left mt-10 hidden md:block">
                        <p className="text-4xl font-extrabold text-purple-500 leading-tight">1.2K</p>
                        <p className="text-lg text-gray-300 mt-2">Requests per day from our applications</p>
                    </div>
                </div>
            </div>
            <div className="absolute top-0 right-0 h-full hidden md:block">
                <img draggable={false} src="assets/images/background.png" alt="Background mobile in hand" className="h-full object-cover" />
            </div>
            <div className="absolute hidden md:block bottom-0 right-0 mx-auto w-full max-w-xs sm:max-w-sm md:max-w-lg md:max-w-xl">
                <img draggable={false} src="/assets/images/mobile-in-hand.png" alt="Mobile in Hand" width={650} height={710} className="relative z-20 drop-shadow-2xl" />
            </div>
            <div className="absolute bottom-10 right-64 transform -translate-x-1/2 hidden lg:flex flex-col space-y-8 items-center z-30">
                <div className="flex items-center bg-blue-100 text-blue-900 rounded-lg shadow-md w-72 border-2 border-blue-500 transform -rotate-6">
                    <div className="p-3">
                        <div className="w-6 h-6 flex items-center justify-center rounded-full bg-green-500">
                            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                        </div>  
                    </div>
                    <p className="pl-3 font-medium">Active team to assist you</p>
                </div>
                <a draggable={false} href="https://www.linkedin.com/in/akkilmg">
                    <div className="flex items-center justify-between bg-white px-4 py-3 rounded-lg shadow-md w-72 border-2 border-blue-500 transform translate-x-12">
                        <div className="flex items-center">
                            <div className="w-12 h-12 rounded-full overflow-hidden mr-3">
                                <img draggable={false} src="assets/team/circle/akkil.png" alt="Avatar" width={48} height={48} />
                            </div>
                            <div>
                                <p className="text-sm text-gray-600">Team member</p>
                                <p className="font-medium text-gray-800">Akkil M G</p>
                            </div>
                        </div>
                        <div className="text-right">
                            <p className="text-sm text-gray-600">From</p>
                            <p className="font-medium text-gray-800">1 Jan</p>
                        </div>
                    </div>
                </a>
                <a draggable={false} href={`https://www.linkedin.com/in/${team[mention].linkedin}`}>
                    <div className="flex items-center justify-between bg-black px-4 py-3 rounded-lg shadow-md w-72 border-2 border-blue-500 transform rotate-6">
                        <div className="flex items-center">
                            <div className="w-12 h-12 rounded-full overflow-hidden mr-3">
                                <img draggable={false} src={`assets/team/circle/${team[mention].avatar}`} alt="Avatar" width={48} height={48} />
                            </div>
                            <div>
                                <p className="text-sm text-white">{team[mention].role}</p>
                                <p className="font-medium text-gray-100">{team[mention].name}</p>
                            </div>
                        </div>
                        <div className="text-right">
                            <p className="text-sm text-gray-100">From</p>
                            <p className="font-medium text-gray-100">{team[mention].from}</p>
                        </div>
                    </div>
                </a>
            </div>
        </section>
    );
};

export default Hero;
