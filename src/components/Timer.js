import { useState, useEffect } from "react";

const Timer = (props) => {
  const [time, setTime] = useState(0);

  useEffect(() => {
    let interval = null;

    if (props.count >= 1 && props.count <= 4) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else if (props.showBosalmak) {
      return setTime(0);
    } else if (props.count === 5) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [props.count, time, props.showBosalmak]);
  return (
    <h2>
      Time: <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}</span>:
      <span>{("0" + ((time / 10) % 100)).slice(-2)}</span>
    </h2>
  );
};

export default Timer;
