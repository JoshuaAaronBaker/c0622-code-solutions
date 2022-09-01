import React from 'react';

export default class HotButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicks: 0
    };
    this.dropItLikeItsHot = this.dropItLikeItsHot.bind(this);
  }

  dropItLikeItsHot() {
    this.setState({ clicks: this.state.clicks + 1 });
  }

  render() {
    if (this.state.clicks < 4) {
      return <button onClick={this.dropItLikeItsHot} className='cold-button'>Hot Button</button>;
    } else if (this.state.clicks < 7) {
      return <button onClick={this.dropItLikeItsHot} className='cool-button'>Hot Button</button>;
    } else if (this.state.clicks < 10) {
      return <button onClick={this.dropItLikeItsHot} className='warmish-button'>Hot Button</button>;
    } else if (this.state.clicks < 13) {
      return <button onClick={this.dropItLikeItsHot} className='warmer-button'>Hot Button</button>;
    } else if (this.state.clicks < 16) {
      return <button onClick={this.dropItLikeItsHot} className='hot-button'>Hot Button</button>;
    } else if (this.state.clicks >= 16) {
      return <button onClick={this.dropItLikeItsHot} className='nuclear-button'>Hot Button</button>;
    }
  }
}
