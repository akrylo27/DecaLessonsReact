import React from 'react';

function Checkbox({ type, checked, onChange, size, text }) {
  return (
    <div className='checkbox-wrapper'>
      <input
        type={type}
        name='checkbox'
        checked={checked}
        onChange={onChange}
        className={`checkbox-position checkbox-size_${size}`}
      />
      <span className='checkbox-span'>{text}</span>
    </div>
  );
}

export default Checkbox;
