import React, { useState } from "react"
import Label from "./Label"
import Input from "./Input"
import Button from "./Button"
import Closer from "./Closer"

function Form(props) {
  return (
    <form className="form-wrapper">
      {/* Создаётся форма с дочерними элементами */}
      <Closer />
      <Label htmlFor={"firstName"} value={"лейбл1"} />
      <Input type={"text"} name={"firstName"} placeholder={"инпут1"} />
      <Label htmlFor={"secondName"} value={"лейбл2"} />
      <Input type={"text"} name={"secondName"} placeholder={"инпут2"} />
      <Label htmlFor={"thirdName"} value={"лейбл3"} />
      <Input type={"text"} name={"thirdName"} placeholder={"инпут3"} />
      <Button isClick={true} />
    </form>
  )
}

export default Form

/* Закрыть модальное окно
У формы должно быть состояние , когда она открыта и когда закрыта
По умолчанию значение true
Надо создать функцию которая по клику изменит значение на false и закроет форму и сделает display:none у нужного класса

*/
