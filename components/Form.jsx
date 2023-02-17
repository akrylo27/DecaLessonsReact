import React, { useState } from "react"

function Form(props) {
  const [name, setName] = useState("")

  const handleOnchange = (event) => {
    setName(event.target.value)
  }
  // пока что 1 обработчик на 2 события
  return (
    <div>
      <form action="">
        <fieldset>
          <h2>Заголовок формы</h2>
          <label htmlFor="">Имя</label>
          <input
            type="name"
            name="name"
            value={name}
            onChange={handleOnchange}
          />
          <label htmlFor="">Фамилия</label>
          <input
            type="email"
            name="email"
            value={name}
            onChange={handleOnchange}
          />
        </fieldset>
      </form>
    </div>
  )
}

export default Form
