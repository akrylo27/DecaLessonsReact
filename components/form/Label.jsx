import React from "react"

function Label({ value, color, fz }) {
  return (
    <>
      <label className={`label label-color_${color} label-fz_${fz}`}>
        {value}
      </label>
    </>
  )
}

export default Label
