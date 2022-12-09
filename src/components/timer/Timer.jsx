import "./timer.css";
import { AiFillPlayCircle, GrPowerReset } from "../icons";
import { useTimer } from "react-timer-hook";
import { useEffect } from "react";
import audioSound from "./mixkit-retro-game-notification-212.wav";
import { useData } from "../../context/data-context";

const Timer = ({ expiryTimestamp }) => {
  const { focusDuration, focusMode, setFocusMode, breakMode, setBreakMode } = useData();
  const { seconds, minutes, isRunning, resume, pause, restart } = useTimer({
    expiryTimestamp,
    onExpire: () => console.warn("onExpire called"),
  });

  const audioToPlay = new Audio(audioSound);
  audioToPlay.loop = true;

  if (seconds === 0 && minutes === 0) {
    audioToPlay.loop = true;
    audioToPlay.play();
  } else {
    audioToPlay.loop = false;
  }

  useEffect(() => {
    return pause;
  }, []);

  return (
    <div className="wrapper flex-col-sb">
      <div>
        <button className="btn btn-primary p-sm m-1 text-regular">Focus</button>
        <button className="btn p-sm m-1 br-10 text-regular">Break</button>
      </div>
      <div className="timer-box text-center">
        {minutes}:{seconds}
      </div>

      <div className="center">
        <button
          className="btn p-sm m-1 text-regular btn-timer flex-row-sb"
          onClick={resume}
          disabled={isRunning ? true : false}
        >
          Start
          <AiFillPlayCircle size={24} className="ml-sm" />
        </button>
        <button
          className="btn p-sm m-1 br-10 text-regular btn-timer flex-row-sb"
          onClick={() => {
            const time = new Date();
            time.setSeconds(time.getSeconds() + 60 * focusDuration);
            restart(time);
            pause(time);
          }}
          disabled={isRunning ? false : true}
        >
          Reset
          <GrPowerReset size={24} className="ml-sm" />
        </button>
      </div>
    </div>
  );
};

export { Timer };
