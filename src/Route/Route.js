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
    <Route path="/" component={importAsync(() => import('@/page/HomeWork'))} />
    <Route path="/Blank" component={importAsync(() => import('@/page/Blank'))} />
  </Switch>
);

export default Rot;