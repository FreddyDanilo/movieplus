import { useState } from "react";

import styles from "./Overlay.module.css";

export const Overlay = () => {
  const [positionOverlay, setPositionOverlay] = useState({
    x: 256,
    y: 256,
  });

  window.onmousemove = ({ clientX, clientY }) => {
    setPositionOverlay({
      x: clientX,
      y: clientY,
    });
  };
  
  return (
    <div
      className={styles.overlay}
      style={{
        top: positionOverlay.y - 240,
        left: positionOverlay.x - 240,
      }}
    ></div>
  );
};
