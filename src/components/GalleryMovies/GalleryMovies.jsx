import { Categories } from "./components/Categories/Categories";
import { Movies } from "./components/Movies/Movies";
import { useRef, useState } from "react";
import styles from "./GalleryMovies.module.css";

export const GalleryMovies = ({ movies }) => {
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
    <div className={styles.gallery_movies}>
      <Categories />
      <Movies movies={movies} />
      <div
        className={styles.overlay}
        style={{
          top: positionOverlay.y - 240,
          left: positionOverlay.x - 240,
        }}
      ></div>
    </div>
  );
};
