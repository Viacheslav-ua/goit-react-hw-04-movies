import React from "react";
import { useState, useEffect } from "react";
import { Link, useRouteMatch, useLocation } from "react-router-dom";
import { getTrending } from "../../services/theMovieAPI";
import Heading from "../../components/generic/Heading";
import { movieTypes } from "../../interfaces/interfaces";

// interface titleListType {
//   id: number;
//   title: string;
// }

const HomePage: React.FC = () => {
  const [movies, setMovies] = useState<movieTypes[] | null>(null);
  // const { url } = useRouteMatch<string>();
  const location = useLocation();
  
  useEffect(() => {
    getTrending().then(setMovies);
  }, []);
  return (
    <>
      <Heading text={"Trending today"} />
      <ul>
        {movies &&
          movies.map((item: movieTypes) => (
            <li key={item.id}>
              <Link
                to={{
                  pathname: `/movies/${item.id}`,
                  state: {from: location},
                }}
              >
                {item.title}
              </Link>
            </li>
          ))}
      </ul>
    </>
  );
};
export default HomePage;
