// components/ComponentSelect.js
import React, { useContext } from "react";
import Image from "next/image";
import ModalContext from "@/context/ModalContext";

const ComponentSelect = ({
  src,
  title,
  desc,
  endpoint,
  updateSelection,
  componentType,
  isActive,
  price,
}) => {
  const { openModal } = useContext(ModalContext);
  const handleClick = () => {
    openModal({
      title,
      endpoint,
      updateSelection: (component) => updateSelection(componentType, component),
    });
  };

  const extractDimendionsFromURL = (url) => {

    const dimensions = url.match(/(\d{2,4})x(\d{2,4})/);
    if (dimensions) {
      return {
        width: dimensions[1],
        height: dimensions[2],
      };
    }
    return null;
  };

  return (
    <div
      onClick={handleClick}
      className={`${
        isActive && "ring-1"
      } cursor-pointer relative w-full text-white ring-white rounded-lg group bg-white/10 hover:bg-white/15 transition flex gap-5 p-3`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className={`${
          isActive ? "block" : "hidden"
        } size-4 absolute top-1 right-1`}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
        />
      </svg>

      <div className="p-2 bg-white rounded-lg aspect-square grid place-content-center">
        <Image
          src={src}
          width={extractDimendionsFromURL(src)?.width || 300}
          height={extractDimendionsFromURL(src)?.height || 300}
          alt={title}
          className="max-h-full"
        />
      </div>
      <div className="flex w-full items-center justify-between">
        <div className="flex flex-col">
          <h4 className="text-2xl font-bold h-[0.9em] capitalize">{title}</h4>
          <p className="leading-[0.85em] mt-2">{desc}</p>
        </div>
        <p className="text-lg font-bold">${price.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default ComponentSelect;
