import Image from "next/image";
import React from "react";

const ComponentSelect = ({src, title, desc}) => {
  return (
    <div className="w-full text-white rounded-lg bg-tertiary flex gap-5 px-5 py-3">
      <Image
        src={src}
        width={100}
        height={58}
        alt={title}
      />
      <div>
        <h4 className="text-2xl  font-bold capitalize">{title}</h4>
        <p>{desc}</p>
      </div>
    </div>
  );
};

export default ComponentSelect;
