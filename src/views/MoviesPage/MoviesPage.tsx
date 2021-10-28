import React from "react";
import { useState, useEffect } from "react";
import { searchMovies } from "../../services/theMovieAPI";
import SearchForm from "../../components/generic/SearchForm";

const MoviesPage: React.FC = () => {
  const [keyword, setKeyword] = useState<string>("");

  useEffect(() => {
    if (keyword !== "") {
      // searchMovies(keyword);
      console.log(keyword);
    }
  }, [keyword]);

  const resetState = (str: string) => {
    if (str === keyword) return;
    setKeyword(str);
  };

  return (
    <>
      <SearchForm onSubmit={resetState} />
    </>
  );
};
export default MoviesPage;
