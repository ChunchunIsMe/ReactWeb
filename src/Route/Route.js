import React from 'react';
import { Switch, Route } from 'react-router-dom';

const importAsync = (pathFun) => {
  class Component extends React.PureComponent {
    state = {
      C: null
    }

    componentDidMount() {
      pathFun().then(item => {
        this.setState({
          C: item.default
        })
      }).catch((e) => {
        console.error(e, 'error')
      })
    }
    render() {
      const { C } = this.state;
      return (
        C && <C {...this.props} />
      )
    }
  }
  return Component;
}

const Rot = () => (
  <Switch>
    <Route path="/blank" component={importAsync(() => import('@/page/Blank'))} />
    <Route path="/homework" component={importAsync(() => import('@/page/HomeWork'))} />
    {/* <Route path="/" component={importAsync(() => import('@/page/HomeWork'))} /> */}
  </Switch>
);

export default Rot;