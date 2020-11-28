import React, { useState } from 'react';
import { Button, Divider } from 'antd';


// 函数式组件
const HookCounterTwo = () => {

  const initialCount = 0;
  const [count, setCount] = useState(initialCount);


  // 执行下面方法，只增加1，不是增加5
  const faultIncrementFive = () => {
    for (let i = 0; i < 5; i += 1) {
      setCount(count + 1);
    }
  };

  // 正确的写法，setCount接受1个获取上次状态的方法
  // pass in a function that has access to the old value and increment that by one
  // 所以使用useState Hook更新状态的时候，给setCount方法传入1个之前状态的回调函数
  const correctIncrementFive = () => {
    for (let i = 0; i < 5; i += 1) {
      setCount(prevCount => prevCount + 1);
    }
  };


  // 以下代码和demo03是非安全的，不是正确的改变状态的写法
  return (
    <div>
      <h1>useState用法2(给setCount传入1个获取之前状态的回调函数来更新状态)</h1>
      <Divider />
      <p>数量：{count}次</p>
      <Button type="primary" onClick={() => setCount(prevCount => prevCount + 1)}>
        增加
      </Button>
      <Button type="primary" onClick={() => setCount(prevCount => prevCount - 1)} style={{ marginLeft: 16 }}>
        减少
      </Button>
      <Button type="primary" onClick={() => setCount(initialCount)} style={{ marginLeft: 16 }}>
        重置
      </Button>
      <Button type="primary" onClick={faultIncrementFive} style={{ marginLeft: 16 }}>
        错误的增加5(实际只+1)
      </Button>
      <Button type="primary" onClick={correctIncrementFive} style={{ marginLeft: 16 }}>
        正确的增加5
      </Button>
      <Button
        type="primary"
        // 优雅的写法
        onClick={() => setCount(prevCount => prevCount + 10)}
        style={{ marginLeft: 16 }}
      >
        增加10
      </Button>
    </div>
  );
};

export default HookCounterTwo;
