import React, { Component } from 'react';
import axios from 'axios';
import 'Components/Form/Form.styles.css';
import { ReactComponent as DeChoLogo } from 'assets/logo-orange-sm.svg';
import twitter from 'assets/twitter.svg';
// import './Form.styles.css';
export default class UserForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      handle: '',
      politicalLean: '',
      selectedOption: 'option1',
    };
  }

  mySubmitHandler = (event) => {
    event.preventDefault();
    this.props.changePage(this.state.politicalLean);
    this.postToServer();
    console.log('clicked', event);
  };

  myChangeHandler = (event) => {
    let nam = event.target.name;
    let val = event.target.val;
    this.setState({ [nam]: val });
    console.log('clicked', val, 'als state', this.state);
  };

  handleRadio = (event) => {
    let nam = event.target.name;
    let val = event.target.id;
    this.setState({ [nam]: val });
    console.log('clicked', val, 'als state', this.state);
  };
  postToServer = () => {
    const { handle, politicalLean } = this.state;
    console.log(this.state, 'whate');
    if (handle !== undefined && politicalLean !== undefined) {
      axios.post('https://deco-db.herokuapp.com/users', {
        twitterHandle: handle,
        lean: politicalLean,
      });
    }
  };

  render() {
    return (
      <form onSubmit={this.mySubmitHandler} style={{ zindex: 20, position: 'absolute' }}>
        <h4>
          {' '}
          <DeChoLogo /> {this.state.handle}
        </h4>
        <div className="input-icons">
          <i className="fa fa-twitter" aria-hidden="true"></i>
          <img
            src={twitter}
            alt=""
            style={{ width: '5%', height: '9%', position: 'absolute', margin: '11px 0px 0px 10px' }}
          />
          <input
            id="search-bar"
            type="text"
            name="handle"
            style={{ paddingLeft: '50px' }}
            placeholder="     Twitter handle"
            onChange={(e) => this.myChangeHandler(e)}
          />
        </div>
        <div className="politicalLean__input">
          <div className="form__radio__label" id="title">
            Political Leaning:
          </div>
          <div className="form__radio__group">
            <input
              type="radio"
              className="form__radio__input"
              id="left"
              name="politicalLean"
              onClick={(e) => this.handleRadio(e)}
            />
            <label htmlFor="left" className="form__radio__label" id="left">
              Left
            </label>
          </div>
          <div className="form__radio__group">
            <input
              type="radio"
              className="form__radio__input"
              id="right"
              name="politicalLean"
              onClick={(e) => this.handleRadio(e)}
            />
            <label htmlFor="right" className="form__radio__label" id="right">
              Right
            </label>
          </div>
        </div>

        <br />
        <button type="submit" onClick={this.mySubmitHandler}>
          Submit
        </button>
      </form>
    );
  }
}
