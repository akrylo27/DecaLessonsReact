import React from "react"

function Checkbox({ id, color, variant, size, type, checked, onChange }) {
  return (
    <div className="checkbox-wrapper">
      <>
        <input
          id={id}
          color={color}
          type={type}
          className={`checkbox checkbox-color_${color} checkbox-variant_${variant}  checkbox-size_${size}`}
          checked={checked}
          onChange={onChange}
        />
      </>
      <>
        <label htmlFor={id}>Выбери меня</label>
      </>
    </div>
  )
}

export default Checkbox
