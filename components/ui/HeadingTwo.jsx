import React from "react";

const HeadingTwo = ({ children, centered }) => {
  return <h2 className={`${centered && "text-center"} font-bold text-6xl`}>{children}</h2>;
};

export default HeadingTwo;
