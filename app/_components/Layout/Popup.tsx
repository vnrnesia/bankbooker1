"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { Check } from "lucide-react";

const Popup = () => {
    const [showPopup, setShowPopup] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowPopup(true);
        }, 10000);
        return () => clearTimeout(timer);
    }, []);

    if (!showPopup) return null;

    return (
        <div className="fixed inset-0 bg-black/10 backdrop-blur-xs flex justify-center items-center z-50">
            <div className="bg-white rounded-lg shadow-lg flex max-w-4xl w-full mx-4 md:mx-0 overflow-visible relative">
                {/* Kapatma butonu */}
                <button
                    onClick={() => setShowPopup(false)}
                    aria-label="Close popup"
                    className="absolute -top-5 -right-4 z-60 w-10 h-10 bg-black bg-opacity-90 text-white rounded-full flex justify-center items-center text-2xl font-bold hover:bg-gray-800 transition"
                >
                    &times;
                </button>

                {/* Sol içerik */}
                <div className="p-8 flex flex-col justify-between w-full md:w-1/2">
                    <div>
                        <h2 className="text-lg font- text-[#848484] mb-2">
                            PRODUCT NEWSLETTER
                        </h2>
                        <h3 className="text-4xl font-semibold text-[#454545] mb-6">
                            International Payment Solutions for Businesses
                        </h3>
                        <ul className="space-y-4 text-gray-900">
                            {[
                                "Monthly product updates straight to your inbox",
                                "Access to exclusive webinars and content, for free",
                                "See why 350k financial professionals use BankBooker",
                            ].map((text, i) => (
                                <li key={i} className="flex items-center">
                                    <Check className=" min-w-[24px] mr-3" size={24} />
                                    <span>{text}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <form className="mt-6 flex gap-3" onSubmit={(e) => e.preventDefault()}>
                        <input
                            type="email"
                            placeholder="Enter your work email"
                            className="flex-grow p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                        <button className="bg-gradient-to-b from-[#0FA9E9] to-[#0786E2] text-white font-medium px-6 py-2 rounded hover:from-[#0786E2] hover:to-[#0FA9E9] transition-all duration-300">
                            Get Started
                        </button>
                    </form>
                </div>

                {/* Sağdaki resim: Üstten ve sağdan padding ile boşluk verildi */}
                <div className="hidden md:block md:w-1/2 relative pt-12 pl-16 ">
                    <Image
                        src="/popup.png"
                        alt="Newsletter"
                        width={350}
                        height={400}
                        style={{ objectFit: "cover", borderRadius: "0 0.5rem 0.5rem 0" }}
                        priority
                    />
                </div>
            </div>
        </div>
    );
};

export default Popup;
