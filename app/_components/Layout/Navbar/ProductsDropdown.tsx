"use client";
import React, { useState } from 'react';
import DropdownLink from './DropdownLink';

const ProductsDropdown: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div
            className="relative"
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
        >
            <DropdownLink label="Products" hasDropdown />

            {isOpen && (
                <>
                    {/* Yarı opak siyah arka plan - tüm ekranı kaplar */}
                    <div
                        className="fixed inset-0 z-40 pointer-events-none"
                        style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}
                    ></div>

                    {/* Dropdown menü */}
                    <div className="fixed top-[130px] left-0 w-screen bg-white shadow-lg rounded p-4 z-50">
                        {/* İçerik max genişlik ve ortalanmış */}
                        <div className="mx-auto max-w-10/12 grid grid-cols-4 gap-4">
                            {/* Products Section */}
                            <div className="col-span-1">
                                <div className="text-lg font-medium mb-2">Products</div>
                                <a href="#" className="p-2 hover:bg-gray-100 flex items-center">
                                    <div className="w-6 h-6 mr-2"></div>
                                    Invoice Payment<br />
                                    <span className="text-sm text-gray-500">Pay vendors faster and safer</span>
                                </a>
                                <a href="#" className="p-2 hover:bg-gray-100 flex items-center">
                                    <div className="w-6 h-6 mr-2"></div>
                                    Banking Product<br />
                                    <span className="text-sm text-gray-500">Bank smarter with up to 4.36%</span>
                                </a>
                                <a href="#" className="p-2 hover:bg-gray-100 flex items-center">
                                    <div className="w-6 h-6 mr-2"></div>
                                    Accounting Outsourcing<br />
                                    <span className="text-sm text-gray-500">Simplify close and earn rewards</span>
                                </a>
                            </div>

                            {/* Connect with Bankbooker Section */}
                            <div className="col-span-1">
                                <div className="text-lg font-medium mb-2">Connect with Bankbooker</div>
                                <a href="#" className="p-2 hover:bg-gray-100 flex items-center">
                                    <div className="w-6 h-6 mr-2"></div>
                                    Talk with agent<br />
                                    <span className="text-sm text-gray-500">Get free consultancy</span>
                                </a>
                                <a href="#" className="p-2 hover:bg-gray-100 flex items-center">
                                    <div className="w-6 h-6 mr-2"></div>
                                    Chat with us<br />
                                    <span className="text-sm text-gray-500">Connect with support team</span>
                                </a>
                                <a href="#" className="p-2 hover:bg-gray-100 flex items-center">
                                    <div className="w-6 h-6 mr-2"></div>
                                    Telegram Community<br />
                                    <span className="text-sm text-gray-500">Benefit from privileges</span>
                                </a>
                            </div>

                            {/* Resource Center Section */}
                            <div className="col-span-1">
                                <div className="text-lg font-medium mb-2">Resource Center</div>
                                <a href="#" className="p-2 hover:bg-gray-100 flex items-center">
                                    <div className="w-6 h-6 mr-2"></div>
                                    Blog<br />
                                    <span className="text-sm text-gray-500">Get news and insights</span>
                                </a>
                                <a href="#" className="p-2 hover:bg-gray-100 flex items-center">
                                    <div className="w-6 h-6 mr-2"></div>
                                    Exclusive reports<br />
                                    <span className="text-sm text-gray-500">Unlock research and guides</span>
                                </a>
                                <a href="#" className="p-2 hover:bg-gray-100 flex items-center">
                                    <div className="w-6 h-6 mr-2"></div>
                                    Customer stories<br />
                                    <span className="text-sm text-gray-500">Learn from the best</span>
                                </a>
                            </div>

                            {/* Best Offer Section */}
                            <div className="col-span-1">
                                <div className="text-lg font-medium mb-2">Best Offer</div>
                                <div className="p-2 flex items-center">
                                    <div className="w-6 h-6 mr-2"></div>
                                    <span>İçerik eklenecek</span>
                                </div>
                                <div className="p-2 flex items-center">
                                    <div className="w-6 h-6 mr-2"></div>
                                    <span>İçerik eklenecek</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

export default ProductsDropdown;
