"use client";

import Image from "next/image";

const icons = Array.from({ length: 10 }, (_, i) => `brand${i + 1}.png`);

const Brands = () => {
  return (
    <div className="font-[Manrope] px-6 max-w-7xl mx-auto text-center">
      <h3 className="text-md text-gray-500 font-medium mb-2">Partner</h3>
      <h2 className="text-3xl md:text-4xl font-semibold text-neutral-900 mb-4">
        Trusted By 550+ Companies Worldwide
      </h2>
      <p className="text-gray-500 max-w-xl mx-auto mb-10">
        Here are some of the companies that have been empowered by Bankbooker to
        move forward with confidence
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
        {icons.map((icon, index) => (
          <div
            key={index}
            className="group bg-white border border-gray-200 rounded-xl p-4 flex items-center justify-center h-20 shadow-sm hover:shadow-md transition"
          >
            <Image
              src={`/brands/${icon}`}
              alt={`Company logo ${index + 1}`}
              width={150}
              height={60}
              className={`object-contain ${
                index === 4 ? "w-[80%] md:w-[45%]" : "w-[100%] md:w-[65%]"
              }`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Brands;
