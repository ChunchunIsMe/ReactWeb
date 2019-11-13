import React, { memo } from 'react';
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
const Block = ({ value }) => {
  return (
    <div style={borderStyle}>
      <Row>
        <Col md={21}>小程序流量追踪</Col>
        <Col md={2}><Icon type="line-chart" /></Col>
        <Col md={1}><Icon type="info" /></Col>
      </Row>
      <Row style={timeStyle}>2019/07/01 - 2019/09/01 , 按日</Row>
      <Row style={numStyle}>58,846</Row>
      <Row style={upStyle}>
        <Icon type="caret-up" />
        <span style={{ marginRight: '0.4em' }}>2045</span>
        <Icon type="caret-up" />
        <span>34.5%</span>
      </Row>
    </div>
  )
}

export default memo(Block)