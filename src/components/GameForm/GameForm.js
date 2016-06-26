import React, { Component, PropTypes } from 'react';


class GameForm extends Component { // eslint-disable-line react/prefer-stateless-function

  constructor() {
    super();
    this.state = {
      playerOne: "Not chosen"
    }
    this.update = this.update.bind(this)
  }

  render() {
    console.log(this.state)
    return (
      <div>
        Chosen player -- {this.state.playerOne} --
        <select onChange={this.update}>
          <option>Anthony</option>
          <option>John</option>
          <option>Mark</option>
        </select>
      </div>
    )
  }

  update(event) {
    this.setState({playerOne: event.currentTarget.value});
  }

}

export default GameForm;
