// Navbar.tsx
"use client";
import React from "react";
import { Banner } from "./Banner";
import Image from "next/image";
import ProductsDropdown from "./ProductsDropdown";
import SolutionsDropdown from "./SolutionsDropdown";
import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <Banner />
      <nav className="fixed top-11 w-full bg-white/70 backdrop-blur-xs shadow-sm z-30">
        <div className="mx-auto max-w-10/12 flex items-center justify-between p-4">
          <div className="flex items-center">
            <Link href="/">
              <Image
                src="/bankbooker.png"
                alt="BankBooker Logo"
                width={200}
                height={50}
              />
            </Link>
          </div>

          <div className="flex space-x-5">
            <ProductsDropdown />
            <SolutionsDropdown />
            <Link href="/partner" className="text-black font-medium">
              Partners
            </Link>
            <Link href="/contact" className="text-black font-medium">
              Contact
            </Link>
          </div>

          <div className="flex space-x-4">
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
        </div>
      </nav>
    </>
  );
};

export default Navbar;
