import React from "react"
import Input from "./Input"
/* import Password from "./Password"
import Email from "./Email" */
import Checkbox from "./Checkbox"
import Button from "./Button"
import Label from "./Label"

function Registration(props) {
  return (
    <div className="form-wrapper">
      {/* Label */}
      <Label color={"success"} size={"xg"} text={"Успешно"} />
      <Label color={"primary"} size={"lg"} text={"Обязательно"} />
      <Label color={"info"} size={"md"} text={"Информация"} />
      <Label color={"warning"} size={"sm"} text={"Ошибка"} />

      {/* Input */}
      <Input type={"text"} placeholder={"Введите текст"} />
      <Input type={"text"} placeholder={"Введите текст"} />
      <Input type={"password"} placeholder={"Введите текст"} />
      <Input type={"email"} placeholder={"Введите текст"} />

      {/* Checkbox */}
      <Checkbox type={"checkbox"} />
      <Checkbox type={"checkbox"} />
      <Checkbox type={"radio"} />
      <Checkbox type={"radio"} />

      {/* Button */}
      <Button type={"submit"} />
      <Button type={"submit"} />
      <Button type={"submit"} />
      <Button type={"submit"} />
    </div>
  )
}

export default Registration
