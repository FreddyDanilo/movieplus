import styles from "./Categories.module.css";
import { useFetch } from "../../../../hooks/useFetch";
import { useMoviesContext } from "../../../../hooks/useMoviesContext";

const api = import.meta.env.VITE_API_CATEGORIES;

export const Categories = () => {
  const url = `${api}list?api_key=`;
  const { data: categories } = useFetch(url);
  const {category, setCategory} = useMoviesContext()

  return (
    <div className={styles.categories}>
      <div className={styles.container}>
        <ul>
          {categories.map(({ id, name }) => (
            <li key={id} onClick={() => category != id && setCategory(id)}>
              {name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
