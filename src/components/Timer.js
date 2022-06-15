import { useState, useEffect } from "react";

const Timer = (props) => {
  const [time, setTime] = useState(0);
  const [timerOn, setTimerOn] = useState(false);

  useEffect(() => {
    let interval = null;
    if (props.count >= 1 && props.count <= 30) {
      interval = setInterval(setTime(prevTime => prevTime +10), 10);
    } else if (props.count === 31) {
      return () => clearInterval(interval);
    }
  }, [props.count, time, timerOn]);
  return <h2>Time: {time}</h2>;
};

export default Timer;
