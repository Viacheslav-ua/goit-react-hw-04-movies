import React from "react";
import { useState, useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { searchMovies } from "../../services/theMovieAPI";
import SearchForm from "../../components/generic/SearchForm";

const MoviesPage: React.FC = () => {
  const history = useHistory();
  const location = useLocation();
  const [keyword, setKeyword] = useState<string>("");

  useEffect(() => {
    if (keyword !== "") {
      // searchMovies(keyword);
      console.log(keyword);
    }
  }, [keyword]);

  const onSearch = (str: string) => {
    // if (str === keyword) return;
    // setKeyword(str);
    history.push(`/movies?search=${str}`);
  };

  return (
    <>
      <SearchForm onSubmit={onSearch} />
    </>
  );
};
export default MoviesPage;
