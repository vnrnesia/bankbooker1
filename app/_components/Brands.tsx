"use client";

import Image from "next/image";

const icons = [
    { src: "brand1.png", width: "w-[80%] md:w-[60%]" },
    { src: "brand2.png", width: "w-[70%] md:w-[50%]" },
    { src: "brand3.png", width: "w-[90%] md:w-[60%]" },
    { src: "brand4.png", width: "w-[85%] md:w-[60%]" },
    { src: "brand5.png", width: "w-[75%] md:w-[35%]" },
    { src: "brand6.png", width: "w-[95%] md:w-[50%]" },
    { src: "brand7.png", width: "w-[80%] md:w-[50%]" },
    { src: "brand8.png", width: "w-[100%] md:w-[50%]" },
    { src: "brand9.png", width: "w-[90%] md:w-[65%]" },
    { src: "brand10.png", width: "w-[85%] md:w-[60%]" },
];

const Brands = () => {
    return (
        <div className="px-4 font-[Manrope] max-w-10/12 mx-auto pt-24 ">
            <div className="flex flex-col md:flex-row justify-between items-center mb-12">
                <div>
                    <h2 className="text-3xl font-bold text-gray-900">Partner</h2>
                    <h3 className="text-4xl font-bold text-gray-900 mt-2">
                        Trusted By 550+ Companies Worldwide                    </h3>
                </div>
                <p className="text-gray-500 text-sm md:text-base mt-4 md:mt-0 max-w-md">
                    Here are some of the companies that have been empowered by Bankbooker to move forward with confidence.
                </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
                {icons.map((icon, index) => (
                    <div
                        key={index}
                        className="group bg-white border border-gray-200 rounded-xl p-4 flex items-center justify-center h-20 shadow-sm hover:shadow-md transition"
                    >
                        <Image
                            src={`/brands/${icon.src}`}
                            alt={`Company logo ${index + 1}`}
                            width={150}
                            height={60}
                            className={`object-contain grayscale group-hover:grayscale-0 group-hover:scale-105 transition duration-300 ease-in-out ${icon.width}`}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Brands;
