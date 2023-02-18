import React from "react"

function Form(props) {
  //Функция отправки формы
  const handleSubmit = () => {
    console.log("Форма отправилась")
  }

  return (
    <>
      {/* Создаётся форма с дочерними элементами */}
      <form className="form-wrapper" onSubmit={handleSubmit}>
        {props.children}
      </form>
    </>
  )
}

export default Form
