import React, { useEffect, useState } from 'react';
import { Switch, Route } from 'react-router-dom';

const importAsync = (pathFun) => {
  const Component = () => {
    const [C, setC] = useState(null)
    useEffect(() => {
      pathFun().then(item => {
        setC(item.default);
      })
    }, [])
    return (
      C && <C />
    )
  }
  return Component;
}

const Rot = () => (
  <Switch>
    <Route path="/homework" component={importAsync(() => import('@/page/HomeWork'))} />
    <Route path="/blank" component={importAsync(() => import('@/page/Blank'))} />
    <Route path="/" component={importAsync(() => import('@/page/HomeWork'))} />
  </Switch>
);

export default Rot;