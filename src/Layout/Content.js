import React, { memo } from 'react';
import { Layout, Breadcrumb } from 'antd';
import Rot from '../Route/Route';

const Content = memo(({ menu }) => (
  <Layout style={{
    padding: '0 24px 24px',
    maxHeight: 'calc(100vh - 64px)',
    overflow: "scroll"
  }}>
    <Breadcrumb style={{ margin: '16px 0' }}>
      <Breadcrumb.Item>{menu}</Breadcrumb.Item>
    </Breadcrumb>
    <Layout.Content>
      <Rot />
    </Layout.Content>
  </Layout>
))

export default Content;