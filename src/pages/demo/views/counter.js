import React, { memo } from "react";

const Counter = ({ number, setNumber }) => {
  console.log("From counter at component");

  const onClickHandler = () => setNumber(number + 1);
  
  return (
    <div>
      <h2>Counter at child component {number}</h2>
      <button onClick={onClickHandler}>Up</button>
    </div>
  );
};

export default memo(Counter);