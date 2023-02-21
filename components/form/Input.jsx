import React from "react"

function Input({
  type,
  name,
  placeholder,
  color,
  variant,
  size,
  onChange,
  isValue,
}) {
  return (
    <>
      <input
        type={type}
        name={name}
        placeholder={placeholder || ""}
        className={`input input-color_${color} input-variant_${variant} input-size_${size} input-size_${type}`}
        onChange={onChange}
        value={isValue}
      />
    </>
  )
}

export default Input
