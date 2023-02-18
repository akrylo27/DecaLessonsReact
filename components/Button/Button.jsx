import React from 'react';

const Button = ({ text, type, style, ...props }) => {
  const renderSwitchButton = (style) => {
    switch (style) {
      case 'normal':
        return (
          <button className='button button__normal' type={type} {...props}>
            {text}
          </button>
        );
      case 'orange':
        return (
          <button className='button button__orange' type={type} {...props}>
            {text}
          </button>
        );
    }
  };

  return <div>{renderSwitchButton(style)}</div>;
};

export default Button;
