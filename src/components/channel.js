import React, { useState, useEffect } from "react";
import audio from "../constants/audio";

function Channel({ text, audioSound, isStop }) {
  const [variableName, setVariableName] = useState(0);
  const [channelIsOn, setChannelsOn] = useState(true);
  const ChannelsOnOff = () => {
    if (channelIsOn) {
      setChannelsOn(false);
    } else setChannelsOn(true);
  };

  const [audio] = useState(new Audio(audioSound));

  useEffect(() => {
    PlayAudio();
  }, [channelIsOn, isStop]);

  const PlayAudio = async () => {
    try {
      if (channelIsOn) {
        audio.play();
        audio.loop = true;
        audio.volume = 1.0;
      } else {
        audio.volume = 0.0;
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
        {!channelIsOn && <button onClick={() => ChannelsOnOff()}>Play</button>}
        {channelIsOn && <button onClick={() => ChannelsOnOff()}>Mute</button>}
      </div>
    </div>
  );
}

export default Channel;
