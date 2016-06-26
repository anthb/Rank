import React, { Component, PropTypes } from 'react';


const results = [
  {
    name: "Anthony",
    score: 1600
  },
  {
    name: "John",
    score: 1550
  }
];

class RankingList extends Component { // eslint-disable-line react/prefer-stateless-function

  render() {
    return (
      <div>
      {results.map((item, index) => (
        <div>{item.name} | {item.score}</div>
      ))}
      </div>
    )
  }

}

export default RankingList;
