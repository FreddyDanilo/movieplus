import styles from "./Categories.module.css";
import { useFetch } from "../../../../hooks/useFetch";
import { useContext } from "react";
import { MoviesContext } from "../../../../context/MoviesContext";

const api = import.meta.env.VITE_API_CATEGORIES;

export const Categories = () => {
  const url = `${api}list?api_key=`;
  const { data: categories } = useFetch(url);

  const { setCategory } = useContext(MoviesContext);

  const changeCategory = (id) => {
    setCategory(id);
  };

  return (
    <div className={styles.categories}>
      <div className={styles.container}>
        <ul>
          {categories.map(({ id, name }) => (
            <li
              key={id}
              onClick={() => {
                changeCategory(id);
              }}
            >
              {name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
