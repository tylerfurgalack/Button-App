import { useState, useEffect, useMemo } from "react";
import "./button.css";
import WordCounter from "./WordCounter";
//"Boşalmak"
const Button = () => {
  const [count, setCount] = useState(0);
  const [showBosalmak, setShowBosalmak] = useState(false);
  useEffect(() => {
    if (count === 31) {
      setTimeout(() => {
        setShowBosalmak(true);
        setTimeout(() => {
          setCount(0);
          setShowBosalmak(false);
        }, 3000);
      }, 2000);
    }
  }, [count]);
  const className = useMemo(() => {
    if(count >= 31) {
      return "wordCountContainer flash"
    } else {
      return "wordCountContainer"
    }
  }, [count]);
  
  return (
    <div className="container">
      <div className={className}>
        <h1 className="wordCountText">{count}</h1>
      </div>
      <div className="buttonContainer">
        <button
          className="button"
          onClick={() => setCount(count + 1)}
          disabled={count >= 31}
        >
          Keep Clicking
        </button>
      </div>
      <div className={className}>
        <h1 className="wordCountText">
          <WordCounter count={count} showBosalmak={showBosalmak}/>
        </h1>
      </div>
    </div>
  );
};

export default Button;
