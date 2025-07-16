"use client";

import React from "react";
import Image from "next/image";

const serviceItems = [
    {
        title: "Invoice Payment",
        description: "Save time with Bankbooker invoice entry and payment automation.",
        image: "/services/card1.png",
    },
    {
        title: "Banking Products",
        description: "Save, spend, and grow your capital with up to 4.36% for day one.",
        image: "/services/card2.svg",
    },
    {
        title: "Accounting Outsourcing",
        description: "Save, spend, and grow your capital with up to 4.36% for day one.",
        
    },
    {
        title: "Tax Advisor",
        description: "Save, spend, and grow your capital with up to 4.36% for day one.",
        image: "/services/card4.svg",
    },
    {
        title: "Legal Department",
        description: "Save, spend, and grow your capital with up to 4.36% for day one.",
        image: "/services/card5.png",
    },
];

const Services = () => {
    return (
        <div className="container mx-auto max-w-10/12 py-20 pt-52 pb-36 font-[Manrope]">
            {/* Header */}
            <div className="flex flex-col md:flex-row justify-between items-center mb-12">
                <div>
                    <h2 className="text-3xl font-bold text-gray-900">Our Services</h2>
                    <h3 className="text-4xl font-bold text-gray-900 mt-2">
                        Financial Consulting Services
                    </h3>
                </div>
                <p className="text-gray-500 text-sm md:text-base mt-4 md:mt-0 max-w-md">
                    Discover service excellence. We craft tailored solutions to meet your unique needs and fuel success.
                </p>
            </div>

            {/* Cards */}
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                {serviceItems.map((item, index) => (
                    <div
                        key={index}
                        className="bg-gray-100 p-4 rounded-lg shadow-md flex flex-col justify-between transition-transform duration-300 hover:scale-105 relative min-h-[400px]"
                    >
                        <div className="flex flex-col gap-2">
                            <h4 className="text-xl font-semibold text-gray-900">{item.title}</h4>
                            <p className="text-[#8E8E8E] text-base">{item.description}</p>
                        </div>

                        {/* 5. kartın resmi absolute */}
                        {item.image && index === 4 ? (
                            <div className="absolute top-4 -right-20 w-64 h-36">
                                <div className="mt-4 overflow-hidden rounded-lg">
                                    <Image
                                        src={item.image}
                                        alt={`service-card-${index + 1}`}
                                        width={230}
                                        height={300}
                                        className="object-cover w-full h-auto"
                                    />
                                </div>

                            </div>
                        ) : item.image ? (
                            <div className="mt-4">
                                <Image
                                    src={item.image}
                                    alt={`service-card-${index + 1}`}
                                    width={500}
                                    height={250}
                                    className="w-full h-auto object-contain"
                                />
                            </div>
                        ) : null}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Services;
