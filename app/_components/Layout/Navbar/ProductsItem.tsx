import React from "react";
import Image from "next/image";

type DropdownItemProps = {
  href?: string;
  imageSrc: string;
  title: string;
  description: string;
  imageWidth?: number;
  imageHeight?: number;
  imageClassName?: string;
};

const ProductsItem: React.FC<DropdownItemProps> = ({
  href = "#",
  imageSrc,
  title,
  description,
  imageWidth = 40,
  imageHeight = 30,
  imageClassName = "",
}) => {
  return (
    <a href={href} className="py-4 px-2 hover:bg-gray-100 rounded-2xl flex">
      <div className="w-[60px] h-[60px] mr-3 border border-gray-300 rounded-xl flex items-center justify-center">
        <Image
          src={imageSrc}
          alt={title}
          width={imageWidth}
          height={imageHeight}
          className={imageClassName}
        />
      </div>
      <div>
        <div className="font-medium">{title}</div>
        <div className="text-sm text-gray-500">{description}</div>
      </div>
    </a>
  );
};

export default ProductsItem;
