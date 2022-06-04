import { useState, useEffect } from "react";
import "./button.css";
import WordCounter from "./WordCounter";
//"Boşalmak"
const Button = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (count === 31) {
      setTimeout(() => {
        setCount(32);
        setTimeout(() => {
          setCount(0);
        }, 3000);
      }, 2000);
    }
  }, [count]);

  return (
    <div className="container">
      <div className="wordCountContainer">
        <h1 className="wordCountText">{count > 31 ? 31 : count}</h1>
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
      <div className="wordCountContainer">
        <h1 className="wordCountText">
          <WordCounter count={count} />
        </h1>
      </div>
    </div>
  );
};

export default Button;
