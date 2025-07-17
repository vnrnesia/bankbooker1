'use client';
import React from 'react';
import { ChevronDown } from 'lucide-react';

interface DropdownLinkProps {
  label: React.ReactNode;
  hasDropdown?: boolean;
  isOpen?: boolean;
}

const DropdownLink = ({
  label,
  hasDropdown = false,
  isOpen = false,
}: DropdownLinkProps) => {
  const handleClick = (e: React.MouseEvent) => {
    if (hasDropdown) e.preventDefault();
  };

  return (
    <a
      href="#"
      onClick={handleClick}
      className="group flex items-center font-medium text-black cursor-pointer select-none transition-colors duration-300"
    >
      {label}
      {hasDropdown && (
        <ChevronDown
          size={20}
          className={`ml-1 transition-transform duration-300 ease-in-out ${isOpen ? 'rotate-180 text-blue-700' : ''
            } group-hover:text-blue-700`}
        />
      )}
    </a>
  );
};

export default DropdownLink;
