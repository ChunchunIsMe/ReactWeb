import React, { useState } from 'react';
import SortableContainer from '@/Component/SortableContainer';
import SortableItem from '@/Component/SortableItem';
import Item from './component/Item';


const HomeWork = () => {

  // const [items, setItem] = useState(['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 'Item 6', 'Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 'Item 6', 'Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 'Item 6', 'Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 'Item 6', 'Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 'Item 6', 'Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 'Item 6', 'Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 'Item 6', 'Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 'Item 6', 'Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 'Item 6', 'Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 'Item 6', 'Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 'Item 6', 'Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 'Item 6']);

  const data = [
    {
      id: 1,
      value: <Item value='item1' />
    },
    {
      id: 2,
      value: <Item value='item2' />
    },
    {
      id: 3,
      value: <Item value='item3' />
    },
    {
      id: 4,
      value: <Item value='item4' />
    },
    {
      id: 5,
      value: <Item value='item5' />
    },
    {
      id: 6,
      value: <Item value='item6' />
    },
    {
      id: 7,
      value: <Item value='item7' />
    },
    {
      id: 8,
      value: <Item value='item8' />
    },
    {
      id: 9,
      value: <Item value='item9' />
    },
    {
      id: 10,
      value: <Item value='item10' />
    },
    {
      id: 11,
      value: <Item value='item11' />
    },
    {
      id: 12,
      value: <Item value='item12' />
    },
    {
      id: 13,
      value: <Item value='item13' />
    },
    {
      id: 14,
      value: <Item value='item14' />
    },
    {
      id: 15,
      value: <Item value='item15' />
    },
    {
      id: 16,
      value: <Item value='item16' />
    },
    {
      id: 17,
      value: <Item value='item17' />
    },
  ]
  const [items, setItem] = useState(data);

  const onSortEnd = ({ oldIndex, newIndex }) => {
    const item = items.splice(oldIndex, 1);
    items.splice(newIndex, 0, ...item);
    setItem([...items]);
  };

  return (
    <>
      <SortableContainer axis='xy' onSortEnd={onSortEnd} useDragHandle>
        {items.map((item, index) => (
          <SortableItem key={`item-${item.id}`} index={index} value={item.value} />
        ))}
      </SortableContainer>
    </>
  );
}

export default HomeWork;