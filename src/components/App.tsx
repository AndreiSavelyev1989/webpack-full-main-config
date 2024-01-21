import { useState } from "react";
import styles from "./App.module.scss";
import { Link, Outlet } from "react-router-dom";

export const App = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <Link to={"/about"}>About</Link>
      <br />
      <Link to={"/shop"}>Shop</Link>
      <br />

      <h1 className={styles.value}>{count}</h1>
      <button
        className={styles.button}
        onClick={() => setCount((prev) => prev + 1)}
      >
        Click
      </button>
      <Outlet />
    </div>
  );
};
