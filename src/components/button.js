import { useState, useEffect } from "react";
import "./button.css";
import WordCounter from "./wordCounter";
//"Boşalmak"
const Button = () => {
  const [text, setText] = useState("sıfır");
  const [count, setCount] = useState(0);
  useEffect(()=> {
    if(count === 31){
      setTimeout(()=>{
        setCount(0);
      }, 5000);
    }
  },[count]);

  return (
    <div className="container">
      <div className="wordCountContainer">
        <h1 className="wordCountText">{count}</h1>
      </div>
      <div className="buttonContainer">
        <button
          className="button"
          onClick={() => setCount(count + 1)}
          disabled={count === 31}
        >
          Keep Clicking
        </button>
      </div>
      <div className="wordCountContainer">
        <h1 className="wordCountText">
          <WordCounter count={count} text={text} setText={setText}/>
        </h1>
      </div>
    </div>
  );
};

export default Button;
