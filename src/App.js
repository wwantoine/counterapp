import React from "react";
import "./App.css";
import Box from "./components/box";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.count);
  const boxList = useSelector((state) => state.boxList);
  const increase = () => {
    dispatch({ type: "INCREMENT" });
  };
  const decrease = () => {
    dispatch({ type: "DECREMENT" });
  };
  const reset = () => {
    dispatch({ type: "RESET" });
  };
  const changeColor = (event) => {
    dispatch({ type: "CHANGE_COLOR", payload: event.target.value });
  };

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => increase()}>Increase</button>
      <button onClick={() => decrease()}>Decrease</button>
      <button onClick={() => reset()}>Reset</button>
      <input
        placeholder="Color"
        onChange={(event) => changeColor(event)}
      ></input>
      {boxList.map((color, index) => (
        <Box id={index} />
      ))}
      {console.log(boxList)}
    </div>
  );
}

export default App;
