import React, { useState } from 'react';
import { Divider, Input, Card } from 'antd';


// 函数式组件
const HookCounterThree = () => {

  // 使用object作为状态变量
  const [person, setPerson] = useState({
    name: 'zhangyun',
    age: 17,
    school: '南师附中',
  });

  const [employee, setEmployee] = useState({
    name: 'chengzhu',
    age: 33,
    company: '阿里巴巴',
  });


  return (
    <div>
      <Card>
        <h1>使用useState更新对象(错误的做法，没有手动合并对象)</h1>
        <Divider />
        <div style={{ width: 200 }}>
          <Input
            value={person.name}
            onChange={e => setPerson({ name: e.target.value })}
          />
          <Input
            value={person.age}
            onChange={e => setPerson({ age: e.target.value })}
            style={{ marginTop: 8 }}
          />
          <Input
            value={person.school}
            onChange={e => setPerson({ school: e.target.value })}
            style={{ marginTop: 8 }}
          />
        </div>
        <Divider />
        <h2>学生姓名：{person.name}</h2>
        <h2>学生年龄：{person.age}</h2>
        <h2>学校名称：{person.school}</h2>
        <Divider />
        <h2>{JSON.stringify(person)}</h2>
      </Card>
      <Divider />
      <Card style={{ marginTop: 16 }}>
        <h2>正确的做法(手动合并object)：</h2>
        {/*扩展操作符意义：复制person对象中的每个属性，然后用后面的属性值覆盖掉原先的属性值*/}
        {/*关键知识点：the setter function provided by the useState Hook does not automatically merge and update objects*/}
        {/*you have to manually merge it yourself and then pass the value to the setter function*/}
        <div style={{ width: 200 }}>
          <Input
            value={employee.name}
            onChange={e => setEmployee({ ...employee, name: e.target.value })}
          />
          <Input
            value={employee.age}
            onChange={e => setEmployee({ ...employee, age: e.target.value })}
            style={{ marginTop: 8 }}
          />
          <Input
            value={employee.company}
            onChange={e => setEmployee({ ...employee, company: e.target.value })}
            style={{ marginTop: 8 }}
          />
        </div>
        <Divider />
        <h2>员工姓名：{employee.name}</h2>
        <h2>员工年龄：{employee.age}</h2>
        <h2>公司名称：{employee.company}</h2>
        <Divider />
        {/*关键知识点：useState does not automatically merge and update the object*/}
        {/*这点和类组件中的setState完全不同，所以使用useState,object必须手动合并*/}
        <h2>{JSON.stringify(employee)}</h2>
      </Card>
    </div>
  );
};

export default HookCounterThree;
