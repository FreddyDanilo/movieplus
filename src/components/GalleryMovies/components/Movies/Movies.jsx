import { useContext } from "react";
import { CardMovie } from "../CardMovie/CardMovie";
import styles from "./Movies.module.css";
import { MoviesContext } from "../../../../context/MoviesContext";

const urlImage = import.meta.env.VITE_API_IMAGE_POSTER;

export const Movies = () => {
  const { movies } = useContext(MoviesContext);

  return (
    <div className={styles.movies}>
      <div className={styles.container}>
        {movies.map(
          ({ id, original_title: title, poster_path }) =>
            poster_path && (
              <CardMovie
                key={id}
                title={title}
                urlImage={urlImage + poster_path}
              />
            )
        )}
      </div>
    </div>
  );
};
