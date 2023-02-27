import React from "react"

function Button({ type, color, size, variant }) {
  return (
    <div>
      <button
        type={type}
        className={`btn btn-color_${color} btn-size_${size} btn-variant_${variant}`}
      >
        Нажать
      </button>
    </div>
  )
}

export default Button
