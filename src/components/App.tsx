import { useState } from "react";
import styles from "./App.module.scss";

export const App = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1 className={styles.value}>{count}</h1>
      <button
        className={styles.button}
        onClick={() => setCount((prev) => prev + 1)}
      >
        Click
      </button>
    </div>
  );
};
