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
          name={"firstName"}
          placeholder={"Type something..."}
          color={"success"}
          variant={"outlined"}
          size={"xg"}
        />
        <Input
          type={"email"}
          name={"secondName"}
          placeholder={"Type email..."}
          color={"primary"}
          variant={"outlined"}
          size={"lg"}
        />
        <Input
          type={"password"}
          name={"thirdName"}
          placeholder={"Type password..."}
          color={"primary"}
          variant={"outlined"}
          size={"lg"}
        />
        <Input
          type={"text"}
          name={"text"}
          placeholder={"Warning"}
          color={"danger"}
          variant={"outlined"}
          size={"sm"}
        />
        <div>
          <Input
            type={"checkbox"}
            name={"checkbox"}
            color={"info"}
            variant={"outlined"}
            size={"xs"}
          />
          <Input
            type={"checkbox"}
            name={"checkbox"}
            color={"info"}
            variant={"outlined"}
            size={"xs"}
          />
          <Input
            type={"radio"}
            name={"radio"}
            color={"info"}
            variant={"outlined"}
            size={"xs"}
          />
          <Input
            type={"radio"}
            name={"radio"}
            color={"info"}
            variant={"outlined"}
            size={"xs"}
          />
          <Input
            type={"range"}
            name={"range"}
            color={"info"}
            variant={"outlined"}
            size={"range"}
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
