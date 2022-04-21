import { Switch } from "@mui/material";
import React, { useState, useEffect } from "react";
import audio from "../../constants/audio";
import { audioSamples } from "../../constants/data";


function Channel({ text, audioSound, isStop }) {
  const [channelIsOn, setChannelOn] = useState(true);
  const ChannelOnOff = () => {
    if (channelIsOn) {
      setChannelOn(false);
    } else setChannelOn(true);
  };

  const [audio] = useState(new Audio(audioSound.audio));

  useEffect(() => {
    PlayAudio();
  }, [channelIsOn, isStop]);

  const PlayAudio = async () => {
    try {
      if (!isStop && channelIsOn) {
        await audio.play();
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
        <p>{audioSound.name}</p>
        {!channelIsOn && <Switch onClick={() => ChannelOnOff()}>Play</Switch>}
        {channelIsOn && (
          <Switch checked onClick={() => ChannelOnOff()}>
            Mute
          </Switch>
        )}
      </div>
    </div>
  );
}

export default Channel;
