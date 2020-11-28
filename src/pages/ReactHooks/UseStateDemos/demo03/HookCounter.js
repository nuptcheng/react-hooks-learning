import React, { useState } from 'react';
import { Button, Divider } from 'antd';


const HookCounter = () => {

  const initialCount = 0;
  const [count, setCount] = useState(initialCount);

  // 错误的方法增肌5，实际每次只增加1
  const faultIncrementFive = () => {
    for (let i = 0; i < 5; i += 1) {
      setCount(count + 1);
    }
  };

  return (
    <div>
      <h1>useState用法2(增加1，减少1，重置功能实现)</h1>
      <Divider />
      <p>计数器：{count}</p>
      <Button type="primary" onClick={() => setCount(count + 1)}>
        增加
      </Button>
      <Button type="primary" onClick={() => setCount(count - 1)} style={{ marginLeft: 16 }}>
        减少
      </Button>
      <Button type="primary" onClick={() => setCount(initialCount)} style={{ marginLeft: 16 }}>
        重置
      </Button>
      <Button type="primary" onClick={faultIncrementFive} style={{ marginLeft: 16 }}>
        增加5(错误的实现)
      </Button>
    </div>
  );
};

export default HookCounter;
