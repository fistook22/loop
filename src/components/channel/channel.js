import { Switch } from "@mui/material";
import React, { useState, useEffect } from "react";
import audio from "../../constants/audio";
import { audioSamples } from "../../constants/data";

function Channel({ isLoop, audioSound, isStop, runningChannelMusic }) {
  const [channelIsMute, setChannelIsMute] = useState(true);
  const ChannelOnOff = () => {
    setChannelIsMute((prev) => !prev);
  };

  const [audio] = useState(new Audio(audioSound.audio));

  useEffect(() => {
    PlayAudio();
    LoopAudio();
    MuteAudio();
  }, [channelIsMute, isStop, isLoop]);

  useEffect(() => {
    audio.currentTime = runningChannelMusic;
  }, [runningChannelMusic]);

  const LoopAudio = () => {
    if (isLoop) {
      audio.loop = true;
    } else {
      audio.loop = false;
    }
  };

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

  const channelStyleContainer = {
    backgroundColor: audioSound.backgroundColor,
    padding: "4px 10px",
    height: "80px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  const imgStyle = {
    height: "60px",
    width: "50px",
    borderRadius: "40%",
    padding: "4px 10px",
  };

  return (
    <div style={channelStyleContainer}>
      <div>
        <p>{audioSound.name}</p>
        <Switch checked={channelIsMute} onClick={() => ChannelOnOff()} />
      </div>
      <img style={imgStyle} src={channelIsMute?"https://i.gifer.com/1MFu.gif":"https://cdn-icons-png.flaticon.com/128/565/565295.png"} />
    </div>
  );
}

export default Channel;
