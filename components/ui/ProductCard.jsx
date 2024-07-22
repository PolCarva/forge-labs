import Image from "next/image";
import React from "react";

const ProductCard = ({ src, title, text }) => {
  return (
    <div className="p-5">
      <Image src={src} width={293} height={291.02} alt={`${title} Image`} />
      <h3 className="text-4xl font-bold">{title}</h3>
      <p className=" line-clamp-4 mt-3 text-lg">{text}</p>
    </div>
  );
};

export default ProductCard;
