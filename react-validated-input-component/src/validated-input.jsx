import React from 'react';

export default class ValidatedInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      password: ''
    };
    this.handlePassword = this.handlePassword.bind(this);
  }

  handlePassword(e) {
    this.setState({ password: e.target.value });
  }

  render() {
    let validateIcon;
    let warning;

    if (this.state.password.length === 0) {
      warning = 'A password is required.';
      validateIcon = <i className="fa-sharp fa-solid fa-xmark"></i>;
      return (
      <div>
        <div>
          <form className='flex-container'>
            <label htmlFor="password">Password:</label>
            <input type="password" id='password' value={this.state.password} onChange={this.handlePassword}/>
            <span>
              {validateIcon}
            </span>
          </form>
        </div>
        <p className='error'>{warning}</p>
      </div>
      );
    }
    if (this.state.password.length > 0 && this.state.password.length <= 7) {
      warning = 'Your password is too short.';
      validateIcon = <i className="fa-sharp fa-solid fa-xmark"></i>;
      return (
      <div>
        <div>
          <form className='flex-container'>
            <label htmlFor="password">Password:</label>
            <input type="password" id='password' value={this.state.password} onChange={this.handlePassword}/>
            <span>
              {validateIcon}
            </span>
          </form>
        </div>
        <p className='error'>{warning}</p>
      </div>
      );
    }
    if (this.state.password.length >= 8) {
      validateIcon = <i className="fa-sharp fa-solid fa-check"></i>;
      return (
      <div>
        <div>
          <form className='flex-container'>
            <label htmlFor="password">Password:</label>
            <input type="password" id='password' value={this.state.password} onChange={this.handlePassword}/>
            <span>
              {validateIcon}
            </span>
          </form>
        </div>
      </div>
      );
    }

  }
}
