import React from "react";

const Button = ({
  padx,
  pady,
  children,
  disabled,
  label,
  onClick,
  fontSize,
  color = "#000",
  primary = true,
}) => {
  const buttonStyle = {
  };

  return (
    <button
      className={`${primary ? "bg-[#FFA31A]" : "bg-[#007bff]"}
      px-[${padx}] py-[${pady}] text-[${color}] font-[700] text-[${fontSize}] rounded-md`}
      style={buttonStyle}
      onClick={onClick}
      disabled={disabled}
    >
      {label || children}
    </button>
  );
};

export default Button;