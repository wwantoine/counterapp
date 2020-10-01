import React from "react";
import { useSelector, useDispatch } from "react-redux";

const Box = (id) => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.count);
  const color = useSelector((state) => state.color);
  const singleColor = useSelector((state) => state.singleColor);
  // const changeSingleColor = (event) => {
  //   dispatch({
  //     type: "CHANGE_SINGLE_COLOR",
  //     payload: event.target.value,
  //   });
  // };
  return (
    <div
      style={{
        width: "300px",
        height: "200px",
        border: "2px solid black",
        backgroundColor: color,
      }}
    >
      <h1>This is a box</h1>
      <input
      // onChange={(event) => changeSingleColor(event)}
      ></input>
    </div>
  );
};

export default Box;
