import React from "react"

function Form(props) {
  //Функция отправки формы
  const handleSubmit = () => {
    console.log("Форма отправилась")
  }

  return (
    <>
      {/* Создаётся форма и передаёт туда свои дочерние элементы */}
      <form className="form-wrapper" onSubmit={handleSubmit}>
        {props.children}
      </form>
    </>
  )
}

export default Form
