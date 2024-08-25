import React, { Component } from 'react';

class CountdownTimer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timeLeft: 10, // 设置初始倒计时时间为10秒
      showImage: false, // 是否显示图片的标志
    };
  }

  componentDidMount() {
    // 当组件挂载时，启动倒计时
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    // 当组件卸载时，清除定时器
    clearInterval(this.timerID);
  }

  tick() {
    // 每秒更新一次倒计时
    if (this.state.timeLeft > 0) {
      this.setState((prevState) => ({
        timeLeft: prevState.timeLeft - 1,
      }));
    } else {
      // 倒计时结束，清除定时器并显示图片
      clearInterval(this.timerID);
      this.setState({ showImage: true });
    }
  }

  render() {
    return (
      <div>
        {this.state.showImage ? (
          <img src="https://pbs.twimg.com/media/Fe1pFJ0aEAARHr-?format=jpg&name=360x360" alt="Countdown finished" />
        ) : (
          <p>Time left: {this.state.timeLeft} seconds</p>
        )}
      </div>
    );
  }
}

export default CountdownTimer;