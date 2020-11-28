import React, { PureComponent } from 'react';
import { Button } from 'antd';


class CounterReactClass extends PureComponent {

  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  incrementCount = () => {
    // 注意这种优雅的写法
    this.setState(prevState => {
      return {
        count: prevState.count + 1,
      };
    });
  };

  render() {
    const { count } = this.state;

    return (
      <div>
        <p>数量：{count}次</p>
        <Button type="primary" onClick={this.incrementCount}>增加</Button>
      </div>
    );
  }
}

export default CounterReactClass;
