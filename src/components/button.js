import { useState } from "react";

const Button = () => {
  const [count, setCount] = useState(0);
  return <>
  <h1>{count}</h1>
  <button onClick={() => setCount(count + 1)}>Click Me</button>
  </>
};

export default Button;
