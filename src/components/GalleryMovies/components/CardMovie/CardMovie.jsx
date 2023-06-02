import styles from "./CardMovie.module.css";

export const CardMovie = ({ title, urlImage }) => {
  return (
    <div>
      <img src={urlImage} alt={title} />
    </div>
  );
};
