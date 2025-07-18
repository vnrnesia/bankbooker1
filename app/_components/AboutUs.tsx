"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const tabs = [
    "About Us",
    "Why Choose Us",
    "Lorem Ipsum",
    "Lorem Ipsum1",
];

const contents = [
    {
        title: "We Will Help You Achieve All Your Business Goals",
        desc: `Choosing us means partnering with a team dedicated to helping you navigate complex business challenges with confidence. We’re here to drive your success every step of the way.`,
    },
    {
        title: "Why Choose Us",
        desc: ``,
    },
    {
        title: "Lorem Ipsum",
        desc: ``,
    },
    {
        title: "Lorem Ipsum",
        desc: ``,
    },
];

const images = [
    "/services/card1.png",
    "/services/card2.svg",
    "/handshake.png",
    "/services/card1.png",
];

export default function AboutUs() {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [prevIndex, setPrevIndex] = useState(0);

    const handleTabChange = (index: number) => {
        setPrevIndex(selectedIndex);
        setSelectedIndex(index);
    };

    return (
        <div className="w-full pt-36 max-w-10/12 mx-auto">
            {/* Tabs Navigation with grid layout */}
            <div className="grid grid-cols-4 mx-auto border-b">
                {tabs.map((tab, i) => (
                    <div
                        key={tab}
                        className={`flex flex-col items-center justify-center py-3 cursor-pointer ${selectedIndex === i ? "border-b-4 border-black" : ""
                            }`}
                        onClick={() => handleTabChange(i)}
                    >
                        <span
                            className={`text-sm sm:text-xl font-[Manrope] whitespace-nowrap transition-all duration-300 ${selectedIndex === i
                                ? "font-semibold text-black"
                                : "text-gray-500 hover:text-black"
                                }`}
                        >
                            {tab}
                        </span>
                    </div>
                ))}
            </div>

            {/* Main Content */}
            <div className="w-full  mx-auto py-12">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                    {/* Left Text */}
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={selectedIndex + "-text"}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.3 }}
                            className="lg:col-span-1"
                        >
                            <p className="text-xs pb-4 font-semibold text-gray-900">CASH FLOW - FORECAST -  ACCOUNTING PREP
                            </p>
                            <h3 className="text-4xl text-[#3A3A3A] font-medium mb-4">
                                {contents[selectedIndex].title}
                            </h3>
                            <p className="text-gray-600 mb-6 whitespace-pre-line">
                                {contents[selectedIndex].desc}
                            </p>
                            <button className="bg-gradient-to-b from-[#0FA9E9] to-[#0786E2] text-white font-medium px-6 py-2 rounded hover:from-[#0786E2] hover:to-[#0FA9E9] transition-all duration-300">
                                Get In Touch With Us
                            </button>
                        </motion.div>
                    </AnimatePresence>

                    {/* Center Image */}
                    <div className="relative h-[300px] flex items-center justify-center">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={selectedIndex + "-center"}
                                initial={{ opacity: 0, x: 10, scale: 1 }}
                                animate={{ opacity: 1, x: 0, scale: 1 }}
                                exit={{ opacity: 0.3, x: -200, scale: 0.6 }}
                                transition={{ duration: 0.3 }}
                                className="absolute"
                            >
                                <Image
                                    src={images[selectedIndex]}
                                    alt="Center Visual"
                                    width={400}
                                    height={400}
                                    className="object-contain"
                                />
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Right Preview (next image animating in) */}
                    <div className="relative h-[300px] flex items-center justify-center">
                        {selectedIndex < images.length - 1 && (
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={selectedIndex + "-preview"}
                                    initial={{ x: 0, scale: 1, opacity: 1 }}
                                    animate={{ x: 0, scale: 1, opacity: 1 }}
                                    exit={{ x: -320, scale: 1.6, opacity: 1 }}
                                    transition={{ duration: 0.4 }}
                                    className="cursor-pointer relative"
                                    onClick={() => handleTabChange(selectedIndex + 1)}
                                >
                                    <Image
                                        src={images[selectedIndex + 1]}
                                        alt="Next Preview"
                                        width={250}
                                        height={250}
                                        className="object-contain z-0"
                                    />
                                    <motion.div
                                        initial={{ opacity: 0.3 }}
                                        animate={{ opacity: 0.3 }}
                                        exit={{ opacity: 0 }}
                                        transition={{ duration: 0.4 }}
                                        className="absolute inset-0 bg-black z-10 rounded-xl"
                                    />
                                </motion.div>

                            </AnimatePresence>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
