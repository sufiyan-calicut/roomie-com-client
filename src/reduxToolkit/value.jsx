import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "./valueReducer";
function Value() {
  const value = useSelector((state) => {
    return state.value;
  });

  const dispatch = useDispatch();
  return (
    <div>
      <button
        onClick={() => {
          dispatch(increment());
        }}
      >
        increment
      </button>
      <h1>{value}</h1>
      <button
        onClick={() => {
          dispatch(decrement());
        }}
      >
        decrement
      </button>
    </div>
  );
}

export default Value;
