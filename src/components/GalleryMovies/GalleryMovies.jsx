import { Categories } from "./components/Categories/Categories";
import { Movies } from "./components/Movies/Movies";
import { useState, useEffect, useContext } from "react";
import styles from "./GalleryMovies.module.css";
import { MoviesContext } from "../../context/MoviesContext";

export const GalleryMovies = () => {
  const [positionOverlay, setPositionOverlay] = useState({
    x: 256,
    y: 256,
  });

  const { setPage } = useContext(MoviesContext);

  window.onmousemove = ({ clientX, clientY }) => {
    setPositionOverlay({
      x: clientX,
      y: clientY,
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries.some((entry) => entry.isIntersecting))
        setPage((prev) => prev + 1);
    });
    observer.observe(document.querySelector("#flag"));
    return () => observer.disconnect();
  }, []);

  return (
    <div className={styles.gallery_movies}>
      <Categories />
      <Movies />
      <div
        className={styles.overlay}
        style={{
          top: positionOverlay.y - 240,
          left: positionOverlay.x - 240,
        }}
      ></div>
      <div id="flag" className={styles.flag}>
        flag
      </div>
    </div>
  );
};
