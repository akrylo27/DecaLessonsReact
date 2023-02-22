import React from "react"

function Checkbox({ type, checked, onChange }) {
  return (
    <div>
      <input
        type={type}
        name="checkbox"
        id="checkbox"
        checked={checked}
        onChange={onChange}
      />
    </div>
  )
}

export default Checkbox
