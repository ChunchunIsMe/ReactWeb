import React, { memo, useMemo, useEffect, useState } from 'react';
import { Chart, Geom, Axis, Tooltip, Coord, Label, Guide } from "bizcharts";
import DataSet from "@antv/data-set";
import Lazy from '@/Component/Lazy';
import { getPie } from '@/server/data';

const { DataView } = DataSet;
const { Html } = Guide;
const cols = {
  percent: {
    formatter: val => {
      val = val * 100 + "%";
      return val;
    }
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

const PieChart = ({ show, outRef, id, height, font }) => {
  const [data, setData] = useState({});
  const [dv, setDv] = useState(new DataView())

  useEffect(() => {
    getPie({ id }).then(res => {
      const midDv = new DataView();
      midDv.source(res.data.chartData).transform({
        type: "percent",
        field: "count",
        dimension: "item",
        as: "percent"
      });
      setDv(midDv);
      setData(res.data)
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
  }, [height, font])

  return (
    <div ref={outRef} style={{ width: '100%', height: '100%', padding: '20px' }}>
      <div style={titleStyle}>
        {data.title}
      </div>
      <div style={timeStyle}>{data.start} - {data.end} , 按日</div>
      {
        show && (
          <Chart
            data={dv}
            scale={cols}
            padding={[80, 100, 80, 80]}
            padding="auto"
            height={computedHeight}
            forceFit
          >
            <Coord type={"theta"} radius={0.75} innerRadius={0.6} />
            <Axis name="percent" />
            <Tooltip
              showTitle={false}
              itemTpl="<li><span style=&quot;background-color:{color};&quot; class=&quot;g2-tooltip-marker&quot;></span>{name}: {value}</li>"
            />
            <Guide>
              <Html
                position={["50%", "50%"]}
                html="<div style=&quot;color:#8c8c8c;font-size: 0.8em;text-align: center;width: 10em;&quot;><span style=&quot;color:#262626;font-size:2.5em&quot;>200</span></div>"
                alignX="middle"
                alignY="middle"
              />
            </Guide>
            <Geom
              type="intervalStack"
              position="percent"
              color="item"
              tooltip={[
                "item*percent",
                (item, percent) => {
                  percent = percent * 100 + "%";
                  return {
                    name: item,
                    value: percent
                  };
                }
              ]}
              style={{
                lineWidth: 1,
                stroke: "#fff"
              }}
            >
              <Label
                content="percent"
                formatter={(val, item) => {
                  return item.point.item + ": " + val;
                }}
              />
            </Geom>
          </Chart>
        )
      }

    </div >
  )
};

export default Lazy(memo(PieChart), React.contentDom);

