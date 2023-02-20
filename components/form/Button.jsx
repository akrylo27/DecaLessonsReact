import React, { useState } from "react"

function Button({ color, variant, size }) {
  // Функция, которая по клику будет отправлять нужный запрос
  const handleClick = () => {
    console.log("Функция сработала")
  }

  //Здесь надо добавить prevetDefault() , чтобы форма не отправлялась, пока не выполнятся определенные условия

  return (
    <>
      <button
        className={`btn btn-color_${color} btn-variant_${variant} btn-size_${size}`}
        onClick={handleClick}
      >
        нажать
      </button>
    </>
  )
}

export default Button
