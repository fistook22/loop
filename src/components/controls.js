import React, {useState, useEffect} from "react";
import audios from "../constants/audio";
import Channel from "./channel/channel";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import StopIcon from '@mui/icons-material/Stop';
import LoopIcon from '@mui/icons-material/Loop';
import { Button } from "@mui/material";

function Controls({setIsStop, setIsLoop}) {
    const onClickPlay = () => {
        setIsStop(false)
    };


    const OnClickLoop = () => {
        setIsLoop(prev=>!prev)
    }

    const onClickStop = () => {
        setIsStop(true)
    }

    return (
        <div id="controls">
        <Button variant="outlined" color="primary" startIcon={<PlayArrowIcon/>} onClick={() => onClickPlay()}></Button>
        <Button variant="outlined" color="error" startIcon={<StopIcon/>} onClick={() => onClickStop()}></Button>
        <Button variant="outlined" color="success" startIcon={<LoopIcon/>} onClick={() => OnClickLoop()}></Button>
        </div>
    )
}

export default Controls;