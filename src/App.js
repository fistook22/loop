import logo from "./logo.svg";
import "./App.css";
import audios from "./constants/audio";
import { useState } from "react";
import Channel from "./components/channel/channel";
import Controls from "./components/controls";
import { audioSamples } from "./constants/data";
import MusicSlider from "./components/slider";

function App() {
  const [isStop, setIsStop] = useState(true);
  const [isLoop, setIsLoop] = useState(true);
  const [runningMusicSec, setRunningMusicSec] = useState(0);
  const [runningChannelMusic, setRunningChannelMusic] = useState(0);

  const onChangeDragAndDrop = (value) => {
    setRunningMusicSec(value)
    setRunningChannelMusic(value)
    console.log(value)
  };


  return (
    <div className="App">
      {audioSamples.map((audio, i) => {
        return (
          <Channel audioSound={audio} key={i} isStop={isStop} isLoop={isLoop} runningChannelMusic={runningChannelMusic} />
        );
      })}
      <MusicSlider
        isLoop={isLoop}
        isStop={isStop}
        setRunningMusicSec={setRunningMusicSec}
        runningMusicSec={runningMusicSec}
        onChangeDragAndDrop={onChangeDragAndDrop}
      />
      <Controls setIsStop={setIsStop} setIsLoop={setIsLoop} isStop={isStop} isLoop={isLoop}/>
    </div>
  );
}

export default App;
