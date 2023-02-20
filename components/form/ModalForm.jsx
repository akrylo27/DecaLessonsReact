import React, { useState } from "react"
import Label from "./Label"
import Input from "./Input"
import Button from "./Button"
import Closer from "./Closer"

function ModalForm(props) {
  const [isClose, setIsClose] = useState(false)

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
          name={"thirdName"}
          placeholder={"Type something..."}
          color={"success"}
          variant={"outlined"}
          size={"xg"}
        />
        <Input
          type={"text"}
          name={"thirdName"}
          placeholder={"Type something..."}
          color={"primary"}
          variant={"outlined"}
          size={"lg"}
        />
        <Input
          type={"text"}
          name={"thirdName"}
          placeholder={"Type something..."}
          color={"info"}
          variant={"outlined"}
          size={"md"}
        />
        <Input
          type={"text"}
          name={"thirdName"}
          placeholder={"Type something..."}
          color={"danger"}
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
