import { useFetch } from "../../hooks/useFetch";
import { RandomMovie } from "./components/RandomMovie";
import { GalleryMovies } from "../../components/GalleryMovies/GalleryMovies";
import { useContext } from "react";
import { CategoryContext } from "../../context/CategoryContext";
import styles from "./Home.module.css";

const api = import.meta.env.VITE_API;

export const Home = () => {
  const { category } = useContext(CategoryContext);
  const url = category
    ? `${api}popular?with_genres=${category}&api_key=`
    : `${api}popular?api_key=`;

  const { data: movies } = useFetch(url);

  return (
    <div className={styles.home}>
      <RandomMovie />
      <GalleryMovies movies={movies} />
    </div>
  );
};
