import React, { useState } from 'react';
import { Divider, Button } from 'antd';
import HookMouse from './HookMouse';


const MouseContainer = () => {
  const [display, setDisplay] = useState(true);


  return (
    <div>
      <h1>使用useEffect实现副作用的清除操作</h1>
      <Divider />
      <div>
        <h2>显示鼠标坐标</h2>
        <br />
        {display && <HookMouse />}
      </div>
      <div>
        <Button type="primary" onClick={() => setDisplay(!display)} style={{ marginTop: 16 }}>
          {display === false ? '显示' : '隐藏'}
        </Button>
      </div>
    </div>
  );
};

export default MouseContainer;
