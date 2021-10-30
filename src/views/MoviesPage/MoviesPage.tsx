import React from "react";
import { useState, useEffect } from "react";
import { useHistory, useLocation,Link } from "react-router-dom";
import { searchMovies } from "../../services/theMovieAPI";
import MoviesList from "../../components/generic/MoviesList"
import SearchForm from "../../components/generic/SearchForm";
// import { URLSearchParams } from "url";
import { movieTypes } from "../../interfaces/interfaces";

const MoviesPage: React.FC = () => {
  const [movies, setMovies] = useState<movieTypes[] | null>(null);
  const history = useHistory();
  const location = useLocation();
  
  const searchParams = new URL(window.location.href).searchParams.get('keywords')
   
   useEffect(() => {
    
    if (searchParams) {
      searchMovies(searchParams) 
      .then(res => setMovies(res))
    }
   }, [searchParams]);

  const onSearch = (str: string) => {
    if (str === searchParams) return;
    history.push({...location, search: `keywords=${str}`});
  };

  return (
    <>
      <SearchForm onSubmit={onSearch} />
      <MoviesList movies={movies} backLocation={location}/>
    </>
  );
};
export default MoviesPage;
