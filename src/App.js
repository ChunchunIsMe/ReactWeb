import React, { memo, useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Layout } from 'antd';
import Header from './Layout/Header';
import Slider from './Layout/Slider';
import Content from './Layout/Content';

const App = memo(() => {
  const [menu, setMenu] = useState(null)
  return (
    <Router>
      <Layout style={{ minHeight: '100vh' }}>
        <Header />
        <Layout>
          <Slider setMenu={setMenu} />
          <Content menu={menu} />
        </Layout>
      </Layout>
    </Router>
  )
});

export default App;
