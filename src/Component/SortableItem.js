import React, { useState, useRef, useEffect } from 'react';
import { sortableElement, sortableHandle } from 'react-sortable-hoc';
import { Icon } from 'antd';
import Lazy from './Lazy';

const DragHandle = sortableHandle(() => (
  <div
    style={{
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      zIndex: 0
    }}
  ></div>
));


const SortableItem = ({ value, outRef, show }) => {
  const inside = useRef();
  const outside = useRef();
  const [size, setSize] = useState({
    width: 200,
    height: 200,
    fontSize: '14px'
  })

  useEffect(() => {
    outRef(outside);
    setSize({
      width: `${outside.current.clientWidth}px`,
      height: `${outside.current.clientHeight}px`
    })

    let open = false;
    let start = []
    let size = [outside.current.clientWidth, outside.current.clientHeight];
    inside.current.addEventListener('mousedown', (e) => {
      size = [outside.current.clientWidth, outside.current.clientHeight];
      start = [e.clientX, e.clientY]
      open = true;
    })
    addEventListener('mousemove', (e) => {
      if (open) {
        let width = size[0] - (start[0] - e.clientX);
        let height = size[1] - (start[1] - e.clientY);
        if (width <= 200) {
          width = 200;
        }
        if (height <= 200) {
          height = 200;
        }
        const fontSize = (width > height ? height : width) * 14 / 200;
        setSize({
          width: `${width}px`,
          height: `${height}px`,
          fontSize: `${fontSize}px`
        })
      }
    })
    addEventListener('mouseup', () => {
      open = false;
    })
  }, []);

  return (
    <div
      ref={outside}
      style={{
        display: 'inline-block',
        margin: '0 10px 10px 0',
        minWidth: 200,
        minHeight: 200,
        backgroundColor: "white",
        position: 'relative',
        verticalAlign: 'top',
        ...size
      }}
    >
      <DragHandle style={{ zIndex: 1 }} />
      {
        show && (
          <div style={{ zIndex: 2 }}>
            {value}
            <div>
              <div>123123</div>
            </div>
          </div>
        )
      }


      <div
        style={{
          width: '15px',
          height: '15px',
          position: 'absolute',
          right: 0,
          bottom: 0,
          zIndex: 3
        }}
        ref={inside}
      >
        <Icon
          style={{
            position: 'absolute',
            bottom: 0,
            right: 0,
            fontSize: '14px'
          }}
          type="radius-bottomright"
        />
      </div>
    </div>
  )
};

// 那个滚动的dom我挂载在React下了哈哈哈懒得去通信了 挂载的地方在src/Layout/Content.js
export default sortableElement(Lazy(SortableItem, React.contentDom));