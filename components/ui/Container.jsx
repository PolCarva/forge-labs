import React from "react";

const Container = ({ children, className }) => {
  return <div className={`mx-auto container px-5 max-w-screen-xl ${className}`}>{children}</div>;
};

export default Container;
