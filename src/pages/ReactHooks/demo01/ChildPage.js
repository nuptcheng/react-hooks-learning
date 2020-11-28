import React, { useState, useEffect } from 'react';
import { Button, Divider } from 'antd';


// 函数式组件
const ChildPage = ({ person, education }) => {

  // []是ES6的解构赋值
  // count初始化为0，setCount用来改变count
  // count相当于是state的变化量
  const [count, setCount] = useState(0);

  // 相当于componentDidMount和componentDidUpdate
  // 每次count更新后会进入uesEffect
  useEffect(() => {
    console.log(person);
    console.log(education);
    console.log(count);
  });

  return (
    <div>
      <h1>useEffect基本使用</h1>
      <Divider />
      <p>姓名：{person.name}</p>
      <p>年龄：{person.age}</p>
      <p>中学：{education.highSchool}</p>
      <p>大学：{education.university}</p>
      <p>点击按钮{count}次</p>
      <Button
        type="primary"
        onClick={() => setCount(count + 1)}
      >点击
      </Button>
    </div>
  );
};

export default ChildPage;
