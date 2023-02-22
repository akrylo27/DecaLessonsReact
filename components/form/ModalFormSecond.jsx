import React, { useState } from "react"
import Label from "./Label"
import Input from "./Input"
import Button from "./Button"
import Closer from "./Closer"
import Checkbox from "./Checkbox"

function ModalFormSecond({ color, label, value }) {
  const [isClose, setIsClose] = useState(false)
  const [isValue, setIsValue] = useState(value)
  const [checked, setChecked] = useState(true)

  const handleCloseForm = () => {
    setIsClose({ isClose })
  }

  const handleChange = (event) => {
    console.log(event.target.value)
    setIsValue(event.target.value)
  }

  const handleChecked = (event) => {
    console.log(event.target.value)
    setChecked(!checked)
  }

  return !isClose ? (
    <div className="form-wrapper">
      <Closer close={handleCloseForm} />
      <div>
        <Label htmlFor={label} value={label} fz={"xg"} color={color} />
      </div>
      <div>
        <Input
          type={"text"}
          name={"text"}
          placeholder={"Type something..."}
          color={color}
          variant={"outlined"}
          size={"xg"}
          value={isValue}
          onChange={handleChange}
        />
        <Input
          type={"text"}
          name={"text"}
          placeholder={"Type something..."}
          color={color}
          variant={"outlined"}
          size={"lg"}
          value={isValue}
          onChange={handleChange}
        />
        <Input
          type={"text"}
          name={"text"}
          placeholder={"Type something..."}
          color={color}
          variant={"outlined"}
          size={"md"}
          value={isValue}
          onChange={handleChange}
        />
        <Input
          type={"text"}
          name={"text"}
          placeholder={"Type something..."}
          color={color}
          variant={"outlined"}
          size={"sm"}
          value={isValue}
          onChange={handleChange}
        />
      </div>
      <div>
        <Checkbox
          type={"checkbox"}
          id={"checkbox"}
          color="success"
          variant={"outlined"}
          size={"xg"}
          checked={checked}
          onChange={handleChecked}
        />
        <Checkbox
          type={"checkbox"}
          id={"checkbox"}
          color="primary"
          variant={"outlined"}
          size={"lg"}
          checked={checked}
          onChange={handleChecked}
        />
        <Checkbox
          type={"checkbox"}
          id={"checkbox"}
          color="info"
          variant={"outlined"}
          size={"md"}
          checked={checked}
          onChange={handleChecked}
        />
        <Checkbox
          type={"checkbox"}
          id={"checkbox"}
          color="warning"
          variant={"outlined"}
          size={"sm"}
          checked={checked}
          onChange={handleChecked}
        />
      </div>
      <div>
        <Button color={color} variant={"outlined"} size={"xg"} />
        <Button color={color} variant={"outlined"} size={"lg"} />
        <Button color={color} variant={"outlined"} size={"md"} />
        <Button color={color} variant={"outlined"} size={"sm"} />
      </div>
    </div>
  ) : (
    console.log("Нет цвета или скрыто")
  )
}

export default ModalFormSecond
