import styles from "./CardMovie.module.css";

export const CardMovie = ({ title, urlImage }) => {
  return (
    <div className={styles.card_movie}>
      <img src={urlImage} alt={title} />
    </div>
  );
};
