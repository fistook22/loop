import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import StopIcon from "@mui/icons-material/Stop";
import LoopIcon from "@mui/icons-material/Loop";
import { Button } from "@mui/material";

function Controls({ setIsStop, setIsLoop, isStop, isLoop }) {
  const onClickPlay = () => {
    setIsStop(false);
  };

  const OnClickLoop = () => {
    setIsLoop((prev) => !prev);
  };

  const onClickStop = () => {
    setIsStop(true);
  };

  const buttonsStyle = {
    height: "50px",
    width: "50px",
    marginLeft: "48%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  return (
    <div id="controls" style={buttonsStyle}>
      <Button
        variant="outlined"
        size="large"
        style={{ backgroundColor: isStop ? "#F1F2EB" : "#ADBEC2" }}
        startIcon={<PlayArrowIcon />}
        onClick={() => onClickPlay()}
      ></Button>
      <Button
        variant="outlined"
        size="large"
        color="error"
        style={{ backgroundColor: !isStop ? "#F1F2EB" : "#ADBEC2" }}
        startIcon={<StopIcon />}
        onClick={() => onClickStop()}
      ></Button>
      <Button
        variant="outlined"
        size="large"
        color="success"
        style={{ backgroundColor: !isLoop ? "#F1F2EB" : "#ADBEC2" }}
        startIcon={<LoopIcon />}
        onClick={() => OnClickLoop()}
      ></Button>
    </div>
  );
}

export default Controls;
