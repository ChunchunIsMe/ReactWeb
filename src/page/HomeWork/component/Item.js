import React, { memo } from 'react';
import Lazy from '@/Component/Lazy';

const Item = ({ outRef, show, value }) => (
  <div
    style={{
      width: '500px',
      height: '500px'
    }}
    ref={outRef}
  >
    {
      show && (
        <div>
          {value}
        </div>
      )
    }

  </div>
);

export default Lazy(Item, React.contentDom);