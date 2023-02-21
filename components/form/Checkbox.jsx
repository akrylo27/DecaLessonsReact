import React, { useState } from "react"

function Checkbox({ color, label, variant, size, type, onChange }) {
  const [checked, setChecked] = useState(true)
  const handleChecked = () => {
    setChecked(!checked)
  }
  return (
    <div>
      <input
        color={color}
        type={type}
        label={label}
        className={`checkbox checkbox-color_${color} checkbox-variant_${variant}  checkbox-size_${size}`}
        checked={checked}
        onChange={handleChecked}
      />
    </div>
  )
}

export default Checkbox
