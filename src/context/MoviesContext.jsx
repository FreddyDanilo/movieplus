import { createContext, useState, useEffect } from "react";
import { useFetch } from "../hooks/useFetch";

export const MoviesContext = createContext();

const api = import.meta.env.VITE_API;

export const MoviesContextProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);
  const [category, setCategory] = useState(null);
  const [page, setPage] = useState(1);
  const [clear, setClear] = useState(false);

  const url = category
    ? `${api}popular?with_genres=${category}&page=${page}&api_key=`
    : `${api}popular?page=${page}&api_key=`;

  useEffect(() => {
    setClear(true);
    setPage(1);
  }, [category]);

  useEffect(() => {
    setClear(false);
  }, [page]);

  const { data } = useFetch(url, clear);

  useEffect(() => {
    setMovies(data);
  }, [data]);

  return (
    <MoviesContext.Provider
      value={{ movies, setMovies, category, setCategory, page, setPage }}
    >
      {children}
    </MoviesContext.Provider>
  );
};
