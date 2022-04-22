import { Switch } from "@mui/material";
import React, { useState, useEffect } from "react";
import audio from "../../constants/audio";
import { audioSamples } from "../../constants/data";
// import useStyles from "./style";

function Channel({ isLoop, audioSound, isStop }) {
  const [channelIsMute, setChannelIsMute] = useState(true);
  // const classes = useStyles({backgroundColor: audioSound.backgroundColor});
  const ChannelOnOff = () => {
    setChannelIsMute(prev=>!prev)
  };

  const [audio] = useState(new Audio(audioSound.audio));

  useEffect(() => {
    PlayAudio();
    LoopAudio();
    MuteAudio();
  }, [channelIsMute, isStop, isLoop]);

  const LoopAudio = () => {
    if (isLoop) {
      audio.loop = true;
    } else {
      audio.loop = false;
    }
  }

  const MuteAudio = () => {
      if (channelIsMute) {
        audio.volume = 1.0;
      } else {
        audio.volume = 0.0;
      }
  };

  const PlayAudio = async () => {
    try {
      if (!isStop) {
        await audio.play();
      } else {
        audio.pause();
        audio.currentTime = 0;
      }
    } catch {}
  };

  return (
    <div style={{backgroundColor: audioSound.backgroundColor}}>
      <div>
        <p>{audioSound.name}</p>
        <Switch checked={channelIsMute} onClick={() => ChannelOnOff()}/>
      </div>
    </div>
  );
}

export default Channel;
