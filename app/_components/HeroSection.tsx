"use client";
import React from 'react';
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';

const HeroSection = () => {



    return (
        <div className="w-full min-h-screen bg-white">
            <div className="max-w-10/12 mx-auto pt-36  px-4">
                <nav className="md:pt-0">
                    <div className="flex justify-end items-center py-4">

                    </div>
                </nav>
                <div className="md:mt-10 flex flex-col lg:flex-row gap-8 h-full">
                    <div className="flex-1">
                        <div>
                            <div className="text-sm font-medium text-gray-700">
                                Welcome To Bankbooker
                            </div>
                            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight mt-2 font-medium">
                                International Payment Solutions
                                <br className="hidden sm:block" />
                                and Complex Services for Businesses
                            </h1>
                            <p className="text-sm text-gray-600 mt-4 max-w-[500px]">
                                At Bankbooker, we embrace innovation as the driving force behind
                                every solution. Our commitment to staying ahead of industry trends
                                ensures that your business.
                            </p>
                        </div>
                        <div className="mt-6 flex flex-wrap gap-4">
                            <button className="bg-gradient-to-b from-[#0FA9E9] to-[#0786E2] text-white font-medium px-6 py-2 rounded hover:from-[#0786E2] hover:to-[#0FA9E9] transition-all duration-300">
                                Get Started
                            </button>
                            <button className="border border-gray-300 px-6 py-2 rounded font-medium text-gray-700 hover:bg-gradient-to-r hover:from-sky-500 hover:to-blue-600 hover:text-white transition duration-300">
                                Our Services
                            </button>
                        </div>
                        <div className="flex flex-col lg:flex-row gap-4 mt-4 md:mt-[82px]">
                            <div className="bg-[#0D7ECF] rounded-xl p-4 sm:p-6 w-full lg:w-[400px] h-auto lg:h-[300px] text-white flex flex-col justify-between">
                                <div className="flex flex-col items-center gap-2">
                                    <div className="flex items-center gap-4 text-center">
                                        <div className="text-3xl sm:text-4xl font-sans">120+</div>
                                        <div className="text-sm leading-snug max-w-[220px] text-left">
                                            Grow Smarter, Faster With Bankbooker Financial Solutions
                                        </div>
                                    </div>
                                    <div className="h-[1px] w-full bg-gray-300 mt-2" />
                                </div>
                                <div className="mt-4 flex sm:flex-col xl:flex-row items-center justify-center gap-4">
                                    <div className="flex -space-x-2">
                                        <Image src="/avatar/avatar1.png" alt="Avatar 1" width={40} height={40} className="rounded-full border-2 border-white" />
                                        <Image src="/avatar/avatar2.png" alt="Avatar 2" width={40} height={40} className="rounded-full border-2 border-white" />
                                        <Image src="/avatar/avatar3.png" alt="Avatar 3" width={40} height={40} className="rounded-full border-2 border-white" />
                                        <Image src="/avatar/avatar4.png" alt="Avatar 4" width={40} height={40} className="rounded-full border-2 border-white" />
                                    </div>

                                    <div className="flex items-center gap-2">
                                        <div className="flex gap-1">
                                            {[...Array(4)].map((_, i) => (
                                                <FontAwesomeIcon
                                                    key={i}
                                                    icon={faStar}
                                                    className="text-yellow-400 w-4 h-4"
                                                />
                                            ))}
                                            <FontAwesomeIcon
                                                icon={faStarHalfAlt}
                                                className="text-yellow-400 w-4 h-4"
                                            />
                                        </div>
                                        <span className="text-white text-sm font-medium opacity-70">
                                            4.9/5 Rating
                                        </span>
                                    </div>
                                </div>

                            </div>
                            <div className="bg-gradient-to-b from-[#0FA9E9] to-[#0786E2] rounded-xl p-4 sm:p-6 w-full lg:w-[393px] h-auto lg:h-[300px] text-white flex flex-col justify-between">
                                <div>
                                    <div className="font-medium text-lg">Proven Business & Financial Expertise</div>
                                    <div className="text-sm mt-1 leading-snug py-4">
                                        Bankbooker Reliable seeds for business & financial growth. Our consultants are the Best Today
                                    </div>
                                    <button className="border mt-4 border-gray-300 px-5 py-2 rounded-lg text-xs text-white hover:bg-white hover:text-black transition duration-300">
                                        Learn More
                                    </button>
                                </div>
                                <div className="mt-6">
                                    <div className="flex items-center gap-2 mt-3 text-white">
                                        <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white text-[#00A3FF] flex items-center justify-center">
                                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M8 5v14l11-7z" />
                                            </svg>
                                        </div>
                                        <span className="text-sm">
                                            How does it work?
                                            <br />
                                            <span className="text-[13px] text-white/80">Play video</span>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="hidden lg:block flex-1 bg-gray-200 rounded-xl max-w-2xl p-6">
                        <p className="text-gray-700">Content</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;