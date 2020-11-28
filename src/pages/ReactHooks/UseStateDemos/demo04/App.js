import React, { Fragment } from 'react';
import { Divider } from 'antd';

import HookCounterThree from './HookCounterThree';


const App = () => {

  return (
    <Fragment>
      <h1>useState用法3(使用object作为状态变量)</h1>
      <Divider />
      <HookCounterThree />
    </Fragment>
  );
};

export default App;
