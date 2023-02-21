import React, { useState } from "react"
import Label from "./Label"
import Input from "./Input"
import Button from "./Button"
import Closer from "./Closer"
import Checkbox from "./Checkbox"

function ModalFormSecond({ color, label, value }) {
  const [isClose, setIsClose] = useState(false)
  const [isValue, setIsValue] = useState(value)

  const handleCloseForm = () => {
    setIsClose({ isClose })
  }

  const handleChange = (event) => {
    console.log(event.target.value)
    setIsValue(event.target.value)
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
          color="success"
          label="label"
          variant={"outlined"}
          size={"xg"}
        />
        <Checkbox
          type={"checkbox"}
          color="primary"
          label="label"
          variant={"outlined"}
          size={"lg"}
        />
        <Checkbox
          type={"checkbox"}
          color="info"
          label="label"
          variant={"outlined"}
          size={"md"}
        />
        <Checkbox
          type={"checkbox"}
          color="warning"
          label="label"
          variant={"outlined"}
          size={"sm"}
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
