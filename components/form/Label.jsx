import React from "react"

function Label({ value, color, fz }) {
  return (
    <>
      {/* Дочерний элемент label принимает либо пропс либо выведет пустую строку */}
      <label className={`label label-color_${color} label-fz_${fz}`}>
        {value}
      </label>
    </>
  )
}

export default Label
