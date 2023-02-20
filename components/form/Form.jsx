import React, { useState } from "react"

function Form(props) {
  //Функция отправки формы
  const handleFormSubmit = () => {
    console.log("Форма отправилась")
  }

  return (
    <>
      {/* Создаётся форма с дочерними элементами */}
      <form className="form-wrapper" onSubmit={handleFormSubmit}>
        {props.children}
      </form>
    </>
  )
}

export default Form
