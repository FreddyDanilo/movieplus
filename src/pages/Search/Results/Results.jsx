import styles from "./Results.module.css";
import { useFetch } from "../../../hooks/useFetch";
import { CardMovie } from "../../../components/GalleryMovies/components/CardMovie/CardMovie";
import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";

const api = import.meta.env.VITE_API_SEARCH;
const urlImage = import.meta.env.VITE_API_IMAGE_POSTER;

export const Results = () => {
  const [results, setResults] = useState([]);
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q");
  const url = `${api}&query=${query}&api_key=`;
  const { data: movies } = useFetch(url);

  useEffect(() => {
    setResults([...movies]);
  }, [query]);

  return (
    <div className={styles.results_container}>
      <span className={styles.results}>Resultados</span>
      <div className={styles.movies}>
        <div className={styles.container}>
          {movies.length > 0 &&
            movies.map(
              ({ id, original_title: title, poster_path }) =>
                poster_path && (
                  <CardMovie
                    key={id}
                    title={title}
                    urlImage={urlImage + poster_path}
                  />
                )
            )}
        </div>
      </div>
    </div>
  );
};
