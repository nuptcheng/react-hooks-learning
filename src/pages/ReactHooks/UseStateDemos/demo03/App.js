import React, { Fragment } from 'react';
import HookCounterTwo from './HookCounterTwo';
import { Divider } from 'antd';
import CounterReactClass from '@/pages/ReactHooks/UseStateDemos/demo03/CounterReactClass';
import HookCounter from '@/pages/ReactHooks/UseStateDemos/demo03/HookCounter';


const App = () => {

  return (
    <Fragment>
      <h1>函数式组件(React Hook)</h1>
      <HookCounter />
      <Divider />
      <HookCounterTwo />
      <Divider />
      <h1>类组件</h1>
      <CounterReactClass />
    </Fragment>
  );
};

export default App;
