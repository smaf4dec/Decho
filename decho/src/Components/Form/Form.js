import React, { Component } from 'react';
import axios from 'axios';

export default class UserForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      handle: '',
      politicalLean: 'right',
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
      <form onSubmit={this.mySubmitHandler} >
        <h1>@{this.state.handle}</h1>
        <p>Twitter Handle:</p>
        <input
          type='text'
          name='handle'
          onChange={this.myChangeHandler}
        />
        <p>Political Leaning:</p>
        <select name='politicalLean' defaultValue="right" onChange={this.myChangeHandler}>
          <option value="left">Left</option>
          <option value="right">right</option>
        </select>
        <input className={"btn btn-primary"}
          type='submit'
        />
      </form>
    );
  }
}
