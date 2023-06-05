import { useEffect, useContext } from "react";
import { MoviesContext } from "../../../../context/MoviesContext";
import styles from "./Flag.module.css";

export const Flag = () => {
  const { setPage } = useContext(MoviesContext);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries.some((entry) => entry.isIntersecting)) {
        setPage((prev) => prev + 1);
      }
    });
    observer.observe(document.querySelector("#flag"));
    return () => observer.disconnect();
  }, []);

  return (
    <div id="flag" className={styles.flag}>
      &nbsp;
    </div>
  );
};
