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
      {/* Создаётся форма с дочерними элементами */}
      <Closer close={handleCloseForm} />

      {/* Labels */}
      {/*  <Label htmlFor={"firstName"} value={"лейбл1"} />
      <Label htmlFor={"secondName"} value={"лейбл2"} />
      <Label htmlFor={"thirdName"} value={"лейбл3"} /> */}

      {/* Inputs */}
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

      {/* Buttons */}
      <Button isClick={true} color={"success"} />
      <Button isClick={true} color={"primary"} />
      <Button isClick={true} color={"info"} />
    </div>
  ) : (
    console.log("loading")
  )
}

export default ModalForm

/* Закрыть модальное окно
У формы должно быть состояние , когда она открыта и когда закрыта
По умолчанию значение true
Надо создать функцию которая по клику изменит значение на false и закроет форму и сделает display:none у нужного класса

*/
