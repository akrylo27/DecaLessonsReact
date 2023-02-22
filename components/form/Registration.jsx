import React, { useState } from "react"
import Input from "./Input"
import Checkbox from "./Checkbox"
import Button from "./Button"
import Label from "./Label"

function Registration({ value, type }) {
  const [isValue, setIsValue] = useState(value)
  const [checked, setChecked] = useState(true)

  const handleChange = (event) => {
    console.log(event.target.value)
    setIsValue(event.target.value)
  }

  const handleChecked = (event) => {
    console.log(event.target.value)
    setChecked(!checked)
  }
  return (
    <div className="form-wrapper">
      {/* Label */}
      <Label color={"success"} text={"Успешно"} size={"xg"} />
      <Label color={"primary"} text={"Обязательно"} size={"lg"} />
      <Label color={"info"} text={"Информация"} size={"md"} />
      <Label color={"warning"} text={"Предупреждение"} size={"sm"} />

      {/* Input */}
      <Input
        type={type}
        placeholder={"Введите текст"}
        color={"success"}
        size={"xg"}
        variant={"outlined"}
        value={isValue}
        onChange={handleChange}
      />
      <Input
        type={type}
        placeholder={"Введите текст"}
        color={"primary"}
        size={"lg"}
        variant={"outlined"}
        value={isValue}
        onChange={handleChange}
      />
      <Input
        type={type}
        placeholder={"Введите текст"}
        color={"info"}
        size={"md"}
        variant={"outlined"}
        value={isValue}
        onChange={handleChange}
      />
      <Input
        type={type}
        placeholder={"Введите текст"}
        color={"warning"}
        size={"sm"}
        variant={"outlined"}
        value={isValue}
        onChange={handleChange}
      />

      {/* Checkbox */}
      <Checkbox
        type={"checkbox"}
        color={"success"}
        checked={checked}
        onChange={handleChecked}
      />
      <Checkbox type={"radio"} color={"info"} />

      {/* Button */}
      <Button
        type={"submit"}
        color={"success"}
        size={"xg"}
        variant={"outlined"}
      />
      <Button
        type={"submit"}
        color={"primary"}
        size={"lg"}
        variant={"outlined"}
      />
      <Button type={"submit"} color={"info"} size={"md"} variant={"outlined"} />
      <Button
        type={"submit"}
        color={"warning"}
        size={"sm"}
        variant={"outlined"}
      />
    </div>
  )
}

export default Registration
