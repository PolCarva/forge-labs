import Link from "next/link";
import React from "react";

const Button = ({ text, href, type = "button" }) => {
  const typeClasses = {
    button: "bg-primary hover:bg-primary-hover py-3 px-6",
    link: "after-link-line px-4 py-2",
  };

  return (
    <Link
      href={href}
      className={`${typeClasses[type]} text-black font-bold text-center transition rounded`}
    >
      {text}
    </Link>
  );
};

export default Button;
