import React, { useState } from "react"

function Input({ type, name, placeholder, color, variant, size }) {
  const [value, setValue] = useState("")

  //Следим за изменениями в инпуте и выводим его в состояние
  const handleChange = (event) => {
    console.log(event.target.value)
    setValue(event.target.value)
  }

  //Возвращаем контролируемый инпут, но пока никуда не сохраняем значение

  return (
    <>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        className={`input input-color_${color} input-variant_${variant} input-size_${size}`}
        value={value}
        onChange={handleChange}
      />
    </>
  )
}

export default Input
