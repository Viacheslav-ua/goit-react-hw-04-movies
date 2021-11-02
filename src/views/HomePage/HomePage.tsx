import React from "react";
import { useQuery } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { useLocation } from "react-router-dom";
import { getTrending } from "../../services/theMovieAPI";
import Heading from "../../components/generic/Heading";
import MoviesList from "../../components/generic/MoviesList";

const HomePage: React.FC = () => {
  const { isLoading, isError, data, error } = useQuery(
    "queryList",
    getTrending
  );

  const location = useLocation();

  if (isLoading) return <span>Loading...</span>;

  if (isError) return <span>Error: {error}</span>;

  return (
    <>
      <Heading text={"Trending today"} />
      <MoviesList movies={data} backLocation={location} />
      <ReactQueryDevtools initialIsOpen />
    </>
  );
};
export default HomePage;
