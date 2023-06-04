import { createContext, useState, useEffect } from "react";
import { useFetch } from "../hooks/useFetch";

export const MoviesContext = createContext();

const api = import.meta.env.VITE_API;

export const MoviesContextProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);
  const [category, setCategory] = useState(null);
  const [page, setPage] = useState(1);

  const url = category
    ? `${api}popular?with_genres=${category}&page=${page}&api_key=`
    : `${api}popular?page=${page}&api_key=`;

  const { data } = useFetch(url);

  useEffect(() => {
    setMovies([...data]);
    setPage(1);
  }, [category]);

  useEffect(() => {
    if (movies.length === 0 && page === 1) {
      setMovies([...data]);
    } else if (page > 1) {
      const grossMovies = [...movies, ...data];
      const allMovies = grossMovies.filter(
        (movie, i, array) => i === array.findIndex(({ id }) => id === movie.id)
      );

      setMovies(allMovies);
    }
  }, [data, page]);

  return (
    <MoviesContext.Provider
      value={{ movies, setMovies, category, setCategory, page, setPage }}
    >
      {children}
    </MoviesContext.Provider>
  );
};
