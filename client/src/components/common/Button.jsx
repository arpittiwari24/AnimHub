import React from "react";

const Button = ({
  children,

  disabled,
  label,
  onClick,
  color = "#007bff",
  primary = true,
}) => {
  const buttonStyle = {};

  return (
    <button
      className={`border border-6 ${primary ? "bg-[#FFA31A]" : "bg-[#007bff]"}`}
      style={buttonStyle}
      onClick={onClick}
      disabled={disabled}
    >
      {label || children}
    </button>
  );
};

export default Button;