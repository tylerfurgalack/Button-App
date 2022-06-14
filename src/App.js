import { useState } from "react";
import "./App.css";
import Button from "./components/Button";
import Timer from "./components/Timer";

function App() {
  const [count, setCount] = useState(0);
  return (
    <body className="page">
      <Button count={count} setCount={setCount}/>
      <Timer count={count} setCount={setCount}/>
    </body>
  );
}

export default App;
