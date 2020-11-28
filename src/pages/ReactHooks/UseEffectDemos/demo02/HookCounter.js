import React, { useState, useEffect } from 'react';
import { Button, Divider } from 'antd';


const HookCounter = () => {

  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `点击${count}次`;
  });

  return (
    <div>
      <h1>useEffect基本使用(改变网页title)</h1>
      <Divider />
      <p>点击按钮{count}次</p>
      <Button
        type="primary"
        onClick={() => setCount(preValue => preValue + 1)}
      >点击
      </Button>
    </div>
  );
};

export default HookCounter;
