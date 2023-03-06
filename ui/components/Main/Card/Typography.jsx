import React, { useState } from 'react';

function Typography({ subHeaders }) {
  const [isTexts, setIsTexts] = useState(subHeaders);

  const res = isTexts.map((text) => {
    return (
      <div className='subHeaders-wrapper-item'>
        <p>{text}</p>
      </div>
    );
  });

  return <div className='subHeaders-wrapper'>{res}</div>;
}

export default Typography;
