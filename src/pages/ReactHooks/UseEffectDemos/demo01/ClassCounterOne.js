import React, { PureComponent } from 'react';
import { Button, Divider } from 'antd';


class ClassCounterOne extends PureComponent {

  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  componentDidMount() {
    const { count } = this.state;
    document.title = `点击${count}次`;
    this.interval = setInterval(this.tick, 1000);
  }

  componentDidUpdate(prevProps, prevState) {
    const { count } = this.state;
    document.title = `点击${count}次`;
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const { count } = this.state;

    return (
      <div>
        <h1>React副作用在class组件</h1>
        <Divider />
        <p>点击按钮{count}次</p>
        <Button
          type="primary"
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

export default ClassCounterOne;
