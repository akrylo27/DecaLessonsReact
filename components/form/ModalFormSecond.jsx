import React, { useState } from "react"
import Label from "./Label"
import Input from "./Input"
import Button from "./Button"

function ModalFormSecond({ status, value, checked }) {
  const [isValue, setIsValue] = useState("")
  const [isChecked, setIsChecked] = useState(false)

  const handleChecked = () => {
    setIsChecked(!isChecked)
  }

  const handleChange = (event) => {
    console.log(event.target.value)
    setIsValue(event.target.value)
  }

  return status !== "" ? (
    <div className="form-wrapper">
      {/* //* Labels */}
      <div>
        <Label htmlFor={value} value={value} fz={"xg"} color={status} />
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
      </div>

      {/* //* Buttons */}
      <div>
        <Button
          isClick={true}
          color={status}
          variant={"outlined"}
          size={"xg"}
        />
      </div>

      <div>
        <Input
          type={"checkbox"}
          name={"checkbox"}
          color={status}
          variant={"outlined"}
          size={"xs"}
          value={isValue}
          onChange={handleChange}
          checked={checked}
          onChecked={handleChecked}
        />
        <Input
          type={"checkbox"}
          name={"checkbox"}
          color={status}
          variant={"outlined"}
          size={"xs"}
          value={isValue}
          onChange={handleChange}
          checked={checked}
          onChecked={handleChecked}
        />
        <Input
          type={"radio"}
          name={"radio"}
          color={status}
          variant={"outlined"}
          size={"xs"}
          value={isValue}
          onChange={handleChange}
          checked={checked}
          onChecked={handleChecked}
        />
        <Input
          type={"radio"}
          name={"radio"}
          color={status}
          variant={"outlined"}
          size={"xs"}
          value={isValue}
          onChange={handleChange}
          checked={checked}
          onChecked={handleChecked}
        />
        <Input
          type={"range"}
          name={"range"}
          color={status}
          variant={"outlined"}
          size={"range"}
          value={isValue}
          onChange={handleChange}
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
    console.log("Нет цвета")
  )
}

export default ModalFormSecond
