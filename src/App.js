import logo from "./logo.svg";
import "./App.css";
import Pad from "./components/Pad";
import audios from "./constants/audio";
import { useState } from "react";
import Channel from "./components/channel";

function App() {
  const [isStop, setIsStop] = useState(true);

  return (
    <div className="App">
      {audios.map((audio, i) => {
        return <Channel audioSound={audio} key={i} isStop={isStop} text={audio} />;
      })}

      <button>play</button>
      <button>stop</button>
      <button>loop</button>
    </div>
  );
}

export default App;
