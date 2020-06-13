import React, { Component } from 'react';

export default class UserForm extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      age: null,
    };
  }

  mySubmitHandler = (event) => {
    event.preventDefault();
    alert("You are submitting " + this.state.username);
  }

  myChangeHandler = (event) => {
    let nam = event.target.name;
    let val = event.target.value;
    this.setState({[nam]: val});
  }
  render() {
    return (
      <form onSubmit={this.mySubmitHandler}>
      <h1>Hello {this.state.username} {this.state.age}</h1>
      <p>Enter your name:</p>
      <input
        type='text'
        name='username'
        onChange={this.myChangeHandler}
      />
      <p>Enter your age:</p>
      <input
        type='text'
        name='age'
        onChange={this.myChangeHandler}
      />
      <select onChange={this.myChangeHandler}>
        <option value="Ford">Ford</option>
        <option value="Volvo" defaultValue>Volvo</option>
        <option value="Fiat">Fiat</option>
      </select>
      <input
        type='submit'
      />
      </form>
    );
  }
}
