import React, { Component } from 'react'
import ShowProfile from './ShowProfile'

export default class Welcome extends Component {
  handleClick = () => {
    // function to display obama's twitter
    console.log("button clicked")

  }

  render() {
    return (
      <div>
        <div>
          <button onClick={() => this.handleClick()} >Reverse Trump's Twitter</button>
        </div>
        <div>
          <ShowProfile/>
        </div>
      </div>
    )
  }
}
