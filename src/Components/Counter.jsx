import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa6";
import { Card, Button } from "@mui/material";
import { useSpring, animated } from "react-spring";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, reset } from "../stores/counterSlice";
const Counter = () => {
  const dispatch = useDispatch();
  const counterValue = useSelector((state) => state.counter.value);

  const backgroundStyle = useSpring({
    backgroundColor: `rgb(${Math.min(counterValue * 10, 255)}, ${Math.max(
      255 - counterValue * 10,
      0
    )}, 255)`,
  });

  return (
    <Card
      sx={{
        Width: 400,
        borderRadius: 3,
        boxShadow: 3,
        transition: "0.3s",
        "&:hover": { boxShadow: 6 },
      }}
      className="m-4"
    >
      <animated.div style={{ ...backgroundStyle }}>
        <div className="p-5 flex flex-col w-[400px] items-center gap-5 ">
          <p className="text-4xl">{counterValue}</p>
          <p className="text-3xl mt-[-10px]">Counter</p>
          <div className="flex gap-2">
            <Button variant="contained" onClick={() => dispatch(increment())}>
              <FaPlus />
            </Button>
            <Button variant="contained" onClick={() => dispatch(reset())}>
              Reset
            </Button>
            <Button
              variant="contained"
              onClick={() => (counterValue != 0 ? dispatch(decrement()) : "")}
            >
              <FaMinus />
            </Button>
          </div>
        </div>
      </animated.div>
    </Card>
  );
};

export default Counter;
