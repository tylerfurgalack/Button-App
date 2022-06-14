import { useState, useEffect } from "react";

const Timer = (props) => {
  const [timer, setTimer] = useState(0);
  useEffect(() => {
    if (props.count > 0) {
      setTimeout(() => {
        setTimer(timer + 1);
      }, 1000);
    } else if (props.count === 31) {
        setTimer(timer);
    }
  }, [props.count, timer]);
  return <h2>Time: {timer}</h2>;
};

export default Timer;
