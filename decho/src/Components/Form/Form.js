import React, { Component } from 'react';
import axios from 'axios';
import 'Components/Form/Form.styles.css';
import { ReactComponent as DeChoLogo } from 'assets/logo-orange-sm.svg';
// import './Form.styles.css';
export default class UserForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      handle: '',
      politicalLean: 'right',
      selectedOption: 'option1',
    };
  }

  mySubmitHandler = (event) => {
    event.preventDefault();
    this.props.changePage(this.state.politicalLean);
    this.postToServer();
  };

  myChangeHandler = (event) => {
    let nam = event.target.name;
    let val = event.target.value;
    this.setState({ [nam]: val });
  };

  postToServer = () => {
    const handle = this.state.handle;
    const lean = this.state.politicalLean;
    if (handle !== undefined && lean !== undefined) {
      axios.post('https://deco-db.herokuapp.com/users', {
        twitterHandle: handle,
        lean: lean,
      });
    }
  };

  render() {
    return (
      <form onSubmit={this.mySubmitHandler}>
        <h4>
          {' '}
          <DeChoLogo /> {this.state.handle}
        </h4>
        <div class="input-icons">
          <i class="fa fa-twitter icon" aria-hidden="true"></i>
          <input
            id="search-bar"
            type="text"
            name="handle"
            placeholder="Twitter Handle"
            onChange={this.myChangeHandler}
          />
        </div>
        <div className="politicalLean__input">
          <div className="form__radio__label" id="title">
            Political Leaning:
          </div>
          <div className="form__radio__group">
            <input type="radio" className="form__radio__input" id="left" name="size" />
            <label htmlFor="left" className="form__radio__label" id="left">
              <span className="form__radio-button"></span>
              Left
            </label>
          </div>
          <div className="form__radio__group">
            <input type="radio" className="form__radio__input" id="right" name="size" />
            <label htmlFor="right" className="form__radio__label" id="right">
              <span className="form__radio-button"></span>
              Right
            </label>
          </div>
        </div>

        <br />
        <button className="btn btn-primary" type="submit">
          Submit
        </button>
      </form>
    );
  }
}
