"use client";
import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProductsItem from "./ProductsItem";
import { MoveRight, ChevronDown } from "lucide-react";

type ProductsDropdownProps = {
  bannerOpen: boolean;
};

const dropdownVariants = {
  hidden: { opacity: 0, y: -10 },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -10 },
};

const ProductsDropdown: React.FC<ProductsDropdownProps> = ({ bannerOpen }) => {
  const [isOpen, setIsOpen] = useState(false);
  const closeTimeout = useRef<NodeJS.Timeout | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

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
    }, 500);
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

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  const SectionHeader = ({ title }: { title: string }) => (
    <div className="flex items-center justify-between my-4">
      <span className="text-lg font-medium">{title}</span>
      <a
        href="#"
        className="font-medium flex items-center gap-2 text-sm text-blue-600 group"
      >
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
    <div
      className="relative inline-block"
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
    >
      <button
        ref={triggerRef}
        className="flex items-center font-medium text-black cursor-pointer select-none transition-colors duration-300 group"
        type="button"
        aria-haspopup="true"
        aria-expanded={isOpen}
      >
        Products
        <ChevronDown
          size={20}
          className={`ml-1 transition-transform duration-300 ease-in-out ${
            isOpen ? "rotate-180 text-blue-700" : ""
          }`}
        />
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop for outside click capture */}
            <div className="fixed inset-0 z-30" aria-hidden="true" />

            {/* Dropdown menu with animation */}
            <motion.div
              ref={dropdownRef}
              className={`fixed left-0 w-screen ${
                bannerOpen ? "top-[80px]" : "top-[86px]"
              } bg-white shadow-lg rounded p-6 z-40 overflow-y-auto`}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              style={{ maxHeight: "24rem" }}
              variants={dropdownVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{ duration: 0.25, ease: "easeInOut" }}
            >
              <div className="mx-auto max-w-10/12 grid grid-cols-4 gap-8">
                {/* Products Column */}
                <div className="col-span-1">
                  <SectionHeader title="Products" />
                  <Divider />
                  {[{
                    href: "/products/invoice",
                    imageSrc: "/productsdropdown/invoice.png",
                    title: "Invoice Payment",
                    description: "Pay vendors faster and safer",
                    imageWidth: 30,
                    imageHeight: 30,
                    imageClassName: "object-contain mr-1"
                  },{
                    href: "/products/banking",
                    imageSrc: "/productsdropdown/banking.png",
                    title: "Banking Product",
                    description: "Bank smarter with up to 4.36%",
                    imageWidth: 30,
                    imageHeight: 36,
                    imageClassName: "object-contain"
                  },{
                    href: "/products/accounting",
                    imageSrc: "/productsdropdown/invoice.png",
                    title: "Accounting Outsourcing",
                    description: "Simplify close and earn rewards",
                    imageWidth: 30,
                    imageHeight: 28,
                    imageClassName: "object-contain mr-1"
                  }].map((item, i) => (
                    <div
                      key={i}
                      className="transition-all duration-300 hover:scale-[1.03] hover:-translate-y-[2px] ease-in-out"
                    >
                      <ProductsItem {...item} />
                    </div>
                  ))}
                </div>

                {/* Connect with Bankbooker Column */}
                <div className="col-span-1">
                  <SectionHeader title="Connect with Bankbooker" />
                  <Divider />
                  {[{
                    href: "/contact/agent",
                    imageSrc: "/productsdropdown/talk.png",
                    title: "Talk with agent",
                    description: "Get free consultancy",
                    imageWidth: 30,
                    imageHeight: 30,
                    imageClassName: "object-contain"
                  },{
                    href: "/contact/chat",
                    imageSrc: "/productsdropdown/chat.png",
                    title: "Chat with us",
                    description: "Connect with support team",
                    imageWidth: 30,
                    imageHeight: 30
                  },{
                    href: "/contact/telegram",
                    imageSrc: "/productsdropdown/telegram.png",
                    title: "Telegram Community",
                    description: "Benefit from privileges",
                    imageWidth: 30,
                    imageHeight: 30,
                    imageClassName: "mr-1"
                  }].map((item, i) => (
                    <div
                      key={i}
                      className="transition-all duration-300 hover:scale-[1.03] hover:-translate-y-[2px] ease-in-out"
                    >
                      <ProductsItem {...item} />
                    </div>
                  ))}
                </div>

                {/* Resource Center Column */}
                <div className="col-span-1">
                  <SectionHeader title="Resource Center" />
                  <Divider />
                  {[{
                    href: "/resources/blog",
                    imageSrc: "/productsdropdown/blog.png",
                    title: "Blog",
                    description: "Get news and insights",
                    imageWidth: 30,
                    imageHeight: 30
                  },{
                    href: "/resources/reports",
                    imageSrc: "/productsdropdown/report.png",
                    title: "Exclusive reports",
                    description: "Unlock research and guides",
                    imageWidth: 30,
                    imageHeight: 30
                  },{
                    href: "/resources/customers",
                    imageSrc: "/productsdropdown/customer.png",
                    title: "Customer stories",
                    description: "Learn from the best",
                    imageWidth: 30,
                    imageHeight: 30
                  }].map((item, i) => (
                    <div
                      key={i}
                      className="transition-all duration-300 hover:scale-[1.03] hover:-translate-y-[2px] ease-in-out"
                    >
                      <ProductsItem {...item} />
                    </div>
                  ))}
                </div>

                {/* Best Offer Column */}
                <div className="col-span-1 bg-gray-100 h-full rounded-lg py-0 px-2">
                  <div className="flex justify-center mb-2 mt-4">
                    <div className="text-lg font-medium text-center">Best Offer</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ProductsDropdown;
