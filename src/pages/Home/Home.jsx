import { useFetch } from "../../hooks/useFetch";
import { RandomMovie } from "./components/RandomMovie";
import { GalleryMovies } from "../../components/GalleryMovies/GalleryMovies";
import styles from "./Home.module.css";

export const Home = () => {
  return (
    <div className={styles.home}>
      <RandomMovie />
      <GalleryMovies />
    </div>
  );
};
