import React, { memo, useMemo, useEffect, useState } from 'react';
import { Chart, Geom, Axis, Tooltip } from "bizcharts";
import Lazy from '@/Component/Lazy';
import { getLine } from '@/server/data';

const cols = {
  value: {
    min: 0
  },
  year: {
    range: [0, 1]
  }
};

const titleStyle = {
  fontSize: '0.6em',
  padding: '0.3em'
}

const timeStyle = {
  fontSize: '0.3em',
  color: '#999',
  padding: '0 0.3em 1.8em'
}
const LineChart = ({ id, outRef, show, height, font }) => {

  const [data, setData] = useState({})
  
  useEffect(() => {
    getLine({ id }).then(res => {
      setData(res.data);
    })
  }, [])

  const computedHeight = useMemo(() => {
    const type = typeof height;
    if (type === 'number') {
      return height - 20 - (3.3 * font);
    } else {
      const change = Number.parseFloat(height);
      const inner = window.innerWidth;
      const result = change * inner / 100 - (3.3 * font);
      return result - 20;
    }
  }, [height, font]);

  return (
    <div ref={outRef} style={{ width: '100%', height: '100%', padding: '10px' }}>
      <div style={titleStyle}>{data.title}</div>
      <div style={timeStyle}>{data.start} - {data.end} , 按日</div>
      {
        show && (
          <Chart height={computedHeight} data={data.chartData || []} padding="auto" scale={cols} forceFit>
            <Axis name="year" />
            <Axis name="value" />
            <Tooltip
              crosshairs={{
                type: "y"
              }}
            />
            <Geom type="line" position="year*value" size={2} />
            <Geom
              type="point"
              position="year*value"
              size={4}
              shape={"circle"}
              style={{
                stroke: "#fff",
                lineWidth: 1
              }}
            />
          </Chart>
        )
      }

    </div>
  )
}

export default Lazy(memo(LineChart), React.contentDom);