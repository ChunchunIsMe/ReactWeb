import React, { useState, useLayoutEffect } from 'react';
import SortableContainer from '@/Component/SortableContainer';
import SortableItem from '@/Component/SortableItem';
import Block from './Block';
import { dashboard } from '@/server/data';

const BlockSort = ({ location }) => {
  const [items, setItem] = useState([]);
  useLayoutEffect(() => {
    const { query = {} } = location;
    dashboard(query).then(res => {
      const items = res.data.charts.map(item => ({
        id: item.id,
        childProps: item,
        value: Block
      }));
      setItem(items);
    })
  }, [])

  const onSortEnd = ({ oldIndex, newIndex }) => {
    const item = items.splice(oldIndex, 1);
    items.splice(newIndex, 0, ...item);
    setItem([...items]);
  };


  return (
    <SortableContainer axis='xy' onSortEnd={onSortEnd} useDragHandle>
      {items.map((item, index) => (
        <SortableItem width='20vw' height='15vw' childProps={item.childProps} key={`item-${item.id}`} index={index} value={item.value} />
      ))}
    </SortableContainer>
  )
}

export default BlockSort;