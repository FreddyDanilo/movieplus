import { CardMovie } from "./components/CardMovie/CardMovie";
import styles from "./GalleryMovies.module.css";

const urlImage = import.meta.env.VITE_API_IMAGE_POSTER;

export const GalleryMovies = ({ movies }) => {
  return (
    <div className={styles.gallery_movies}>
      <p>aqui</p>
      {movies.map(({ id, title, poster_path }) => (
        <CardMovie key={id} title={title} urlImage={urlImage + poster_path} />
      ))}
    </div>
  );
};
