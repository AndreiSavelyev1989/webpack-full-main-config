import { useState } from "react";
import styles from "./App.module.scss";
import { Link, Outlet } from "react-router-dom";
import imagePng from "@/assets/rocket.png";
import imageJpg from "@/assets/tiger.jpg";
import ImageSvg from "@/assets/freecodecamp.svg";

//Tree shaking
//if we call in our component
function TODO(a:number) {
  console.log("TODO");
}

export const App = () => {
  const [count, setCount] = useState(0);
  TODO("32");
  if (__PLATFORM__ === "mobile") {
    return <div>IS MOBILE PLATFORM</div>;
  }

  if (__PLATFORM__ === "desktop") {
    return <div>IS DESKTOP PLATFORM</div>;
  }

  return (
    <div>
      <h1>__PLATFORM__: {__PLATFORM__}</h1>
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
        <ImageSvg className={styles.icon} width={"50px"} height={"50px"} />
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
