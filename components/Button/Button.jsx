import Link from 'next/link';
import React from 'react';

const Button = ({
  text = 'default',
  type = 'button',
  style = 'default',
  link = false,
  ...props
}) => {
  const renderSwitchButton = (style, link) => {
    if (link) {
      return (
        <button className={`button button__${style}`} type={type} {...props}>
          <Link href={link}>
            <p>{text}</p>
          </Link>
        </button>
      );
    } else {
      return (
        <button className={`button button__${style}`} type={type} {...props}>
          <p>{text}</p>
        </button>
      );
    }
  };

  return renderSwitchButton(style, link);
};

export default Button;
