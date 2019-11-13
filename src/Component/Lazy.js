import React, { memo, useState, useEffect, useRef } from 'react';

const Lazy = (Component, runDom) => {

  const NewCom = (props) => {
    const [show, setShow] = useState(false);
    const [ref, setRef] = useState(null);

    useEffect(() => {

      if (ref) {
        const dom = ref.current;
        const check = checkDom(dom);
        if (check) {
          // 如果已经在视口则显示dom
          setShow(true);
        } else {
          // 如果不在视口则触发滚动事件

          // 防抖id
          let id = null;
          // 滚动事件
          const handleScroll = () => {
            if (id) clearTimeout(id);
            id = setTimeout(() => {
              const check = checkDom(dom);
              if (check) {
                setShow(true);
                // 显示dom之后销毁scroll事件
                runDom.removeEventListener('scroll', handleScroll);
              }
            }, 100)
          }
          // 监听dom的滚动事件
          runDom.addEventListener('scroll', handleScroll);
        }

      }

    }, [ref])

    return (
      <Component {...props} outRef={(e) => { setRef(e) }} show={show} />
    )
  }

  return NewCom;
}

const checkDom = (dom) => {
  const offset = dom.getBoundingClientRect();
  const check = ((offset.top + offset.bottom) / 2 < window.innerHeight);
  return check;
}

export default Lazy;