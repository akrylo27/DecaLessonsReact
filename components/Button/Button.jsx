import Link from 'next/link';
import React from 'react';

const Button = ({
  text = 'default',
  type = 'button',
  style = 'default',
  link,
  ...props
}) => {
  const renderSwitchButton = (style, link) => {
    if (link) {
      return (
        <Link href={link}>
          <button className={'button button__' + style} type={type} {...props}>
            <p>{text}</p>
          </button>
        </Link>
      );
    } else {
      return (
        <button className={'button button__' + style} type={type} {...props}>
          <p>{text}</p>
        </button>
      );
    }
  };

  return <div>{renderSwitchButton(style, link)}</div>;
};

export default Button;
