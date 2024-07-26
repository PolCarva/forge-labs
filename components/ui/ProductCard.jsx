import Image from "next/image";
import React from "react";

const ProductCard = ({ src, title, text, isInverted }) => {
  return (
    <div className="p-5">
      <Image
        src={src}
        width={293}
        height={291}
        alt={`${title} Image`}
        className={`${
          isInverted ? "transform scale-x-[-1]" : ""
        } drop-shadow-lg mask-image`}
      />
      <h3 className="text-4xl mt-5 text-center font-bold">{title}</h3>
      <p className=" line-clamp-4 mt-3 text-lg">{text}</p>
    </div>
  );
};

export default ProductCard;
