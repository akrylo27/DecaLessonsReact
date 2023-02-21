import React from "react"

function Button({ color, variant, size }) {
  // Функция, которая по клику будет отправлять нужный запрос
  const handleClick = () => {
    console.log("Функция сработала")
  }

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
