import React from "react";

const Result = (props) => {

    if (props.win) {
    return <div>You win!</div>;
  } else if (props.count > 5) {
    return <div>You lose!</div>;
  } else {
    return <div></div>;
  }
};

export default Result;
