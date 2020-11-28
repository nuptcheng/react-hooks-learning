import React, { useState, useEffect } from 'react';
import { Divider } from 'antd';


const HookMouse = () => {

  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  // 注意函数组件里声明和使用函数的方法
  const logMousePosition = e => {
    console.log('鼠标事件触发');
    setX(e.clientX);
    setY(e.clientY);
  };

  // 注意useEffect第2个参数是[]，
  useEffect(() => {
    console.log('执行useEffect');
    window.addEventListener('mousemove', logMousePosition);

    // 返回1个函数，在组件卸载的时候清除订阅和事件
    return (() => {
      console.log('进入清除方法');
      window.removeEventListener('mouseover', logMousePosition);
    });
  }, []);

  return (
    <div>
      <div>
        Hooks X坐标 - {x}
      </div>
      <br />
      <div>
        Hooks Y坐标 - {y}
      </div>
    </div>
  );
};

export default HookMouse;
