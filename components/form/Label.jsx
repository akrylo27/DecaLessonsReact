import React from "react"

function Label({ color, size, text }) {
  return (
    <div>
      <label
        className={`label label-color_${color}
      label-fz_${size}`}
      >
        {text}
      </label>
    </div>
  )
}

export default Label
