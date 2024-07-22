import Link from "next/link";
import React from "react";

const Button = ({ text, scroll, href, type = "button", size = "md" }) => {
  const typeClasses = {
    button: "bg-primary hover:bg-primary-hover py-3 px-6",
    link: "after-link-line px-4 py-2",
  };

  const sizeClasses = {
    sm: "text-sm",
    md: "text-base",
    lg: "text-lg",
    xl: "text-xl",
  };

  return (
    <Link
      href={href}
      scroll={scroll}
      className={`${typeClasses[type]} ${sizeClasses[size]} font-bold text-center transition rounded`}
    >
      {text}
    </Link>
  );
};

export default Button;
