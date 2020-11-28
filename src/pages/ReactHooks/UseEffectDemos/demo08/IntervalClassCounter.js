import React, { PureComponent } from 'react';
import { Card } from 'antd';


class IntervalClassCounter extends PureComponent {

  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  componentDidMount() {
    this.interval = setInterval(this.fetchDatas, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  // 自定义的定时执行的方法
  fetchDatas = () => {
    console.log('获取数据');
  };


  render() {
    const { count } = this.state;

    return (
      <Card>

      </Card>
    );
  }
}

export default IntervalClassCounter;
