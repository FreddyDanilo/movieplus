import { Categories } from "./components/Categories/Categories";
import { Movies } from "./components/Movies/Movies";
import { Overlay } from "./components/Overlay/Overlay";
import { Flag } from "./components/Flag/Flag";
import styles from "./GalleryMovies.module.css";

export const GalleryMovies = () => {
  return (
    <div className={styles.gallery_movies}>
      <Categories />
      <Movies />
      <Overlay />
      <Flag />
    </div>
  );
};
