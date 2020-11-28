import React, { useState } from 'react';
import { Button, Divider } from 'antd';


// 函数式组件
const HookCounter = () => {
  // count初始化为0，setCount用来改变count
  // count相当于是state的变化量
  // useState接受1个参数（状态初始值），返回当前状态和更新状态的方法
  // []是ES6的解构赋值
  // the default value 0 is never used on re-renders
  // setCount相当于改变了state，更新state后同志组件重新渲染
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>useState基本使用</h1>
      <Divider />
      <p>点击按钮{count}次</p>
      <Button
        type="primary"
        onClick={() => setCount(count + 1)}
      >点击
      </Button>
    </div>
  );
};

export default HookCounter;
