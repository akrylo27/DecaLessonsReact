import React, { useState } from "react"
import Label from "./Label"
import Input from "./Input"
import Button from "./Button"
import Closer from "./Closer"

function ModalForm(props) {
  const [isClose, setIsClose] = useState(false)
  const [value, setValue] = useState("")
  const [checked, setChecked] = useState(false)
  //? const [isRadioChecked, setIsRadioCheked] = useState(false)

  const handleChecked = () => {
    setChecked(!checked)
  }

  const handleChange = (event) => {
    console.log(event.target.value)
    setValue(event.target.value)
  }

  const handleCloseForm = () => {
    setIsClose({ isClose })
  }

  return !isClose ? (
    <div className="form-wrapper">
      {/* //*Создаётся форма с дочерними элементами */}
      <Closer close={handleCloseForm} />

      {/* //* Labels */}
      <div>
        <Label
          htmlFor={"firstName"}
          value={"Label"}
          fz={"lg"}
          color={"success"}
        />
        <Label
          htmlFor={"firstName"}
          value={"Label"}
          fz={"md"}
          color={"primary"}
        />
        <Label htmlFor={"firstName"} value={"Label"} fz={"sm"} color={"info"} />
        <Label
          htmlFor={"firstName"}
          value={"Label"}
          fz={"sm"}
          color={"danger"}
        />
      </div>

      {/* //* Inputs */}
      <div>
        <Input
          type={"text"}
          name={"text"}
          placeholder={"Type something..."}
          color={"success"}
          variant={"outlined"}
          size={"xg"}
          value={value}
          onChange={handleChange}
        />
        <Input
          type={"email"}
          name={"email"}
          placeholder={"Type email..."}
          color={"primary"}
          variant={"outlined"}
          size={"lg"}
          value={value}
          onChange={handleChange}
        />
        <Input
          type={"password"}
          name={"password"}
          placeholder={"Type password..."}
          color={"primary"}
          variant={"outlined"}
          size={"lg"}
          value={value}
          onChange={handleChange}
        />
        <Input
          type={"text"}
          name={"text"}
          placeholder={"Warning"}
          color={"danger"}
          variant={"outlined"}
          size={"sm"}
          value={value}
          onChange={handleChange}
        />
      </div>

      <div>
        <Input
          type={"checkbox"}
          name={"checkbox"}
          checked={checked}
          onChecked={handleChecked}
          color={"info"}
          variant={"outlined"}
          size={"xs"}
          value={value}
          onChange={handleChange}
        />
        <Input
          type={"checkbox"}
          name={"checkbox"}
          checked={checked}
          onChecked={handleChecked}
          color={"info"}
          variant={"outlined"}
          size={"xs"}
          value={value}
          onChange={handleChange}
        />
        <Input
          type={"radio"}
          name={"radio"}
          color={"info"}
          checked={checked}
          onChecked={handleChecked}
          variant={"outlined"}
          size={"xs"}
          value={value}
          onChange={handleChange}
        />
        <Input
          type={"radio"}
          name={"radio"}
          checked={checked}
          onChecked={handleChecked}
          color={"info"}
          variant={"outlined"}
          size={"xs"}
          value={value}
          onChange={handleChange}
        />
        <Input
          type={"range"}
          name={"range"}
          color={"info"}
          variant={"outlined"}
          size={"range"}
          value={value}
          onChange={handleChange}
        />
      </div>

      <div>
        <Input
          type={"date"}
          name={"date"}
          color={"info"}
          variant={"outlined"}
          size={"md"}
        />

        <Input
          type={"file"}
          name={"file"}
          color={"info"}
          variant={"outlined"}
          size={"sm"}
        />
      </div>

      {/* //* Buttons */}
      <div>
        <Button
          isClick={true}
          color={"success"}
          variant={"outlined"}
          size={"xg"}
        />
        <Button
          isClick={true}
          color={"primary"}
          variant={"outlined"}
          size={"lg"}
        />
        <Button
          isClick={true}
          color={"info"}
          variant={"outlined"}
          size={"md"}
        />
        <Button
          isClick={true}
          color={"danger"}
          variant={"outlined"}
          size={"sm"}
        />
      </div>
    </div>
  ) : (
    console.log("Скрыто")
  )
}

export default ModalForm
