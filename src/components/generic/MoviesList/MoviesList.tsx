import React from "react";
import { movieTypes } from "../../../interfaces/interfaces";
import { Link } from "react-router-dom";

interface propTypes {
  movies: movieTypes[] | null;
  backLocation: any;
}

const MoviesList: React.FC<propTypes> = ({ movies, backLocation }) => {
  return (
    <ul>
      {movies &&
        movies.map((item: movieTypes) => (
          <li key={item.id}>
            <Link
              to={{
                pathname: `/movies/${item.id}`,
                state: { from: backLocation },
              }}
            >
              {item.title}
            </Link>
          </li>
        ))}
    </ul>
  );
};
export default MoviesList;
