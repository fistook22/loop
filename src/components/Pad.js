import React, { useState, useEffect } from "react";
import audio from "../constants/audio";

function Pad({ text, audioSound, isStop }) {
  const [variableName, setVariableName] = useState(0);
  const [playSong, setPlaySong] = useState(true);
  const [playStatus, setPlayStatus] = useState("on");
  const muteThisSong = () => {
    if (playSong) {
      setPlaySong(false);
    } else setPlaySong(true);
  };

  const [audio] = useState(new Audio(audioSound));

  useEffect(() => {
    handleChangePlaySong();
  }, [playSong, isStop]);

  const handleChangePlaySong = async () => {
    try {
      if (playSong && isStop) {
        await audio.play();
        audio.loop = true;
      } else {
        audio.pause();
      }
    } catch {}
  };

  return (
    <div className="this">
      <div>
        <p>
          {text}
          {variableName}
        </p>
        <button onClick={() => muteThisSong()}>play</button>
        {playSong && <button onClick={() => muteThisSong()}>mute</button>}
      </div>
    </div>
  );
}

export default Pad;
