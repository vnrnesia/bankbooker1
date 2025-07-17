"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

type MobileDropdownProductsFullProps = {
  onClose: () => void;
};

const products = [
  {
    href: "/products/invoice",
    title: "Invoice Payment",
    description: "Pay vendors faster and safer",
    imageSrc: "/productsdropdown/invoice.png",
    imageWidth: 30,
    imageHeight: 30,
    imageClassName: "object-contain mr-2",
  },
  {
    href: "/products/banking",
    title: "Banking Product",
    description: "Bank smarter with up to 4.36%",
    imageSrc: "/productsdropdown/banking.png",
    imageWidth: 30,
    imageHeight: 36,
    imageClassName: "object-contain mr-2",
  },
  {
    href: "/products/accounting",
    title: "Accounting Outsourcing",
    description: "Simplify close and earn rewards",
    imageSrc: "/productsdropdown/invoice.png",
    imageWidth: 30,
    imageHeight: 28,
    imageClassName: "object-contain mr-2",
  },
];

const connectWithBankbooker = [
  {
    href: "/contact/agent",
    title: "Talk with agent",
    description: "Get free consultancy",
    imageSrc: "/productsdropdown/talk.png",
    imageWidth: 30,
    imageHeight: 30,
    imageClassName: "object-contain mr-2",
  },
  {
    href: "/contact/chat",
    title: "Chat with us",
    description: "Connect with support team",
    imageSrc: "/productsdropdown/chat.png",
    imageWidth: 30,
    imageHeight: 30,
    imageClassName: "object-contain mr-2",
  },
  {
    href: "/contact/telegram",
    title: "Telegram Community",
    description: "Benefit from privileges",
    imageSrc: "/productsdropdown/telegram.png",
    imageWidth: 30,
    imageHeight: 30,
    imageClassName: "object-contain mr-2",
  },
];

const resourceCenter = [
  {
    href: "/resources/blog",
    title: "Blog",
    description: "Get news and insights",
    imageSrc: "/productsdropdown/blog.png",
    imageWidth: 30,
    imageHeight: 30,
    imageClassName: "object-contain mr-2",
  },
  {
    href: "/resources/reports",
    title: "Exclusive reports",
    description: "Unlock research and guides",
    imageSrc: "/productsdropdown/report.png",
    imageWidth: 30,
    imageHeight: 30,
    imageClassName: "object-contain mr-2",
  },
  {
    href: "/resources/customers",
    title: "Customer stories",
    description: "Learn from the best",
    imageSrc: "/productsdropdown/customer.png",
    imageWidth: 30,
    imageHeight: 30,
    imageClassName: "object-contain mr-2",
  },
];

const MobileDropdownProductsFull: React.FC<MobileDropdownProductsFullProps> = ({
  onClose,
}) => {
  const Section = ({
    title,
    items,
    scrollable = false,
  }: {
    title: string;
    items: {
      href: string;
      title: string;
      description: string;
      imageSrc: string;
      imageWidth: number;
      imageHeight: number;
      imageClassName?: string;
    }[];
    scrollable?: boolean;
  }) => (
    <section className="mb-6">
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <div
        className={`flex flex-col space-y-4 ${
          scrollable ? "max-h-48 overflow-y-auto pr-2" : ""
        }`}
      >
        {items.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="flex items-center text-black hover:text-blue-600"
            onClick={onClose}
          >
            <Image
              src={item.imageSrc}
              alt={item.title}
              width={item.imageWidth}
              height={item.imageHeight}
              className={item.imageClassName}
              unoptimized
            />
            <div>
              <div className="font-light">{item.title}</div>
              <div className="text-xs text-gray-600">{item.description}</div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );

  return (
    <div className="px-4 pb-6">
      <Section title="" items={products} scrollable={true} />
      <Section title="Connect with Bankbooker" items={connectWithBankbooker} />
      <Section title="Resource Center" items={resourceCenter} />
      <section className="bg-gray-100 rounded p-4">
        <h3 className="text-lg font-semibold text-center mb-2">Best Offer</h3>
      </section>
    </div>
  );
};

export default MobileDropdownProductsFull;
