import { Link } from "react-router-dom";
import styles from "./Categories.module.css";

const categories = [
  "Action",
  "Adventure",
  "Anime",
  "Animation",
  "Cinema",
  "Comedy",
  "Crime",
  "Documentary",
  "Drama",
  "Family",
  "Fantasy",
  "History",
  "Terror",
  "Music",
  "Mystery",
  "Romance",
  "Science Fiction",
  "TV",
  "Thriller",
  "War",
  "Wild West",
];

categories.sort();

export const Categories = () => {
  return (
    <div className={styles.categories}>
      <div className={styles.container}>
        <ul>
          {categories.map((category) => (
            <li key={encodeURI(category)}>
              <Link to={category.toLocaleLowerCase()}>{category}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
