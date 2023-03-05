import React from 'react';

function Checkbox({ type, checked, onChange, size }) {
  return (
    <div className='checkbox-wrapper'>
      <input
        type={type}
        name='checkbox'
        checked={checked}
        onChange={onChange}
        className={`checkbox-position checkbox-size_${size}`}
      />
      <span className='checkbox-span'>Запомнить меня</span>
    </div>
  );
}

export default Checkbox;
