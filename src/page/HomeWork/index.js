import React, { useState } from 'react';
import SortableContainer from '@/Component/SortableContainer';
import SortableItem from '@/Component/SortableItem';



const HomeWork = () => {

  const [items, setItem] = useState(['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 'Item 6']);

  const onSortEnd = ({ oldIndex, newIndex }) => {
    const item = items.splice(oldIndex, 1);
    items.splice(newIndex, 0, ...item);
    setItem([...items]);
  };

  return (
    <>
      <SortableContainer axis='xy' onSortEnd={onSortEnd} useDragHandle>
        {items.map((value, index) => (
          <SortableItem key={`item-${value}`} index={index} value={value} />
        ))}
      </SortableContainer>
    </>
  );
}

export default HomeWork;