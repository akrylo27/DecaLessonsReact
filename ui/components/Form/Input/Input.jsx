import React from 'react';

import styles from '@/ui/components/Form/Input/Input.module.scss';

function Input({ type, placeholder, size, color, variant, value, onChange }) {
  return (
    <div>
      <input
        type={type}
        placeholder={placeholder}
        //className={`input input-color_${color} input-size_${size} input-variant_${variant}`}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

export default Input;
