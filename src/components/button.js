import { useState } from "react";
import "./button.css";
import WordCounter from "./wordCounter";

const Button = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="container">
      <h1>{count}</h1>
      <button className="button" onClick={() => setCount(count + 1)}>
        Click Me
      </button>
      <h1>
        <WordCounter count={count}/>
      </h1>
    </div>
  );
};

export default Button;
