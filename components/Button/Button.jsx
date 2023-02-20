import React from 'react';

const Button = ({ text, type, style, link, ...props }) => {
  const renderSwitchButton = (style, link) => {
    switch (style) {
      case 'grey':
        if (link) {
          return (
            <a href={link}>
              <button className='button button__grey' type={type} {...props}>
                {text}
              </button>
            </a>
          );
        } else {
          return (
            <button className='button button__grey' type={type} {...props}>
              <p>{text}</p>
            </button>
          );
        }
      case 'orange':
        if (link) {
          return (
            <a href={link}>
              <button className='button button__orange' type={type} {...props}>
                {text}
              </button>
            </a>
          );
        } else {
          return (
            <button className='button button__orange' type={type} {...props}>
              <p>{text}</p>
            </button>
          );
        }
      default:
        if (link) {
          return (
            <a href={link}>
              <button className='button' type={type} {...props}>
                {text}
              </button>
            </a>
          );
        } else {
          return (
            <button className='button' type={type} {...props}>
              <p>{text}</p>
            </button>
          );
        }
    }
  };

  return <div>{renderSwitchButton(style, link)}</div>;
};

export default Button;
