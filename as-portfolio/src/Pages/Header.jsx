import React from 'react';
import Union from '../assets/Icons/Union.png';
import Group from '../assets/Icons/Group.png';

const HeroSection = () => {
    return (
        <>
            <div className="min-h-screen w-full bg-[#0e0e0e] text-white relative md:px-20 py-4 font-sans">
                <div className="flex justify-center  relative z-10">
                    <div className="bg-black rounded-xl px-6 py-2 flex items-center gap-4 shadow border border-gray-700">
                        <p className="cursor-pointer hover:text-gray-300 transition">Download Resume</p>
                        <div className="w-px h-4 bg-gray-600" />
                        <p className="cursor-pointer hover:text-gray-300 transition">Contact Now</p>
                        <div className="w-px h-4 bg-gray-600" />
                        <p className="cursor-pointer hover:text-gray-300 transition">Work Portfolio</p>
                    </div>
                </div>
                {/* Grid Background */}
                <div className="absolute inset-0 bg-[radial-gradient(#333_1px,transparent_1px)] [background-size:32px_32px] opacity-10 z-0" />
                <div
                    className="bg-[#0e0e0e] text-white rounded-sm px-6 py-3 flex items-center justify-center gap-6 shadow-md"
                    style={{
                        backgroundImage: `url(${Union})`,


                    }}
                >
                    {/* Top Option Bar */}


                    {/* Main Content Section (Starts AFTER the top bar) */}
                    <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-20 md:gap-30">
                        {/* Left Content */}
                        <div className="flex-1 text-start md:text-left">
                            <h1 className="text-5xl font-bold text-white mb-2">
                                <span className="text-gray-300">Ankit</span> Singh
                            </h1>
                            <h2 className="text-2xl text-gray-400 mb-4">(Frontend Developer)</h2>
                            <p className="text-gray-300 mb-6">
                                Result-oriented software professional with over 1 years of <br />experience in software design and development. Proven ability to <br /> produce brainstorming strategies. Expertise spans all phases of <br /> Content Development, including Study, Analysis, Content Design, <br /> Deployment, Integration, and Implementation.
                            </p>

                            {/* CTA Buttons */}
                            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                                <a
                                    href="#"
                                    className="px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold shadow-md hover:scale-105 transition"
                                >
                                    Download Resume
                                </a>
                                <a
                                    href="#"
                                    className="px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold shadow-md hover:scale-105 transition"
                                >
                                    Contact Now
                                </a>
                            </div>
                        </div>

                        {/* Right Image */}
                        <div className="flex justify-end flex-1">
                            <img
                                src={Group} // replace this with the actual image path
                                alt="Ankit Singh"
                                className="rounded-xl border-[3px] border-white max-w-xs md:max-w-sm"
                            />
                        </div>
                    </div>
                </div>
            </div></>

    );
};

export default HeroSection;