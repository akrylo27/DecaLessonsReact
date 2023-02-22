import React from "react"

function Input({ type, placeholder }) {
  return (
    <div>
      <input type={type} name="text" id="text" placeholder={placeholder} />
    </div>
  )
}

export default Input
