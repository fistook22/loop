import React from "react";
import { useState, useEffect } from "react";
import Slider from "@mui/material/Slider";
import audio from "../constants/audio";
import { audioSamples } from "../constants/data";

function Slider({ setIsStop }) {
    if(!setIsStop){
      Slider.value = Slider.offsetLeft;
        seekto = audio.duration * (seekslider.value / 100);
        audio.currentTime = seekto;
    }
  return <Slider type="range" min="0" max="100" value="0" step="1"/>;
}

export default Slider;
