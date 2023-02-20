import React from "react"

function Closer({ close }) {
  return (
    <div
      className="form-close_button"
      onClick={(e) => e.currentTarget.value === e.target.value && close()}
    >
      <span className="form-close_one"></span>
      <span className="form-close_two"></span>
    </div>
  )
}

export default Closer
