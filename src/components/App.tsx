import { useState } from "react";
import "./App.scss";

export const App = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount((prev) => prev + 1)}>Click</button>
    </div>
  );
};
