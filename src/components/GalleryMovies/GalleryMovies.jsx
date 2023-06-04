import { Categories } from "./components/Categories/Categories";
import { Movies } from "./components/Movies/Movies";
import styles from "./GalleryMovies.module.css";
import { Overlay } from "./components/Overlay/Overlay";
import { Flag } from "./components/Flag/Flag";

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
