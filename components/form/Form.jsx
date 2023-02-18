import React from "react"

function Form(props) {
  return (
    <div>
      <form>{props.children}</form>
    </div>
  )
}

export default Form
