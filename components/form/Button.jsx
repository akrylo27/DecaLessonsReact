import React, { useState } from "react"

function Button(props) {
  // Функция, которая по клику будет отправлять нужный запрос
  const handleClick = () => {
    updateData()
    console.log(`Функция сработала" + ${value}`)
  }

  //Здесь надо добавить prevetDefault() , чтобы форма не отправлялась, пока не выполнятся определенные условия

  return (
    <>
      <button className="btn-props" onClick={handleClick}>
        нажать
      </button>
    </>
  )
}

export default Button
