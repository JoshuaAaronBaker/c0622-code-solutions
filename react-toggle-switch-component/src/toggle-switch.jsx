import React from 'react';

export default class ToggleSwitch extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isOn: false };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ isOn: !this.state.isOn });
  }

  render() {
    if (this.state.isOn === false) {
      return (
      <div onClick={this.handleClick} className='flex-container'>
        <div className='slider-container background-off'>
          <div className='slider off'></div>
        </div>
        <p>OFF</p>
      </div>);
    } else if (this.state.isOn === true) {
      return (
      <div onClick={this.handleClick} className='flex-container'>
        <div className='slider-container background-on'>
          <div className='slider on'></div>
        </div>
        <p>ON</p>
    </div>);
    }
  }
}
