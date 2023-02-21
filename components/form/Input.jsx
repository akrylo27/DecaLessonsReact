import React, { useState } from "react"

function Input({ type, name, placeholder, color, variant, size, onChange }) {
  // const [vaue,setValue]
  //Следим за изменениями в инпуте и выводим его в состояние

  //Возвращаем контролируемый инпут, но пока никуда не сохраняем значение

  return (
    <>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        className={`input input-color_${color} input-variant_${variant} input-size_${size}`}
        onChange={onChange}
      />
    </>
  )
}

export default Input
