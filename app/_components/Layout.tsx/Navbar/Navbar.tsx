"use client"
import React from 'react';
import { Banner } from './Banner';
import Image from 'next/image';
import DropdownLink from './DropdownLink'; // yukarıdaki component

const Navbar = () => {
  return (
    <>
      <Banner />
      <nav className="w-full bg-white/70 shadow-sm">
        <div className="mx-auto max-w-10/12 flex items-center justify-between p-4">
          <div className="flex items-center">
            <Image src="/bankbooker.png" alt="BankBooker Logo" width={200} height={50} />
          </div>
          <div className="flex space-x-5">
            <DropdownLink label="Products" hasDropdown />
            <DropdownLink label="Solutions" hasDropdown />
            <DropdownLink label="Partners" />
            <DropdownLink label="Contact" />
          </div>
          <div className="flex space-x-4">
            <a href="#" className="text-black my-auto font-medium">Sign In</a>
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
