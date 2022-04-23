import React from "react";
import { useState, useEffect } from "react";
import Slider from "@mui/material/Slider";

function MusicSlider({
  isLoop,
  isStop,
  runningMusicSec,
  setRunningMusicSec,
  onChangeDragAndDrop,
}) {
  
  useEffect(() => {
    if (!isStop && runningMusicSec <= 16) {
      const interval = setInterval(() => {
        console.log("This will run every second!", runningMusicSec);
        setRunningMusicSec((prev) => prev + 0.3);
      }, 200);
      return () => clearInterval(interval);
    } else if (!isLoop){
      runningMusicSec = {isStop};
    } 
    else {
      setRunningMusicSec(0);
    }
  }, [isLoop, isStop, runningMusicSec]);

  return (
    <div style={{ padding: "10px 20px" }}>
      <Slider
        value={runningMusicSec}
        min={0}
        max={16}
        onChange={(e) => onChangeDragAndDrop(e.target.value)}
      />
    </div>
  );
}

export default MusicSlider;
