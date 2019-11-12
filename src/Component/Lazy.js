import React, { memo, useState, useEffect } from 'react';

const Lazy = (Component) => {
  const NewCom = () => {
    const [show, setShow] = useState(false);

    useEffect(() => {
      
    }, [])

    return (
      show ? <Component /> : <div />
    )
  }
}

export default Lazy;