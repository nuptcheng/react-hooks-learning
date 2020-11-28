import React, { Fragment } from 'react';
import { Divider } from 'antd';

import HookCounterFour from './HookCounterFour';


const App = () => {

  return (
    <Fragment>
      <h1>useState用法5(使用array作为状态变量)</h1>
      <Divider />
      <HookCounterFour />
    </Fragment>
  );
};

export default App;
