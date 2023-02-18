import React from "react"

function Input({ type, name, placeholder }) {
  return (
    <>
      <input type={type} name={name} placeholder={placeholder} />
    </>
  )
}

export default Input
