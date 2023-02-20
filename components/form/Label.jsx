import React from "react"

function Label({ value }) {
  return (
    <>
      {/* Дочерний элемент label принимает либо пропс либо выведет пустую строку */}
      <label className="label label-props">{value}</label>
    </>
  )
}

export default Label
