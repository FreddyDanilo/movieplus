import { useParams } from "react-router-dom";
import styles from "./Movie.module.css";
import { useFetch } from "../../hooks/useFetch";

const api = import.meta.env.VITE_API;
const urlImage = import.meta.env.VITE_API_IMAGE_BACKDROP;

export const Movie = () => {
  const { id } = useParams();
  const url = `${
    api + id
  }?&append_to_response=credits,videos,release_dates&api_key=`;

  const { data: movie } = useFetch(url, true);

  const movieDetails = movie.length > 0 && {
    title: movie[0].title,
    src: urlImage + movie[0].backdrop_path,
    description: movie[0].overview,
    year: String(movie[0].release_date).split("-")[0],
    categories: movie[0].genres.map((category) => category.name).join(" - "),
  };
  console.log(movie);
  console.log(movieDetails);

  return (
    <div className={styles.movie}>
      {movie.length > 0 && (
        <>
          <img
            src={movieDetails.src}
            alt="wallpaper"
            className={styles.wallpaper}
          />
          <div className={styles.container}>
            <div className={styles.details}>
              <span className={styles.title}>{movieDetails.title}</span>
              <p className={styles.description}>{movieDetails.description}</p>
              <i className={styles.categories}>
                {movieDetails.categories} | {movieDetails.year}
              </i>
            </div>
          </div>
          <div className={styles.overlay_left}></div>
          <div className={styles.overlay_bottom}></div>
        </>
      )}
    </div>
  );
};
