import "./App.css";
import { useState } from "react";
import Channel from "./components/channel/channel";
import Controls from "./components/controls";
import { audioSamples } from "./constants/data";
import MusicSlider from "./components/slider";

function App() {
  const [isStop, setIsStop] = useState(true);
  const [isLoop, setIsLoop] = useState(true);
  const [runningMusicSec, setRunningMusicSec] = useState(0); // corresponds to the audio currentTime attribute.
  const [runningChannelMusic, setRunningChannelMusic] = useState(0); // Drag & Drop slider value.

  const onChangeDragAndDrop = (value) => {
    setRunningMusicSec(value);
    setRunningChannelMusic(value);
    console.log(value);
  };

  return (
    <div className="App">
      {audioSamples.map((audio, i) => {
        return (
          <Channel
            audioSound={audio}
            key={i}
            isStop={isStop}
            isLoop={isLoop}
            runningChannelMusic={runningChannelMusic}
          />
        );
      })}
      <MusicSlider
        isLoop={isLoop}
        isStop={isStop}
        setRunningMusicSec={setRunningMusicSec}
        runningMusicSec={runningMusicSec}
        onChangeDragAndDrop={onChangeDragAndDrop}
      />
      <Controls
        setIsStop={setIsStop}
        setIsLoop={setIsLoop}
        isStop={isStop}
        isLoop={isLoop}
      />
    </div>
  );
}

export default App;
