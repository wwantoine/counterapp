import React from "react";
import Box from "../../components/box";

let initialState = {
  count: 0,
  color: "red",
  boxList: [],
};

const countReducer = (state = initialState, action) => {
  let { type, payload } = action;

  switch (type) {
    case "INCREMENT":
      state.count++;
      state.boxList.push(
        <div
          style={{
            width: "300px",
            height: "200px",
            border: "2px solid black",
            backgroundColor: state.color,
          }}
        >
          <h1>Colorful box</h1>
        </div>
      );
      return { ...state };

    case "DECREMENT":
      if (state.count > 0) {
        state.count--;
        state.boxList.splice(state.boxList.length - 1, 1);
        return { ...state };
      }

    case "RESET":
      state.count = 0;
      state.boxList = [];
      return { ...state };

    case "CHANGE_COLOR":
      state.color = payload;
      return { ...state };

    case "CHANGE_SINGLE_COLOR":
      state.singleColor = payload;
      return { ...state };

    default:
      return { ...state };
  }
};

export default countReducer;
