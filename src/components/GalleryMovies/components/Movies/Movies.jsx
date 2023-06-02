import { CardMovie } from "../CardMovie/CardMovie";
import styles from "./Movies.module.css";

const urlImage = import.meta.env.VITE_API_IMAGE_POSTER;

export const Movies = ({ movies }) => {
  return (
    <div className={styles.movies}>
      <div className={styles.container}>
        {movies.map(({ id, original_title: title, poster_path }) => (
          <CardMovie key={id} title={title} urlImage={urlImage + poster_path} />
        ))}
      </div>
    </div>
  );
};
