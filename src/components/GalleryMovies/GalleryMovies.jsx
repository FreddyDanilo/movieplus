import { Categories } from "./components/Categories/Categories";
import { Movies } from "./components/Movies/Movies";
import { useEffect, useContext } from "react";
import styles from "./GalleryMovies.module.css";
import { MoviesContext } from "../../context/MoviesContext";
import { Overlay } from "./components/Overlay/Overlay";

export const GalleryMovies = () => {
  const { setPage } = useContext(MoviesContext);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries.some((entry) => entry.isIntersecting))
        setPage((prev) => prev + 1);
    });
    observer.observe(document.querySelector("#flag"));
    return () => observer.disconnect();
  }, []);

  console.log("render gallery");

  return (
    <div className={styles.gallery_movies}>
      <Categories />
      <Movies />
      <Overlay />

      <div id="flag" className={styles.flag}>
        &nbsp;
      </div>
    </div>
  );
};
