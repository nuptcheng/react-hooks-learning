import React, { useState } from 'react';
import { Divider, Button, Card } from 'antd';
import moment from 'moment';


// 函数式组件
const HookCounterFour = () => {

  // 使用array作为状态变量
  const [items, setItems] = useState([]);

  const addItem = () => {
    setItems([...items, {
      id: items.length,
      value: moment().format('YYYY-MM-DD HH:mm:ss'),
    }]);
  };

  // 新的状态依赖旧状态的时候，必须使用回调函数来更新
  const removeItem = () => {
    setItems(array => array.slice(0, array.length - 1));
  };

  return (
    <div>
      <Card>
        <h1>使用useState更新数组</h1>
        <Divider />
        <div>
          <ul>
            {
              items.map(item => <li key={item.id}>{item.value}</li>)
            }
          </ul>
        </div>
        <Button type='primary' onClick={addItem}>增加元素</Button>
        <Button type='primary' onClick={removeItem} style={{ marginLeft: 16 }}>减少元素</Button>
      </Card>
    </div>
  );
};

export default HookCounterFour;
