import React from "react"
import Input from "./Input"
import Password from "./Password"
import Email from "./Email"
import Checkbox from "./Checkbox"

function Registration(props) {
  return (
    <div className="form-wrapper">
      <Input type={"text"} />
      <Password type={"password"} />
      <Email type={"email"} />
      <Checkbox type={"checkbox"} />
    </div>
  )
}

export default Registration
