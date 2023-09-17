import React from "react";
const InputField = ({
  value,
  label,
  reference,
  name,
  placeholder,
  type,
  onChange,
  required,
  error = "",
}) => {
  return (
    <>
      <div>
        <input
          ref={reference}
          type={type}
          value={value}
          name={name}
          placeholder={placeholder}
          required={required}
          onChange={onChange}
        />
        {label && <label htmlFor={`${name}`}>{label}</label>}
        {error && <p>{error}</p>}
      </div>
    </>
  );
};

export default InputField;
