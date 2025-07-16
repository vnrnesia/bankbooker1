"use client";
import React, { useState, useRef, useEffect } from 'react';
import DropdownLink from './DropdownLink';
import ProductsItem from './ProductsItem';
import { MoveRight } from 'lucide-react';

const ProductsDropdown: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const closeTimeout = useRef<NodeJS.Timeout | null>(null);

    const dropdownRef = useRef<HTMLDivElement>(null);
    const triggerRef = useRef<HTMLDivElement>(null);

    const handleMouseEnter = () => {
        if (closeTimeout.current) {
            clearTimeout(closeTimeout.current);
            closeTimeout.current = null;
        }
        setIsOpen(true);
    };

    const handleMouseLeave = () => {
        closeTimeout.current = setTimeout(() => {
            setIsOpen(false);
        }, 1500);
    };

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            const target = event.target as Node;
            if (
                isOpen &&
                dropdownRef.current &&
                triggerRef.current &&
                !dropdownRef.current.contains(target) &&
                !triggerRef.current.contains(target)
            ) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen]);

    const SectionHeader = ({ title }: { title: string }) => (
        <div className="flex items-center justify-between my-4">
            <span className="text-lg font-medium">{title}</span>
            <a href="#" className="font-medium flex items-center gap-2 text-sm text-blue-600 group">
                View All
                <MoveRight
                    width={15}
                    className="transition-transform duration-200 ease-in-out group-hover:translate-x-1"
                />
            </a>
        </div>
    );

    const Divider = () => <div className="border-b border-gray-200 mb-4" />;

    return (
        <div className="relative">
            <div
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                ref={triggerRef}
                style={{ display: 'inline-block' }}
            >
                <DropdownLink label="Solutions" hasDropdown />
            </div>

            {isOpen && (
                <>
                    <div
                        className="fixed inset-0 z-40 pointer-events-none"
                       
                    />


                    <div
                        ref={dropdownRef}
                        className="fixed top-[130px] h-96 left-0 w-screen bg-white shadow-lg rounded p-4 z-50 overflow-y-auto"
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                    >
                        <div className="mx-auto max-w-10/12 grid grid-cols-4 gap-8">

                            <div className="col-span-1">
                                <SectionHeader title="Products" />
                                <Divider />
                                <ProductsItem
                                    href="/products/invoice"
                                    imageSrc="/productsdropdown/invoice.png"
                                    title="Invoice Payment"
                                    description="Pay vendors faster and safer"
                                    imageWidth={30}
                                    imageHeight={30}
                                    imageClassName="object-contain mr-1"
                                />
                                <ProductsItem
                                    href="/products/banking"
                                    imageSrc="/productsdropdown/banking.png"
                                    title="Banking Product"
                                    description="Bank smarter with up to 4.36%"
                                    imageWidth={30}
                                    imageHeight={36}
                                    imageClassName="object-contain"
                                />
                                <ProductsItem
                                    href="/products/accounting"
                                    imageSrc="/productsdropdown/invoice.png"
                                    title="Accounting Outsourcing"
                                    description="Simplify close and earn rewards"
                                    imageWidth={30}
                                    imageHeight={28}
                                    imageClassName="object-contain mr-1"
                                />
                            </div>

                            <div className="col-span-1">
                                <SectionHeader title="Connect with Bankbooker" />
                                <Divider />
                                <ProductsItem
                                    href="/contact/agent"
                                    imageSrc="/productsdropdown/talk.png"
                                    title="Talk with agent"
                                    description="Get free consultancy"
                                    imageWidth={30}
                                    imageHeight={30}
                                    imageClassName="object-contain"
                                />
                                <ProductsItem
                                    href="/contact/chat"
                                    imageSrc="/productsdropdown/chat.png"
                                    title="Chat with us"
                                    description="Connect with support team"
                                    imageWidth={30}
                                    imageHeight={30}
                                />
                                <ProductsItem
                                    href="/contact/telegram"
                                    imageSrc="/productsdropdown/telegram.png"
                                    title="Telegram Community"
                                    description="Benefit from privileges"
                                    imageWidth={30}
                                    imageHeight={30}
                                    imageClassName="mr-1"
                                />
                            </div>

                            <div className="col-span-1">
                                <SectionHeader title="Resource Center" />
                                <Divider />
                                <ProductsItem
                                    href="/resources/blog"
                                    imageSrc="/productsdropdown/blog.png"
                                    title="Blog"
                                    description="Get news and insights"
                                    imageWidth={30}
                                    imageHeight={30}
                                />
                                <ProductsItem
                                    href="/resources/reports"
                                    imageSrc="/productsdropdown/report.png"
                                    title="Exclusive reports"
                                    description="Unlock research and guides"
                                    imageWidth={30}
                                    imageHeight={30}
                                />
                                <ProductsItem
                                    href="/resources/customers"
                                    imageSrc="/productsdropdown/customer.png"
                                    title="Customer stories"
                                    description="Learn from the best"
                                    imageWidth={30}
                                    imageHeight={30}
                                />
                            </div>

                            <div className="col-span-1 bg-gray-100 h-full rounded-lg py-0 px-2">
                                <div className="flex justify-center mb-2 mt-4">
                                    <div className="text-lg font-medium text-center">Best Offer</div>
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
