"use client";

import React, { useState, useEffect } from "react";
import Banner from "./Banner";
import Image from "next/image";
import ProductsDropdown from "./ProductsDropdown";
import Link from "next/link";
import MobileDropdownProductsFull from "./MobileProductsDropdown";

const Navbar = () => {
  const [bannerOpen, setBannerOpen] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const [desktopProductsOpen, setDesktopProductsOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen((v) => !v);
    if (mobileProductsOpen) setMobileProductsOpen(false);
  };

  const toggleMobileProducts = () => {
    setMobileProductsOpen((v) => !v);
  };

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      setMobileProductsOpen(false);
    }
  }, [mobileMenuOpen]);

  return (
    <>
      {bannerOpen && <Banner onClose={() => setBannerOpen(false)} />}

      {(mobileMenuOpen || mobileProductsOpen || desktopProductsOpen) && (
        <div className="fixed top-0 left-0 w-full h-full bg-black/10 backdrop-blur-xs z-40" />
      )}

      <nav
        className={`fixed w-full bg-white/70 backdrop-blur-xs shadow-sm z-50 transition-all duration-300 ease-in-out ${bannerOpen ? "top-11" : "top-0"
          }`}
      >
        <div className="mx-auto max-w-10/12 flex items-center justify-between p-4">
          <div className="flex items-center">
            <Link href="/">
              <Image
                src="/bankbooker.png"
                alt="BankBooker Logo"
                width={200}
                height={50}
                priority
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            <div
              onMouseEnter={() => setDesktopProductsOpen(true)}
              onMouseLeave={() => setDesktopProductsOpen(false)}
            >
              <ProductsDropdown bannerOpen={bannerOpen} />
            </div>
            <Link href="/solutions" className="text-black font-medium">
              Solutions
            </Link>
            <Link href="/partner" className="text-black font-medium">
              Partners
            </Link>
            <Link href="/contact" className="text-black font-medium">
              Contact
            </Link>
          </div>

          {/* Desktop Right Buttons */}
          <div className="hidden md:flex space-x-4 items-center">
            <a href="#" className="text-black my-auto font-medium">
              Sign In
            </a>
            <a
              href="#"
              className="bg-gradient-to-l from-[#0273DE] to-[#10B0EB] text-white px-4 py-2 rounded font-medium"
            >
              See a demo
            </a>
          </div>

          {/* Hamburger Menu Button */}
          <button
            aria-label="Toggle menu"
            className="md:hidden flex flex-col justify-center items-center w-14 h-16 space-y-1 overflow-hidden focus:outline-none z-50"
            onClick={toggleMobileMenu}
          >
            <span
              className={`block h-0.5 w-7 bg-black rounded transform transition duration-300 ease-in-out origin-center ${mobileMenuOpen ? "rotate-45 translate-y-[6px]" : ""
                }`}
            ></span>
            <span
              className={`block h-0.5 w-7 bg-black rounded transition duration-300 ease-in-out ${mobileMenuOpen ? "opacity-0" : "opacity-100"
                }`}
            ></span>
            <span
              className={`block h-0.5 w-7 bg-black rounded transform transition duration-300 ease-in-out origin-center ${mobileMenuOpen ? "-rotate-45 -translate-y-[6px]" : ""
                }`}
            ></span>
          </button>
        </div>

        {/* Mobil Menü */}
        {mobileMenuOpen && (
          <div className="absolute left-0 w-full bg-white shadow-md z-40 md:hidden">
            <div className="pt-4 pb-6 space-y-6">
              <nav className="flex flex-col space-y-4 font-medium text-lg px-6">
                <button
                  onClick={toggleMobileProducts}
                  className="flex items-center w-full text-left"
                  aria-expanded={mobileProductsOpen}
                  aria-controls="mobile-products-menu"
                >
                  Products
                  <svg
                    className={`w-5 h-5 ml-2 transition-transform duration-300 ${mobileProductsOpen ? "rotate-180" : ""
                      }`}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                {mobileProductsOpen && (
                  <div
                    id="mobile-products-menu"
                    className="md:pl-4 md:border-l border-gray-300"
                  >
                    <MobileDropdownProductsFull
                      onClose={() => setMobileMenuOpen(false)}
                    />
                  </div>
                )}

                <Link
                  href="/solutions"
                  className="block text-black hover:text-blue-600"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Solutions
                </Link>
                <Link
                  href="/partner"
                  className="block text-black hover:text-blue-600"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Partners
                </Link>
                <Link
                  href="/contact"
                  className="block text-black hover:text-blue-600"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Contact
                </Link>

                <div className="pt-6 space-y-4 border-t border-gray-200">
                  <a
                    href="#"
                    className="block text-center font-medium text-black"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Sign In
                  </a>
                  <a
                    href="#"
                    className="block text-center bg-gradient-to-l from-[#0273DE] to-[#10B0EB] text-white px-6 py-3 rounded font-medium"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    See a demo
                  </a>
                </div>
              </nav>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
