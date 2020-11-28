import React, { PureComponent } from 'react';
import { Button, Divider, Input } from 'antd';


class ClassCounterTwo extends PureComponent {

  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      name: '',
    };
  }

  componentDidMount() {
    const { count } = this.state;
    document.title = `点击${count}次`;
  }

  componentDidUpdate(prevProps, prevState) {
    const { count } = this.state;

    // 条件渲染
    if (prevState.count !== count) {
      console.log('更新网页title');
      document.title = `点击${count}次`;
    }
  }

  render() {
    const { count, name } = this.state;

    return (
      <div>
        <h1>React中class组件的条件渲染</h1>
        <Divider />
        <p>点击按钮{count}次</p>
        <Input
          value={name}
          onChange={e => this.setState({
            name: e.target.value,
          })}
          style={{ width: 200 }}
        />
        <Button
          type="primary"
          style={{ marginLeft: 16 }}
          onClick={() => this.setState({
            count: count + 1,
          })}
        >
          增加
        </Button>
      </div>
    );
  }
}

export default ClassCounterTwo;
