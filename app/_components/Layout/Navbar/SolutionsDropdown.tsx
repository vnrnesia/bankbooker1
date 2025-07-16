'use client';
import React, { useState } from 'react';
import DropdownLink from './DropdownLink';

const SolutionsDropdown: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div
            className="relative"
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
        >
            <DropdownLink label="Solutions" hasDropdown />

            {isOpen && (
                <>
                    {/* Yarı opak siyah arka plan - tüm ekranı kaplar */}
                    <div
                        className="fixed inset-0 z-40 pointer-events-none"
                        style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}
                    ></div>

                    {/* Dropdown menü */}
                    <div className="absolute top-full left-0 bg-white shadow-lg rounded p-4 w-72 z-50">
                        <a href="#" className="block p-2 hover:bg-gray-100">
                            Invoice Payment<br />
                            <span className="text-sm text-gray-500">Pay vendors faster and safer</span>
                        </a>
                        <a href="#" className="block p-2 hover:bg-gray-100">
                            Banking Product<br />
                            <span className="text-sm text-gray-500">Bank smarter with up to 4.36%</span>
                        </a>
                        <a href="#" className="block p-2 hover:bg-gray-100">
                            Accounting Outsourcing<br />
                            <span className="text-sm text-gray-500">Simplify close and earn rewards</span>
                        </a>
                    </div>
                </>
            )}
        </div>
    );
};

export default SolutionsDropdown;
