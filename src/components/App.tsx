import { useState } from "react";
import styles from "./App.module.scss";
import { Link, Outlet } from "react-router-dom";
import imagePng from "@/assets/rocket.png";
import imageJpg from "@/assets/tiger.jpg";
import ImageSvg from "@/assets/freecodecamp.svg";

export const App = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <Link to={"/about"}>About</Link>
      <br />
      <Link to={"/shop"}>Shop</Link>
      <br />

      <div>
        <label>Png image</label>
        <img src={imagePng} alt="" width={"100px"} height={"100px"} />
      </div>

      <div>
        <label>Jpg image</label>
        <img src={imageJpg} alt="" width={"300px"} height={"200px"} />
      </div>

      <div>
        <label>Svg image</label>
        <ImageSvg className={styles.icon} width={"50px"} height={"50px"}/>
      </div>

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
