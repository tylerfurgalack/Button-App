import { useState, useEffect, useMemo } from "react";
import "./button.css";
import WordCounter from "./WordCounter";
//"Boşalmak"
const Button = (props) => {
  const [showBosalmak, setShowBosalmak] = useState(false);
  useEffect(() => {
    if (props.count === 31) {
      setTimeout(() => {
        setShowBosalmak(true);
        setTimeout(() => {
          props.setCount(0);
          setShowBosalmak(false);
        }, 3000);
      }, 2000);
    }
  }, [props.count, props.setCount]);
  const className = useMemo(() => {
    if(props.count >= 31) {
      return "wordCountContainer flash"
    } else {
      return "wordCountContainer"
    }
  }, [props.count]);
  
  return (
    <div className="container">
      <div className={className}>
        <h1 className="wordCountText">{props.count}</h1>
      </div>
      <div className="buttonContainer">
        <button
          className="button"
          onClick={() => props.setCount(props.count + 1)}
          disabled={props.count >= 31}
        >
          Keep Clicking
        </button>
      </div>
      <div className={className}>
        <h1 className="wordCountText">
          <WordCounter numCount={props.count} showBosalmak={showBosalmak}/>
        </h1>
      </div>
    </div>
  );
};

export default Button;
