import logo from "./logo.svg";
import "./App.css";
import audios from "./constants/audio";
import { useState } from "react";
import Channel from "./components/channel/channel";
import Controls from "./components/controls";
import { audioSamples } from "./constants/data";
import { Slider } from "@mui/material";



function App() {
  const [isStop, setIsStop] = useState(true);
  const [isLoop, setIsLoop] = useState(true);
  const [percentage, setPercentage] = useState(0);

  const onChange = (e) => {
    setPercentage(e.target.value)
  }


  return (
    <div className="App">
      <Slider onChange={onChange} percentage={percentage}/>
      {audioSamples.map((audio, i) => {
        return <Channel audioSound={audio} key={i} isStop={isStop} />;
      })}
      <Controls setIsStop={setIsStop} setIsLoop={setIsLoop}/>
    </div>
  );
}

export default App;
