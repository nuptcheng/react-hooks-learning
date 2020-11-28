import React, { PureComponent } from 'react';
import { Button, Divider } from 'antd';


class ClassCounterThree extends PureComponent {

  constructor(props) {
    super(props);
    this.state = {
      x: 0,
      y: 0,
    };
  }

  componentDidMount() {
    window.addEventListener('mousemove', this.logMousePosition);
  }

  componentWillUnmount() {
    window.removeEventListener('mousemove', this.logMousePosition);
  }

  logMousePosition = e => {
    this.setState({
      x: e.clientX,
      y: e.clientY,
    });
  };

  render() {
    const { x, y } = this.state;

    return (
      <div>
        <h1>使用class组件中执行1次渲染</h1>
        <Divider />
        <div>
          X坐标 - {x}
        </div>
        <br />
        <div>
          Y坐标 - {y}
        </div>
      </div>
    );
  }
}

export default ClassCounterThree;
