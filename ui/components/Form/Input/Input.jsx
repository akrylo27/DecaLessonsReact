import React from 'react';

function Input({
  type,
  placeholder,
  size,
  color,
  variant,
  value,
  onChange,
  ...props
}) {
  return (
    <div>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        {...props}
      />
    </div>
  );
}

export default Input;
