import React, { memo, useState } from 'react';
import SortableContainer from '@/Component/SortableContainer';
import SortableItem from '@/Component/SortableItem';
import LineChart from './LineChart';
import PieChart from './PieChart';

const arr = [
  {
    id: 'line',
    value: LineChart
  },
  {
    id: 'chart',
    value: PieChart
  }
]

const ChartSort = () => {
  const [charts, setCharts] = useState(arr)
  const onSortEnd = ({ oldIndex, newIndex }) => {
    const item = charts.splice(oldIndex, 1);
    charts.splice(newIndex, 0, ...item);
    setCharts([...charts]);
  };

  return (
    <SortableContainer axis='xy' onSortEnd={onSortEnd} useDragHandle>
      {charts.map((item, index) => (
        <SortableItem width='calc(40vw + 10px)' height='30vw' key={`item-${item.id}`} location={location} index={index} value={item.value} />
      ))}
    </SortableContainer>
  )
}

export default memo(ChartSort);