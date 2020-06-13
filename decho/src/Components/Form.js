import React, { Component } from 'react';

export default class UserForm extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      handle: '',
      politicalLean: null,
    };
  }

  mySubmitHandler = (event) => {
    event.preventDefault();
    alert("You are submitting " + this.state.handle);
    this.props.changePage();
  }

  myChangeHandler = (event) => {
    let nam = event.target.name;
    let val = event.target.value;
    this.setState({[nam]: val});
  }
  render() {
    return (
      <form onSubmit={this.mySubmitHandler}>
      <h1>@{this.state.handle}</h1>
      <p>Twitter Handle:</p>
      <input
        type='text'
        name='handle'
        onChange={this.myChangeHandler}
      />
      <p>Political Leaning:</p>
      <select name='politicalLean' onChange={this.myChangeHandler}>
        <option value="left">Left</option>
        <option value="right" defaultValue>right</option>
      </select>
      <input className={"btn btn-primary"}
        type='submit'
      />
      </form>
    );
  }
}
