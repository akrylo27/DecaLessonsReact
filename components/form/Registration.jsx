import React from "react"
import Input from "./Input"
import Checkbox from "./Checkbox"
import Button from "./Button"
import Label from "./Label"

function Registration(props) {
  return (
    <div className="form-wrapper">
      {/* Label */}
      <Label color={"success"} text={"Успешно"} size={"xg"} />
      <Label color={"primary"} text={"Обязательно"} size={"lg"} />
      <Label color={"info"} text={"Информация"} size={"md"} />
      <Label color={"warning"} text={"Предупреждение"} size={"sm"} />

      {/* Input */}
      <Input
        type={"text"}
        placeholder={"Введите текст"}
        color={"success"}
        size={"xg"}
        variant={"outlined"}
      />
      <Input
        type={"text"}
        placeholder={"Введите текст"}
        color={"primary"}
        size={"lg"}
        variant={"outlined"}
      />
      <Input
        type={"password"}
        placeholder={"Введите текст"}
        color={"info"}
        size={"md"}
        variant={"outlined"}
      />
      <Input
        type={"email"}
        placeholder={"Введите текст"}
        color={"warning"}
        size={"sm"}
        variant={"outlined"}
      />

      {/* Checkbox */}
      <Checkbox type={"checkbox"} color={"success"} />
      <Checkbox type={"checkbox"} color={"primary"} />
      <Checkbox type={"radio"} color={"info"} />
      <Checkbox type={"radio"} color={"warning"} />

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
