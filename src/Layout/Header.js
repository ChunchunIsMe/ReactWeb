import React, { memo } from 'react';
import { Layout } from 'antd';

const Header = memo(() => (
  <Layout.Header className="header" style={{ backgroundImage: 'linear-gradient(to right, rgb(34, 65, 221), rgb(49,142,249))' }}>
  </Layout.Header>
));

export default Header;