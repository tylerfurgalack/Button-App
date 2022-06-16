import { useState, useEffect } from "react";
import "./button.css";
let interval = null;
const Timer = (props) => {
  const [time, setTime] = useState(0);
  const [highScore, setHighScore] = useState(0);
  useEffect(() => {
    if (
      props.count === 5 &&
      (time < highScore || highScore === 0) &&
      time !== 0
    ) {
      setHighScore(time);
    }
  }, [time, props.count, highScore]);
  useEffect(() => {
    if (props.showBosalmak) {
      setTime(0);
    }
    if (props.count === 1) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else if (props.count === 5) {
      clearInterval(interval);
    }
  }, [props.showBosalmak, props.count]);
  console.log(props.count);
  return (
    <div className="timerContainer">
      <h2>
        Time: <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}</span>:
        <span>{("0" + ((time / 10) % 100)).slice(-2)}</span>
      </h2>
      <h2>High Score:{highScore} </h2>
    </div>
  );
};

export default Timer;
