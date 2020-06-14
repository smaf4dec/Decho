import React, { Component } from 'react';
import 'Components/Form/Form.styles.css';
import {ReactComponent as DeChoLogo} from 'assets/logo-orange-sm.svg';
// import './Form.styles.css';

export default class UserForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      handle: '',
      politicalLean: 'Right',
      selectedOption: 'option1'
    };
  }

  mySubmitHandler = (event) => {
    event.preventDefault();
    alert('You are submitting ' + this.state.handle);
    console.log(this.state.politicalLean);
    this.props.changePage(this.state.politicalLean);
  };

  myChangeHandler = (event) => {
    let nam = event.target.name;
    let val = event.target.value;
    console.log(val);
    this.setState({ [nam]: val });
  };
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
