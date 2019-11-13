import React, { useState } from 'react';
import SortableContainer from '@/Component/SortableContainer';
import SortableItem from '@/Component/SortableItem';
import Block from './component/Block';


const HomeWork = () => {

  // const [items, setItem] = useState(['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 'Item 6', 'Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 'Item 6', 'Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 'Item 6', 'Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 'Item 6', 'Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 'Item 6', 'Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 'Item 6', 'Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 'Item 6', 'Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 'Item 6', 'Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 'Item 6', 'Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 'Item 6', 'Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 'Item 6', 'Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 'Item 6']);

  const data = [
    {
      id: 1,
      value: <Block value='item1' />
    },
    {
      id: 2,
      value: <Block value='item2' />
    },
    {
      id: 3,
      value: <Block value='item3' />
    },
    {
      id: 4,
      value: <Block value='item4' />
    },
    {
      id: 5,
      value: <Block value='item5' />
    },
    {
      id: 6,
      value: <Block value='Block6' />
    },
    {
      id: 7,
      value: <Block value='Block7' />
    },
    {
      id: 8,
      value: <Block value='Block8' />
    },
    {
      id: 9,
      value: <Block value='Block9' />
    },
    {
      id: 10,
      value: <Block value='Block10' />
    },
    {
      id: 11,
      value: <Block value='Block11' />
    },
    {
      id: 12,
      value: <Block value='Block12' />
    },
    {
      id: 13,
      value: <Block value='Block13' />
    },
    {
      id: 14,
      value: <Block value='Block14' />
    },
    {
      id: 15,
      value: <Block value='Block15' />
    },
    {
      id: 16,
      value: <Block value='Block16' />
    },
    {
      id: 17,
      value: <Block value='Block17' />
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
          <SortableItem width='21vw' height='15vw' key={`item-${item.id}`} index={index} value={item.value} />
        ))}
      </SortableContainer>
    </>
  );
}

export default HomeWork;