import React, { useState } from "react"

function Button(props) {
  // Функция, которая по клику будет отправлять нужный запрос
  const handleClick = () => {
    console.log("Функция сработала")
  }

  //Здесь надо добавить prevetDefault() , чтобы форма не отправлялась, пока не выполнятся определенные условия

  return (
    <>
      <button className="btn" onClick={handleClick}>
        нажать
      </button>
    </>
  )
}

export default Button
