import { useState } from "react";
import "./button.css";
import WordCounter from "./wordCounter";

const Button = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="container">
      <div className="wordCountContainer">
      <h1>{count}</h1>
      </div>
      <div className="buttonContainer" >
        <button className="button" onClick={() => setCount(count + 1)}>
          Click Me
        </button>
      </div>
      <div className="wordCountContainer">
      <h1>
        <WordCounter count={count} />
      </h1>
      </div>
    </div>
  );
};

export default Button;
