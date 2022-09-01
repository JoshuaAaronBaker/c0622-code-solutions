import React from 'react';

export default class Stopwatch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: 0,
      button: true,
      interval: null
    };
    this.tikTok = this.tikTok.bind(this);
    this.reset = this.reset.bind(this);
  }

  tikTok() {
    this.setState({ button: false });

    if (this.state.button === true) {
      this.interval = setInterval(() => {
        this.setState({ time: this.state.time + 1 });
      }, 1000);
      return;
    }
    if (this.state.button === false) {
      clearInterval(this.interval);
      this.setState({ button: true });
    }
  }

  reset() {
    if (this.state.button === true) {
      this.setState({
        time: 0,
        button: true,
        interval: null
      });
    }
  }

  render() {
    return (
      <div>
        <div className='flex-container'>
         <div onClick={this.reset} className='watch'>
          <p>{this.state.time}</p>
        </div>
        </div>
        <div><i onClick={this.tikTok} className={this.state.button ? 'fa-solid fa-play flex-container' : 'fa-solid fa-pause flex-container'} ></i></div>
      </div>
    );
  }
}
