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
              <Link to={`/movies/${item.id}`}>{item.title}</Link>
              <Link
                to={{
                  pathname: `/movies/${item.id}`,
                  // eslint-disable-next-line no-restricted-globals
                  state: {
                    from: location,
                    id: "asd",
                  },
                  search: "dfg",
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
