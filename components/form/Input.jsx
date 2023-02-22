import React from "react"

function Input({ type, placeholder, size, color, variant }) {
  return (
    <div>
      <input
        type={type}
        name="text"
        id="text"
        placeholder={placeholder}
        className={`input input-color_${color} input-size_${size} input-variant_${variant}`}
      />
    </div>
  )
}

export default Input
