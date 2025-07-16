"use client";

import { useState, useEffect } from "react";
import { FiChevronUp } from "react-icons/fi";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Scroll to top button visibility
    const toggleVisibility = () => {
      const scrollPosition = window.scrollY + window.innerHeight;
      const pageHeight = document.documentElement.scrollHeight;
      const scrollThreshold = pageHeight * 0.9;
      setVisible(scrollPosition >= scrollThreshold);
    };

    window.addEventListener("scroll", toggleVisibility);

    // GSAP animations for parallax reveal effect from bottom
    // Left Area (Logo, Title, Button)
    gsap.fromTo(
      ".footer-left",
      { opacity: 0, y: 150 }, // Start below footer, fully hidden
      {
        opacity: 1,
        y: 0, // Slide to original position
        duration: 1.2,
        scrollTrigger: {
          trigger: "footer",
          start: "top bottom", // Start when top of footer hits bottom of viewport
          end: "top 70%", // End when top of footer is 70% up the viewport
          scrub: 1,
        },
      }
    );

    // Right Area (Contact Info)
    gsap.fromTo(
      ".footer-right",
      { opacity: 0, y: 150 }, // Start below footer, fully hidden
      {
        opacity: 1,
        y: 0, // Slide to original position
        duration: 1.2,
        scrollTrigger: {
          trigger: "footer",
          start: "top bottom",
          end: "top 70%",
          scrub: 1,
        },
      }
    );

    // Menu Area Links
    gsap.fromTo(
      ".footer-menu a",
      { opacity: 0, y: 100 }, // Start below menu area, fully hidden
      {
        opacity: 1,
        y: 0, // Slide to original position
        duration: 0.8,
        stagger: 0.1,
        scrollTrigger: {
          trigger: ".footer-menu",
          start: "top bottom",
          end: "top 80%",
          scrub: 1,
        },
      }
    );

    // Bottom Info and Social Media
    gsap.fromTo(
      ".footer-bottom",
      { opacity: 0, y: 100 }, // Start below bottom area, fully hidden
      {
        opacity: 1,
        y: 0, // Slide to original position
        duration: 1,
        scrollTrigger: {
          trigger: ".footer-bottom",
          start: "top bottom",
          end: "top 80%",
          scrub: 1,
        },
      }
    );

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* Main Footer Area */}
      <footer className="w-full min-h-[550px] bg-gray-100 text-gray-800 font-manrope overflow-hidden">
        <div className="w-full">
          <div className="max-w-10/12 mx-auto px-4 sm:px-6 lg:px-8 pb-8 md:pb-12">
            <div className="flex flex-col md:flex-row justify-between gap-8 md:gap-12">
              {/* Left Area */}
              <div className="footer-left max-w-xl py-8 md:py-1">
                <div className="flex items-center gap-2 mb-4">
                  <Link href="/" className="flex items-center gap-2 mb-4">
                    <Image
                      src="/bankbooker.png"
                      alt="Bankbooker Logo"
                      width={500}
                      height={48}
                      className="h-12 w-auto object-contain"
                    />
                  </Link>
                </div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium leading-tight mb-3">
                  Ready to Take Control Of <br className="hidden sm:block" /> Your Finances?
                </h2>
                <p className="text-gray-400 font-sans font-light mb-5">
                  We look forward to learning about your financial goals.
                </p>
                <div className="pt-8 md:pt-16">
                  <button className="bg-[#047EDF] hover:bg-blue-700 text-white font-medium px-6 py-2 rounded-full transition-colors duration-300">
                    Free Consultation
                  </button>
                </div>
              </div>

              {/* Right Area */}
              <div className="footer-right grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-16 text-sm pt-8 md:pt-36 text-gray-600">
                <div className="space-y-4">
                  <h4 className="text-base font-semibold text-gray-800 tracking-wide mb-4">
                    CONTACT US
                  </h4>
                  <div>
                    <p className="text-base md:text-lg font-medium text-gray-700">Our Phone</p>
                    <p className="text-base md:text-lg text-gray-600">+7 (917) 889 94–54</p>
                  </div>
                  <div>
                    <p className="text-base md:text-lg font-medium text-gray-700">Our Email</p>
                    <p className="text-base md:text-lg text-gray-600">info@bankbooker.com</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <p className="text-base md:text-lg font-medium text-gray-700">Mon– Fri:</p>
                    <p className="text-base md:text-lg text-gray-600">8:30am – 5:30pm</p>
                  </div>
                  <div>
                    <p className="text-base md:text-lg font-medium text-gray-700">Moscow:</p>
                    <p className="text-base md:text-lg text-gray-600">
                      1140 Kremlin St, RU 13131
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Menu Area */}
      <div className="w-full border-t border-gray-300 bg-white mb-10 md:mb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="footer-menu flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 lg:gap-[142px] text-gray-600 text-sm font-semibold text-center">
            <Link href="#" className="hover:text-blue-600 transition-colors">Services</Link>
            <Link href="#" className="hover:text-blue-600 transition-colors">Who We Are</Link>
            <Link href="#" className="hover:text-blue-600 transition-colors">Insights</Link>
            <Link href="#" className="hover:text-blue-600 transition-colors">Careers</Link>
            <Link href="#" className="hover:text-blue-600 transition-colors">Team</Link>
            <Link href="#" className="hover:text-blue-600 transition-colors">Contact Us</Link>
          </div>
        </div>

        {/* Divider */}
        <div className="hidden md:block w-full max-w-[1270px] mx-auto border-t border-gray-300" />

        {/* Bottom Info Area */}
        <div className="footer-bottom max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
            <div className="text-gray-600 flex flex-wrap items-center justify-center gap-4">
              <span>2025 Bankbooker. All rights reserved.</span>
              <div className="flex gap-4">
                <Link href="#" className="hover:text-blue-600 transition-colors">Terms & Conditions</Link>
                <Link href="#" className="hover:text-blue-600 transition-colors">Privacy Policy</Link>
              </div>
            </div>

            {/* Social Media */}
            <div className="flex gap-6 pb-10 md:pb-0">
              <Link href="#" className="hover:opacity-75 transition-opacity">
                <Image src="/social/icon1.png" alt="X" width={24} height={24} />
              </Link>
              <Link href="#" className="hover:opacity-75 transition-opacity">
                <Image src="/social/icon2.png" alt="LinkedIn" width={24} height={24} />
              </Link>
              <Link href="#" className="hover:opacity-75 transition-opacity">
                <Image src="/social/icon3.png" alt="Facebook" width={24} height={24} />
              </Link>
              <Link href="#" className="hover:opacity-75 transition-opacity">
                <Image src="/social/icon4.png" alt="Instagram" width={24} height={24} />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        aria-label="Back to top"
        className={`fixed bottom-6、服务

System: 6 right-6 left-1/2 transform -translate-x-1/2 z-50
          bg-blue-600 hover:bg-blue-700
          text-white p-3 rounded-full
          shadow-lg
          flex items-center justify-center
          w-10 h-10
          pointer-events-auto
          transition-all duration-300 ease-in-out
          ${visible ? "opacity-100 scale-100" : "opacity-0 scale-75 pointer-events-none"}
        `}
        style={{ willChange: "opacity, transform" }}
      >
        <FiChevronUp size={24} />
      </button>
    </>
  );
};

export default Footer;