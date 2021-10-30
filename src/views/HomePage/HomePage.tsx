import React from "react";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { getTrending } from "../../services/theMovieAPI";
import Heading from "../../components/generic/Heading";
import { movieTypes } from "../../interfaces/interfaces";
import MoviesList from "../../components/generic/MoviesList";

const HomePage: React.FC = () => {
  const [movies, setMovies] = useState<movieTypes[] | null>(null);
  const location = useLocation();
  
  useEffect(() => {
    getTrending().then(setMovies);
  }, []);
  return (
    <>
      <Heading text={"Trending today"} />
      <MoviesList movies={movies} backLocation={location}/>
    </>
  );
};
export default HomePage;
