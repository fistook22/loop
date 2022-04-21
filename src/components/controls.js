import React, {useState, useEffect} from "react";
import audios from "../constants/audio";
import Channel from "./channel";

function Controls({text, isStop, isPlay}) {
    const [variableName, setVariableName] = useState(0);
    const [action, setAction] = useState(false)
    const ButtonPreesed = () => {
        if (action) {
            setAction(true);
        } else setAction(false)
    };

    useEffect(() => {
        PlayAll();
    }, [action, isPlay]);

    useEffect(() => {
        StopAll();
    }, [action, isStop]);

    const PlayAll = () => {
        if (action) {
            audios.play()
        } else {
            audios.pause()
        }
        
    }

    const StopAll = () => {
        if (!action) {
            audios.pause()
        } else {
            audios.play()
        }
    }

    return (
        <div id="controls">
        <button onClick={() => ButtonPreesed()}>Play</button>
        <button onClick={() => ButtonPreesed()}>Stop</button>
        </div>
    )
}

export default Controls;