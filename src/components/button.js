import { useState } from "react";
import "./button.css";

const Button = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="container">
      <h1>{count}</h1>
      <button className="button" onClick={() => setCount(count + 1)}>
        Click Me
      </button>
    </div>
  );
};

export default Button;
