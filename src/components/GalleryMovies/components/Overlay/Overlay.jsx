import { useRef } from "react";

import styles from "./Overlay.module.css";

export const Overlay = () => {
  const overlayRef = useRef();

  window.onmousemove = ({ clientX, clientY }) => {
    overlayRef.current.style.left = `${clientX - 240}px`;
    overlayRef.current.style.top = `${clientY - 240}px`;
  };

  return <div className={styles.overlay} ref={overlayRef}></div>;
};
