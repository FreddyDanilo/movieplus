import { Link } from "react-router-dom";

import styles from "./RandomMovie.module.css";

import wallpaper from "../../../assets/deadpool-wallpaper.jpg";

export const RandomMovie = () => {
  return (
    <div className={styles.random_movie}>
      <img src={wallpaper} alt="wallpaper" className={styles.wallpaper} />
      <div className={styles.overlay_left}></div>
      <div className={styles.overlay_bottom}></div>
      <div className={styles.container}>
        <div className={styles.details}>
          <span>
            <Link to={"/"} className={styles.title}>
              Deadpool
            </Link>
          </span>
          <p className={styles.description}>
            It is an upcoming American superhero film based on the Marvel Comics
            character of the same name, produced by Marvel Studios and Maximum
            Effort, and distributed by Walt Disney Studios Motion Pictures. It
            is the sequel to Deadpool and Deadpool 2, and the thirty-seventh
            film in the Marvel Cinematic Universe.
          </p>
          <i className={styles.categories}>Action - Adventure | 2018</i>
        </div>
      </div>
    </div>
  );
};
