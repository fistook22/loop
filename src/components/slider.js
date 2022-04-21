import React from "react";
import { useState, useEffect } from "react";
import Slider from "@mui/material/Slider";

const Slider = ({
  colorAfter = "#E1E1E6",
  colorBefore = "#A5AAB2",
  highlighted = "#EB3E3E",
  size = 10,
  value,
  onChange,
  percentage
}) => {
  const percent = value * 100;
  const growTo = size + 1;

  const [hover, setHover] = useState(false);
  const [position, setPosition] = useState(0)

  useEffect(() => {
    setPosition(percentage)
  },[percentage])

  return (
    <Slider
      type="range"
      onMouseOver={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      value={value}
      size={size}
      colorAfter={colorAfter}
      colorBefore={colorBefore}
      highlighted={highlighted}
      percent={percent}
      growTo={growTo}
      seeking={hover}
      onChange={onChange}
    />
  );
};
