import { useContext } from "react";
import { MoviesContext } from "../context/MoviesContext";

export const useMoviesContext = () => {
  const context = useContext(MoviesContext);
  return context;
};
