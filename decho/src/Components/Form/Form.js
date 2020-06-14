import React, { Component } from 'react';
import axios from 'axios';

export default class UserForm extends Component {

import 'Components/Form/Form.styles.css';
import {ReactComponent as DeChoLogo} from 'assets/logo-orange-sm.svg';
// import './Form.styles.css';

export default class UserForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      handle: '',
      politicalLean: 'right',
      selectedOption: 'option1'
    };
  }

  mySubmitHandler = (event) => {
    event.preventDefault();
    this.props.changePage(this.state.politicalLean);
    this.postToServer()
  }

  myChangeHandler = (event) => {
    let nam = event.target.name;
    let val = event.target.value;
    this.setState({ [nam]: val });
  }

  postToServer = () => {
    const handle = this.state.handle
    const lean = this.state.politicalLean
    if (handle !== undefined && lean !== undefined) {
      axios.post('https://deco-db.herokuapp.com/users', {
        twitterHandle: handle,
        lean: lean
      })
    }
  }

  render() {
    return (
      <form onSubmit={this.mySubmitHandler}>
        <h4> <DeChoLogo/> {this.state.handle}</h4>
        <input type="text" name="handle" placeholder="Twitter Handle" onChange={this.myChangeHandler} />
        <p>Political Leaning:</p>
        <select name="politicalLean" defaultValue="right" onChange={this.myChangeHandler}>
          <option value="left">Left</option>
          <option value="right">Right</option>
        </select>
        <button className="btn btn-primary" type="submit">Submit</button>
      </form>
    );
  }
}
