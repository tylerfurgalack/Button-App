import { useEffect, useState, useMemo } from "react";
import "./button.css";
import WordCounter from "./WordCounter";
import Timer from "./Timer";
//"Boşalmak"
const Button = () => {
  const [count, setCount] = useState(0);
  const [showBosalmak, setShowBosalmak] = useState(false);
  useEffect(() => {
    if (count === 5) {
      setTimeout(() => {
        setShowBosalmak(true);
        setTimeout(() => {
          setCount(0);
          setShowBosalmak(false);
        }, 3000);
      }, 2000);
    }
  }, [count, setCount, setShowBosalmak]);
  const className = useMemo(() => {
    if(count >= 5) {
      return "wordCountContainer flash"
    } else {
      return "wordCountContainer"
    }
  }, [count]);
  
  return (
    <div>
    <div className="container">
      <div className={className}>
        <h1 className="wordCountText">{count}</h1>
      </div>
      <div className="buttonContainer">
        <button
          className="button"
          onClick={() => setCount(count + 1)}
          disabled={count >= 5}
        >
          Keep Clicking
        </button>
      </div>
      <div className={className}>
        <h1 className="wordCountText">
          <WordCounter numCount={count} showBosalmak={showBosalmak}/>
        </h1>
      </div>
    </div>
    <Timer count={count} showBosalmak={showBosalmak} />
    </div>
  );
};

export default Button;
