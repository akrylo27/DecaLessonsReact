import React, { useState } from 'react';

function Typography({ subHeaders }) {
  const [isTexts, setIsTexts] = useState(subHeaders);

  const res = isTexts.map((text) => {
    return (
      <div className='titles-wrapper'>
        <p>{text}</p>
      </div>
    );
  });

  return <div className='titles-card'>{res}</div>;
}

export default Typography;
