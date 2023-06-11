import { Link } from "react-router-dom";
import styles from "./RandomMovie.module.css";
import { useFetch } from "../../../hooks/useFetch";

const url = import.meta.env.VITE_API_RANDOM_MOVIE;
const urlImage = import.meta.env.VITE_API_IMAGE_BACKDROP;
const api = import.meta.env.VITE_API_CATEGORIES;
const urlCategories = `${api}list?api_key=`;
const index = Math.floor(Math.random() * 20);

export const RandomMovie = () => {
  const { data: categories } = useFetch(urlCategories);
  const { data: randomMovie } = useFetch(url);
  const chosenMovie = randomMovie.length > 0 ? randomMovie[index] : "";

  const getCategories = () => {
    const movieCategories =
      randomMovie.length > 0
        ? categories
            .filter((category) => chosenMovie?.genre_ids.includes(category.id))
            .map((item) => item.name)
            .join(" - ")
        : "";
    return movieCategories;
  };

  const movieDetails = {
    title: chosenMovie.name,
    src: urlImage + chosenMovie.backdrop_path,
    description: chosenMovie.overview,
    year: String(chosenMovie.first_air_date).split("-")[0],
    categories: getCategories(),
  };

  return (
    <div className={styles.random_movie}>
      {randomMovie.length > 0 && (
        <>
          <img
            src={movieDetails.src}
            alt="wallpaper"
            className={styles.wallpaper}
          />

          <div className={styles.overlay_left}></div>
          <div className={styles.overlay_bottom}></div>
          <div className={styles.container}>
            <div className={styles.details}>
              <span>
                <Link to={"/"} className={styles.title}>
                  {movieDetails.title}
                </Link>
              </span>
              <p className={styles.description}>{movieDetails.description}</p>
              <i className={styles.categories}>
                {movieDetails.categories} | {movieDetails.year}
              </i>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
