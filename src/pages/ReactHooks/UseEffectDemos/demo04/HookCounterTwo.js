import React, { useState, useEffect } from 'react';
import { Button, Divider, Input } from 'antd';


const HookCounterTwo = () => {

  const [count, setCount] = useState(0);
  const [name, setName] = useState('');


  // 条件渲染
  useEffect(() => {
    console.log('使用useEffect更新网页title');
    document.title = `点击${count}次`;
  }, [count]);

  return (
    <div>
      <h1>useEffect实现条件渲染</h1>
      <Divider />

      <p>点击按钮{count}次</p>
      <Input
        value={name}
        onChange={e => setName(e.target.value)}
        style={{ width: 200 }}
      />
      <Button
        style={{ marginLeft: 16 }}
        type="primary"
        onClick={() => setCount(preValue => preValue + 1)}
      >点击
      </Button>
    </div>
  );
};

export default HookCounterTwo;
