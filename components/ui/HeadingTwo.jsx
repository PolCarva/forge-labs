import React from "react";

const HeadingTwo = ({ children, centered, className="" }) => {
  return <h2 className={`${className} ${centered && "text-center"} font-bold text-6xl`}>{children}</h2>;
};

export default HeadingTwo;
