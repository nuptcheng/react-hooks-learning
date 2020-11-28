import React, { PureComponent } from 'react';
import { Button, Divider } from 'antd';


class ClassCounter extends PureComponent {

  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  incrementCount = () => {
    const { count } = this.state;

    this.setState({
      count: count + 1,
    });
  };

  render() {
    const { count } = this.state;

    return (
      <div>
        <h1>class组件实现计数器</h1>
        <Divider />
        <p>点击按钮{count}次</p>
        <Button
          type="primary"
          onClick={this.incrementCount}
        >点击
        </Button>
      </div>
    );
  }

}

export default ClassCounter;
