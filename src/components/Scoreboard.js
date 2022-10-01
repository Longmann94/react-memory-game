import React from 'react';

const Scoreboard = (props) => {

  return (
    <div className="scoreboard">
      Current Score = {props.score}   Best score = {props.bestScore}
    </div>
  );
}


export default Scoreboard;
