import { useRef } from "react";
import styles from "./Overlay.module.css";
import { useParams } from "react-router-dom";

export const Overlay = () => {
  const overlayRef = useRef();

  window.onmousemove = ({ clientX, clientY }) => {
    try {
      overlayRef.current.style.left = `${clientX - 240}px`;
      overlayRef.current.style.top = `${clientY - 240}px`;
    } catch (error) {}
  };

  return <div className={styles.overlay} ref={overlayRef}></div>;
};
