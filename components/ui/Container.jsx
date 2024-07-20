import React from "react";

const Container = ({ children }) => {
  return <div className="mx-auto container px-5 max-w-screen-xl">{children}</div>;
};

export default Container;
