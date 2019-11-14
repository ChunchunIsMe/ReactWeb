import React, { memo, useMemo } from 'react';
import { Row, Col, Icon, Card } from 'antd';

const borderStyle = {
  width: '100%',
  height: '100%',
  padding: '1em',
  fontSize: '1em',
}
const timeStyle = {
  fontSize: '0.5em',
  color: '#999',
  marginTop: '0.6em',
}
const numStyle = {
  fontSize: '2em',
  color: '#222',
  margin: '1.1em 0'
}

const upStyle = {
  fontSize: '0.85em',
  color: 'rgb(238, 0, 35)'
}
const Block = ({ title, start, end, up, percent, data }) => {
  return useMemo(() => (
    <div style={borderStyle}>
      <Row>
        <Col md={21}>{title}</Col>
        <Col md={2}><Icon type="line-chart" /></Col>
        <Col md={1}><Icon type="info" /></Col>
      </Row>
      <Row style={timeStyle}>{start} - {end} , 按日</Row>
      <Row style={numStyle}>{data}</Row>
      <Row style={upStyle}>
        <Icon type="caret-up" />
        <span style={{ marginRight: '0.4em' }}>{up}</span>
        <Icon type="caret-up" />
        <span>{percent}</span>
      </Row>
    </div>
  ), [title, start, end, up, percent, data])
}

export default memo(Block)