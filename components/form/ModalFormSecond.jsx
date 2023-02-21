import React, { useState } from "react"
import Label from "./Label"
import Input from "./Input"
import Button from "./Button"
import Closer from "./Closer"

function ModalFormSecond({ status, label, value }) {
  const [isClose, setIsClose] = useState(false)
  const [isValue, setIsValue] = useState(value)
  const [checked, setChecked] = useState(true)
  const [isRadio, setIsRadio] = useState("1")

  const handleCloseForm = () => {
    setIsClose({ isClose })
  }

  const handleChange = (event) => {
    console.log(event.target.value)
    setIsValue(event.target.value)
  }

  const changeRadio = (event) => {
    setIsRadio(event.target.value)
  }
  return !isClose ? (
    <div className="form-wrapper">
      {/* //* Labels */}
      <Closer close={handleCloseForm} />
      <div>
        <Label htmlFor={label} value={label} fz={"xg"} color={status} />
      </div>
      {/* //* Inputs */}
      <div>
        <Input
          type={"text"}
          name={"text"}
          placeholder={"Type something..."}
          color={status}
          variant={"outlined"}
          size={"xg"}
          value={isValue}
          onChange={handleChange}
        />
        <Input
          type={"text"}
          name={"text"}
          placeholder={"Type something..."}
          color={status}
          variant={"outlined"}
          size={"lg"}
          value={isValue}
          onChange={handleChange}
        />
        <Input
          type={"text"}
          name={"text"}
          placeholder={"Type something..."}
          color={status}
          variant={"outlined"}
          size={"md"}
          value={isValue}
          onChange={handleChange}
        />
        <Input
          type={"text"}
          name={"text"}
          placeholder={"Type something..."}
          color={status}
          variant={"outlined"}
          size={"sm"}
          value={isValue}
          onChange={handleChange}
        />
      </div>
      {/* //* Buttons */}
      <div>
        <Input
          type={"checkbox"}
          name={"checkbox"}
          color={status}
          variant={"outlined"}
          size={"xs"}
          checked={checked}
          onChange={() => {
            setChecked(!checked)
          }}
        />
        <Input
          type={"checkbox"}
          name={"checkbox"}
          color={status}
          variant={"outlined"}
          size={"xs"}
          checked={checked}
          onChange={() => {
            setChecked(!checked)
          }}
        />
        <Input
          type={"radio"}
          name={"radio1"}
          value={"1"}
          color={status}
          variant={"outlined"}
          size={"xs"}
          checked={isRadio}
          onChange={changeRadio}
        />
        <Input
          type={"radio"}
          name={"radio2"}
          value={"2"}
          color={status}
          variant={"outlined"}
          size={"xs"}
          checked={isRadio}
          onChange={changeRadio}
        />
        <Input
          type={"range"}
          name={"range"}
          color={status}
          variant={"outlined"}
          size={"range"}
        />
      </div>

      <div>
        <Input
          type={"date"}
          name={"date"}
          color={status}
          variant={"outlined"}
          size={"md"}
        />
      </div>

      {/* //* Buttons */}
      <div>
        <Button color={status} variant={"outlined"} size={"xg"} />
        <Button color={status} variant={"outlined"} size={"lg"} />
        <Button color={status} variant={"outlined"} size={"md"} />
        <Button color={status} variant={"outlined"} size={"sm"} />
      </div>
    </div>
  ) : (
    console.log("Нет цвета или скрыто")
  )
}

export default ModalFormSecond
