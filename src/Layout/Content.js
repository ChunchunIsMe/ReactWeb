import React, { memo, useEffect, useRef } from 'react';
import { Layout, Breadcrumb } from 'antd';
import Rot from '../Route/Route';

const Content = memo(({ menu }) => {
  const ref = useRef()
  useEffect(() => {
    // 挂给后面的东西进行懒加载哈哈
    React.contentDom = ref.current;
  }, [])
  return (
    <Layout >
      <div
        ref={ref}
        style={{
          padding: '0 24px 24px',
          maxHeight: 'calc(100vh - 64px)',
          overflow: "scroll"
        }}
      >
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>{menu}</Breadcrumb.Item>
        </Breadcrumb>
        <Layout.Content>
          <Rot />
        </Layout.Content>
      </div>

    </Layout>
  )
})

export default Content;