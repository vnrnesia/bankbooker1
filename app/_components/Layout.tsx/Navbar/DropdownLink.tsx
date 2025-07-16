import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface DropdownLinkProps {
  label: React.ReactNode;
  hasDropdown?: boolean;
}

const DropdownLink = ({ label, hasDropdown = false }: DropdownLinkProps) => {
  const [open, setOpen] = useState(false);

  if (!hasDropdown) {
    return (
      <a href="#" className="text-black flex font-medium items-center">
        {label}
      </a>
    );
  }

  return (
    <a
      href="#"
      className="text-black flex font-medium items-center cursor-pointer select-none"
      onClick={e => {
        e.preventDefault();
        setOpen(!open);
      }}
    >
      {label}
      <ChevronDown
        className={`ml-1 transition-transform duration-300 ease-in-out ${
          open ? 'rotate-180' : 'rotate-0'
        }`}
        size={20}
      />
    </a>
  );
};

export default DropdownLink;
