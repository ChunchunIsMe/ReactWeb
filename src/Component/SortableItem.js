import React, { useState, useRef, useLayoutEffect, useMemo } from 'react';
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


const SortableItem = ({ value, width, height, childProps }) => {
  const inside = useRef();
  const outside = useRef();
  const [style, setSize] = useState({
    width,
    height,
  });

  const Component = useMemo(() => value, [value]);

  useLayoutEffect(() => {
    let open = false;
    let start = []
    let size = [outside.current.clientWidth, outside.current.clientHeight];
    const font = (size[0] > size[1] ? size[1] : size[0]) * 14 / 200;
    setSize({
      width,
      height,
      fontSize: font
    })
    // 当在右下角鼠标按下，则记录鼠标位置并开启监听
    inside.current.addEventListener('mousedown', (e) => {
      size = [outside.current.clientWidth, outside.current.clientHeight];
      start = [e.clientX, e.clientY]
      open = true;
    })
    // 鼠标移动如果监听开启，记录鼠标位置并改变字体大小和dom大小
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
          width: width,
          height: height,
          fontSize: fontSize
        })
      }
    })
    // 鼠标抬起则关闭监听
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
        ...style
      }}
    >
      <DragHandle style={{ zIndex: 99 }} />
      <div style={{ width: '100%', height: '100%', zIndex: 1 }}>
        <Component {...childProps} font={style.fontSize} width={style.width} height={style.height} />
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
            fontSize: '14px'
          }}
          type="radius-bottomright"
        />
      </div>
    </div>
  )
};

// 那个滚动的dom我挂载在React下了哈哈哈懒得去通信了 挂载的地方在src/Layout/Content.js
export default sortableElement(SortableItem);