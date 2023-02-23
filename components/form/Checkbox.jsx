import React from "react"

function Checkbox({ type, checked, onChange, id }) {
  return (
    <div>
      <input
        type={type}
        name="checkbox"
        checked={checked}
        onChange={onChange}
        className={"checkbox-position"}
        id={id}
      />
    </div>
  )
}

export default Checkbox
