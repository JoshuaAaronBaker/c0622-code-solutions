import React from 'react';

export default class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: props.images,
      currentIndex: 0,
      intervalID: null
    };
    this.handleForward = this.handleForward.bind(this);
    this.handleBack = this.handleBack.bind(this);
    this.handleInterval = this.handleInterval.bind(this);
    this.handleCircleClick = this.handleCircleClick.bind(this);
  }

  handleForward(event) {
    clearInterval(this.state.intervalID);
    this.setState({ currentIndex: this.state.currentIndex + 1 });
    if (this.state.currentIndex === this.state.images.length - 1) {
      this.setState({ currentIndex: 0 });
    }
    this.handleInterval();
  }

  handleBack(event) {
    clearInterval(this.state.intervalID);
    this.setState({ currentIndex: this.state.currentIndex - 1 });
    if (this.state.currentIndex === 0) {
      this.setState({ currentIndex: this.state.images.length - 1 });
    }
    this.handleInterval();
  }

  handleCircleClick(event) {
    clearInterval(this.state.intervalID);
    const id = Number(event.target.getAttribute('data-id'));
    this.setState({ currentIndex: id });
    this.handleInterval();
  }

  handleInterval() {
    this.setState({
      intervalID: setInterval(() => {
        this.setState({ currentIndex: this.state.currentIndex + 1 });
        if (this.state.currentIndex === this.state.images.length - 1) {
          this.setState({ currentIndex: 0 });
        }
      }, 3000)
    });
  }

  componentDidMount() {
    this.handleInterval();
  }

  render() {
    const circles = this.state.images.map((image, index) => {
      if (this.state.currentIndex === index) {
        return <i className="fa-solid fa-skull spacing" data-id= {index } onClick={this.handleCircleClick} key={index}/>;
      } else {
        return <i className="far fa-circle spacing" data-id={index} onClick={this.handleCircleClick} key={index}/>;
      }
    });

    const image = this.state.images[this.state.currentIndex];

    return (
      <>
        <div className="row justify-space-around align-center">
          <div className="column-flex">
            <i className="fas fa-chevron-left sizing" onClick={this.handleBack}></i>
          </div>
          <div className="column-flex text-align-center">
            <img className="img" src={image} />
          </div>
          <div className="column-flex">
            <i className="fas fa-chevron-right sizing" onClick= {this.handleForward}></i>
          </div>
        </div>
        <div className="row text-align-center">
          <div className="column-full">
            { circles }
          </div>
        </div>
      </>
    );
  }
}
