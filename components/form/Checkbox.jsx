import React from "react"

function Checkbox({ type, checked, onChange }) {
  return (
    <div>
      <input
        type={type}
        name="checkbox"
        checked={checked}
        onChange={onChange}
        className={"checkbox-position"}
      />
    </div>
  )
}

export default Checkbox
