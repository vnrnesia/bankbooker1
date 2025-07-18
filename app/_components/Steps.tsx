"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const steps = [
    {
        title: "Initial Consultation",
        desc: "We begin by understanding your business, industry challenges, and financial goals.",
        image: "/step1.png",
    },
    {
        title: "header2",
        desc: "desc2",
        image: "/step2.png",
    },
    {
        title: "header3",
        desc: "desc3",
        image: "/step3.png",
    },
    {
        title: "header4",
        desc: "desc4",
        image: "/step4.png",
    },
];

export default function Steps() {
    const [stepIndex, setStepIndex] = useState(0);
    const step = steps[stepIndex];

    const handleNext = () => {
        if (stepIndex < steps.length - 1) {
            setStepIndex(stepIndex + 1);
        }
    };

    const handlePrev = () => {
        if (stepIndex > 0) {
            setStepIndex(stepIndex - 1);
        }
    };

    return (
        <div className="w-full bg-gray-100 mt-36 py-16">
            {/* Header */}
            <div className="text-center max-w-3xl mx-auto px-4 mb-12">
                <h3 className="text-lg text-[#474747] font-medium">Our Process</h3>
                <h2 className="text-4xl font-semibold text-[#2D2D2D] mt-2">
                    4 Easy Steps To Achieve Your Goals
                </h2>
            </div>

            {/* Content */}
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 px-6">
                {/* Left Image */}
                <div className="w-full md:w-1/2">
                    <Image
                        src={step.image}
                       
                        width={600}
                        height={600}
                        className="w-full h-auto rounded-2xl shadow-md object-contain"
                    />
                </div>

                {/* Right Content */}
                <div className="w-full md:w-1/2">
                    <p className="text-sm text-gray-500 mb-2 tracking-wide"> 0{stepIndex + 1}</p>
                    <h4 className="text-2xl font-bold text-gray-900 mb-3">{step.title}</h4>
                    <p className="text-gray-600 mb-6 leading-relaxed">{step.desc}</p>

                    {/* CTA Buttons */}
                    <div className="flex flex-wrap gap-4 mb-6">
                        <button className="bg-white border border-gray-300 px-5 py-2.5 rounded-lg shadow-sm hover:bg-gray-100 transition flex items-center gap-2">
                            Lorem Ipsum BB <span className="text-lg">→</span>
                        </button>
                        <button className="bg-white border border-gray-300 px-5 py-2.5 rounded-lg shadow-sm hover:bg-gray-100 transition flex items-center gap-2">
                            Lorem Ipsum BB <span className="text-lg">→</span>
                        </button>
                    </div>

                    {/* Progress Bar */}
                    <div className="relative h-2 bg-gray-200 rounded-lg overflow-hidden">
                        <motion.div
                            className="absolute top-0 left-0 h-full bg-blue-600 rounded-lg"
                            initial={{ width: 0 }}
                            animate={{ width: `${((stepIndex + 1) / steps.length) * 100}%` }}
                            transition={{ duration: 0.4 }}
                        />
                    </div>

                    {/* Step Controls */}
                    <div className="flex gap-4  items-center mt-6">
                        <button
                            onClick={handlePrev}
                            disabled={stepIndex === 0}
                            className="text-black font-medium  disabled:opacity-40 disabled:cursor-not-allowed"
                        >
                            ← Previous
                        </button>
                        <button
                            onClick={handleNext}
                            disabled={stepIndex === steps.length - 1}
                            className="text-black font-medium disabled:opacity-40 disabled:cursor-not-allowed"
                        >
                            Next →
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
