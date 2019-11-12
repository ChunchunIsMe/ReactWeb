import React, { useState, useRef, useEffect } from 'react';
import { sortableElement, sortableHandle } from 'react-sortable-hoc';
import { Icon } from 'antd';

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


const SortableItem = sortableElement(({ value }) => {
  const inside = useRef();
  const outside = useRef();
  const [size, setSize] = useState({
    width: 0,
    height: 0
  })

  useEffect(() => {
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
        const width = size[0] - (start[0] - e.clientX);
        const height = size[1] - (start[1] - e.clientY);
        setSize({
          width: `${width}px`,
          height: `${height}px`
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
        marginRight: '10px',
        minWidth: 200,
        minHeight: 200,
        backgroundColor: "white",
        position: 'relative',
        float: 'left',
        ...size
      }}
    >
      <DragHandle style={{ zIndex: 1 }} />
      <div style={{ zIndex: 2 }}>
        {value}
        <div onClick={() => {
          console.log(123);
        }}>123123</div>
      </div>

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
          }}
          type="radius-bottomright"
        />
      </div>
    </div>
  )
});
export default SortableItem;